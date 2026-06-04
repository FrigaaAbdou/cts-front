import { useEffect, useMemo, useState } from "react";
import { CheckCheck, LoaderCircle } from "lucide-react";

import {
  AppointmentFilterToolbar,
  type AppointmentFiltersValue,
} from "@/components/admin/appointments/FilterToolbar";
import { AppointmentsPagination } from "@/components/admin/appointments/AppointmentsPagination";
import { AppointmentsTable } from "@/components/admin/appointments/AppointmentsTable";
import { AdminPageHeader } from "@/components/admin/layout/AdminPageHeader";
import { AdminConfirmDialog } from "@/components/admin/shared/AdminConfirmDialog";
import { type AdminStatusBadgeValue } from "@/components/admin/shared/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAdminAuth, isUnauthorizedAdminError } from "@/features/admin-auth/AdminAuthProvider";
import { donationTypes } from "@/features/appointment/constants/formOptions";
import {
  listAdminAppointments,
  updateAdminAppointmentsStatusBulk,
  updateAdminAppointmentStatus,
  type AdminAppointmentListItem,
} from "@/lib/api/adminAppointmentsApi";
import { listAdminCampaigns } from "@/lib/api/adminCampaignsApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const donationTypeLabels = Object.fromEntries(
  donationTypes.map((item) => [item.value, item.label]),
) as Record<"whole_blood" | "plasma" | "platelets", string>;

const copy = {
  title: "Demandes de rendez-vous",
  description:
    "Traitement quotidien des demandes avec recherche, pagination serveur et actions en lot.",
  searchPlaceholder: "Rechercher par nom ou téléphone",
  statusPlaceholder: "Statut",
  donationTypePlaceholder: "Type de don",
  campaignPlaceholder: "Campagne",
  allStatuses: "Tous les statuts",
  allDonationTypes: "Tous les types de don",
  allCampaigns: "Toutes les campagnes",
  pageSizeLabel: "Taille de page",
  resetFilters: "Réinitialiser",
  pageLoading: "Chargement de la page en cours...",
  selectionCount: "demandes sélectionnées",
  selectionHint: "Les actions en lot s'appliquent uniquement aux lignes sélectionnées.",
  bulkStatusPlaceholder: "Choisir un statut",
  bulkApply: "Appliquer aux demandes",
  table: {
    selectRow: "Sélectionner la demande de",
    selectAll: "Sélectionner toutes les demandes visibles",
    donor: "Donneur",
    slot: "Créneau",
    campaign: "Campagne",
    donationType: "Type de don",
    status: "Statut",
    actions: "Actions",
    viewDetail: "Voir le détail",
    emptyCampaign: "Sans campagne",
    donationTypes: donationTypeLabels,
    statusLabels: {
      pending: "En attente",
      confirmed: "Confirmé",
      rejected: "Rejeté",
      completed: "Terminé",
      cancelled: "Annulé",
    },
  },
  pagination: {
    page: "Page",
    previous: "Précédent",
    next: "Suivant",
    results: "Résultats",
  },
  emptyTitle: "Aucune demande ne correspond aux filtres actuels.",
  emptyDescription:
    "Ajustez la recherche ou les filtres pour retrouver les rendez-vous attendus.",
  errorTitle: "Impossible de charger les demandes admin.",
  errorDescription:
    "Vérifiez la session admin ou la disponibilité de l'API puis rechargez la page.",
  retry: "Réessayer",
  destructiveStatusTitle: "Confirmer le changement de statut",
  destructiveStatusDescription:
    "Cette mutation retire la demande de son flux normal de traitement. Voulez-vous vraiment continuer ?",
  destructiveStatusAction: "Confirmer le statut",
  destructiveBulkStatusDescription:
    "Cette action modifiera plusieurs demandes en une seule fois et les retirera de leur flux normal de traitement. Voulez-vous continuer ?",
} as const;

function getAllowedTransitions(
  currentStatus: AdminStatusBadgeValue,
  role: "super_admin" | "manager" | "operator",
) {
  if (role === "operator") {
    if (currentStatus === "pending") {
      return ["confirmed", "rejected"] as const;
    }

    return [] as const;
  }

  if (currentStatus === "pending") {
    return ["confirmed", "rejected", "cancelled"] as const;
  }

  if (currentStatus === "confirmed") {
    return ["completed", "cancelled"] as const;
  }

  return [] as const;
}

function isDestructiveStatus(status: AdminStatusBadgeValue) {
  return status === "rejected" || status === "cancelled";
}

function intersectTransitions(rows: AdminAppointmentListItem[], role: "super_admin" | "manager" | "operator") {
  if (rows.length === 0) {
    return [] as AdminStatusBadgeValue[];
  }

  return rows
    .map((row) => getAllowedTransitions(row.status, role))
    .reduce<AdminStatusBadgeValue[]>((common, transitions, index) => {
      if (index === 0) {
        return [...transitions];
      }

      const transitionSet = new Set<AdminStatusBadgeValue>(transitions as readonly AdminStatusBadgeValue[]);
      return common.filter((value) => transitionSet.has(value));
    }, []);
}

export function AdminAppointmentsListPage() {
  const locale = "fr" as const;
  const pageCopy = copy;
  const { token, admin, logout } = useAdminAuth();
  const adminRole = admin?.role ?? "operator";

  const [items, setItems] = useState<AdminAppointmentListItem[]>([]);
  const [campaigns, setCampaigns] = useState<Array<{ code: string; label: string }>>([]);
  const [filters, setFilters] = useState<AppointmentFiltersValue>({
    search: "",
    status: "all",
    donationType: "all",
    campaignCode: "",
    pageSize: "10",
  });
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 1,
  });
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkStatus, setBulkStatus] = useState<AdminStatusBadgeValue | "">("");
  const [isBulkSubmitting, setIsBulkSubmitting] = useState(false);
  const [pendingStatusChange, setPendingStatusChange] = useState<{
    ids: string[];
    status: AdminStatusBadgeValue;
    mode: "single" | "bulk";
  } | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedSearch(filters.search.trim());
    }, 250);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [filters.search]);

  const activeFilters = useMemo(
    () => ({
      page,
      pageSize: Number(filters.pageSize),
      search: debouncedSearch,
      status: filters.status,
      donationType: filters.donationType,
      campaignCode: filters.campaignCode,
    }),
    [debouncedSearch, filters.campaignCode, filters.donationType, filters.pageSize, filters.status, page],
  );

  const selectedItems = useMemo(
    () => items.filter((item) => selectedIds.includes(item.id)),
    [items, selectedIds],
  );

  const bulkTransitions = useMemo(
    () => intersectTransitions(selectedItems, adminRole),
    [adminRole, selectedItems],
  );

  const allVisibleSelected = items.length > 0 && selectedIds.length === items.length;
  const someVisibleSelected = selectedIds.length > 0 && selectedIds.length < items.length;
  const showSkeleton = isLoading && !hasLoadedOnce;
  const isRefreshing = isLoading && hasLoadedOnce;
  const isToolbarDisabled = isLoading && !hasLoadedOnce;
  const isMutating = isBulkSubmitting;

  useEffect(() => {
    setSelectedIds([]);
    setBulkStatus("");
  }, [items]);

  async function loadCampaigns() {
    if (!token) {
      return;
    }

    const campaignItems = await listAdminCampaigns(token);
    setCampaigns(
      campaignItems.map((campaign) => ({
        code: campaign.code,
        label: campaign.localeContent.fr.title,
      })),
    );
  }

  async function loadAppointments() {
    if (!token) {
      setErrorMessage(pageCopy.errorTitle);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await listAdminAppointments(token, activeFilters);
      setItems(response.items);
      setPagination(response.pagination);
      setHasLoadedOnce(true);
    } catch (error) {
      if (isUnauthorizedAdminError(error)) {
        await logout();
        return;
      }

      setErrorMessage(pageCopy.errorTitle);
      setHasLoadedOnce(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadCampaigns();
  }, [token]);

  useEffect(() => {
    void loadAppointments();
  }, [token, activeFilters]);

  async function runStatusMutation(ids: string[], status: AdminStatusBadgeValue) {
    if (!token) {
      return;
    }

    try {
      setIsBulkSubmitting(true);

      if (ids.length === 1) {
        await updateAdminAppointmentStatus(token, ids[0], status);
      } else {
        await updateAdminAppointmentsStatusBulk(token, { ids, status });
      }

      await loadAppointments();
    } catch (error) {
      if (isUnauthorizedAdminError(error)) {
        await logout();
        return;
      }

      setErrorMessage(
        typeof error === "object" && error && "message" in error && typeof error.message === "string"
          ? error.message
          : pageCopy.errorTitle,
      );
    } finally {
      setIsBulkSubmitting(false);
      setPendingStatusChange(null);
      setBulkStatus("");
    }
  }

  function handleFiltersChange(next: AppointmentFiltersValue) {
    setPage(1);
    setFilters(next);
  }

  function handleResetFilters() {
    setPage(1);
    setFilters({
      search: "",
      status: "all",
      donationType: "all",
      campaignCode: "",
      pageSize: "10",
    });
  }

  function handleSingleStatus(id: string, status: AdminStatusBadgeValue) {
    if (isDestructiveStatus(status)) {
      setPendingStatusChange({ ids: [id], status, mode: "single" });
      return;
    }

    void runStatusMutation([id], status);
  }

  function handleBulkApply() {
    if (!bulkStatus || selectedIds.length === 0) {
      return;
    }

    if (isDestructiveStatus(bulkStatus)) {
      setPendingStatusChange({ ids: selectedIds, status: bulkStatus, mode: "bulk" });
      return;
    }

    void runStatusMutation(selectedIds, bulkStatus);
  }

  return (
    <div className="flex flex-col gap-6">
      <AdminConfirmDialog
        open={pendingStatusChange !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingStatusChange(null);
          }
        }}
        title={pageCopy.destructiveStatusTitle}
        description={
          pendingStatusChange?.mode === "bulk"
            ? pageCopy.destructiveBulkStatusDescription
            : pageCopy.destructiveStatusDescription
        }
        actionLabel={pageCopy.destructiveStatusAction}
        actionVariant="destructive"
        isSubmitting={isBulkSubmitting}
        onConfirm={async () => {
          if (!pendingStatusChange) {
            return;
          }

          await runStatusMutation(pendingStatusChange.ids, pendingStatusChange.status);
        }}
      />

      <AdminPageHeader title={pageCopy.title} description={pageCopy.description} />

      <Card>
        <CardContent className="flex flex-col gap-4 pt-4">
          <AppointmentFilterToolbar
            copy={{
              searchPlaceholder: pageCopy.searchPlaceholder,
              statusPlaceholder: pageCopy.statusPlaceholder,
              donationTypePlaceholder: pageCopy.donationTypePlaceholder,
              campaignPlaceholder: pageCopy.campaignPlaceholder,
              allStatuses: pageCopy.allStatuses,
              allDonationTypes: pageCopy.allDonationTypes,
              allCampaigns: pageCopy.allCampaigns,
              pageSizeLabel: pageCopy.pageSizeLabel,
              reset: pageCopy.resetFilters,
              statuses: pageCopy.table.statusLabels,
              donationTypes: pageCopy.table.donationTypes,
            }}
            value={filters}
            campaigns={campaigns}
            isLoading={isToolbarDisabled}
            onChange={handleFiltersChange}
            onReset={handleResetFilters}
          />

          {selectedIds.length > 0 ? (
            <div className="flex flex-col gap-3 rounded-2xl border border-red-100 bg-red-50/50 p-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white text-brand-red shadow-sm">
                  <CheckCheck className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {selectedIds.length} {pageCopy.selectionCount}
                  </p>
                  <p className="text-sm text-slate-600">{pageCopy.selectionHint}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Select
                  value={bulkStatus || undefined}
                  onValueChange={(value) => {
                    setBulkStatus(value as AdminStatusBadgeValue);
                  }}
                  disabled={bulkTransitions.length === 0 || isMutating}
                >
                  <SelectTrigger
                    aria-label={pageCopy.bulkStatusPlaceholder}
                    className="h-11 w-full rounded-2xl border-slate-200 bg-white sm:w-56"
                  >
                    <SelectValue placeholder={pageCopy.bulkStatusPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {bulkTransitions.map((status) => (
                      <SelectItem key={status} value={status}>
                        {pageCopy.table.statusLabels[status]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  type="button"
                  className="rounded-2xl bg-brand-red text-white hover:bg-brand-dark"
                  disabled={!bulkStatus || isMutating || bulkTransitions.length === 0}
                  onClick={handleBulkApply}
                >
                  {isMutating ? <LoaderCircle className="animate-spin" data-icon="inline-start" /> : null}
                  {pageCopy.bulkApply}
                </Button>
              </div>
            </div>
          ) : null}

          {isRefreshing ? (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <LoaderCircle className="size-4 animate-spin text-brand-red" />
              <span>{pageCopy.pageLoading}</span>
            </div>
          ) : null}

          {showSkeleton ? (
            <div className="flex flex-col gap-3">
              <Skeleton className="h-12 w-full rounded-2xl" />
              <Skeleton className="h-12 w-full rounded-2xl" />
              <Skeleton className="h-12 w-full rounded-2xl" />
              <Skeleton className="h-12 w-full rounded-2xl" />
            </div>
          ) : errorMessage ? (
            <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-5">
              <p className="text-base font-semibold text-red-900">{pageCopy.errorTitle}</p>
              <p className="mt-2 text-sm leading-6 text-red-700">{pageCopy.errorDescription}</p>
              <Button
                type="button"
                variant="outline"
                className="mt-4 rounded-2xl border-red-200 bg-white text-red-700 hover:bg-red-100"
                onClick={() => {
                  void loadAppointments();
                }}
              >
                {pageCopy.retry}
              </Button>
            </div>
          ) : items.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-5 py-10 text-center">
              <p className="text-base font-semibold text-slate-900">{pageCopy.emptyTitle}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{pageCopy.emptyDescription}</p>
            </div>
          ) : (
            <>
              <div className="overflow-hidden rounded-3xl border border-slate-200">
                <AppointmentsTable
                  locale={locale}
                  copy={pageCopy.table}
                  items={items}
                  selectedIds={selectedIds}
                  allVisibleSelected={allVisibleSelected}
                  someVisibleSelected={someVisibleSelected}
                  isMutating={isMutating}
                  onToggleSelection={(id, checked) => {
                    setSelectedIds((current) => {
                      if (checked) {
                        return [...new Set([...current, id])];
                      }

                      return current.filter((value) => value !== id);
                    });
                  }}
                  onToggleSelectAll={(checked) => {
                    setSelectedIds(checked ? items.map((item) => item.id) : []);
                  }}
                  onUpdateStatus={handleSingleStatus}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Badge variant="outline" className="rounded-full border-slate-200 bg-slate-50">
                    {pagination.total}
                  </Badge>
                  <span>{pageCopy.pagination.results.toLowerCase()} chargés côté serveur</span>
                </div>

                <AppointmentsPagination
                  page={pagination.page}
                  totalPages={pagination.totalPages}
                  total={pagination.total}
                  pageSize={pagination.pageSize}
                  isLoading={isLoading}
                  copy={pageCopy.pagination}
                  onPageChange={setPage}
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
