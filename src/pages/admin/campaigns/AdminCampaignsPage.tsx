import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Eye,
  FileText,
  Globe2,
  PencilLine,
  Plus,
  RadioTower,
  Save,
  ShieldCheck,
} from "lucide-react";

import { AdminConfirmDialog } from "@/components/admin/shared/AdminConfirmDialog";
import { AdminPageHeader } from "@/components/admin/layout/AdminPageHeader";
import { useAdminAuth, isUnauthorizedAdminError } from "@/features/admin-auth/AdminAuthProvider";
import { useSafeBlocker } from "@/hooks/use-safe-blocker";
import {
  createAdminCampaign,
  listAdminCampaigns,
  updateAdminCampaign,
  type AdminCampaignItem,
  type AdminCampaignPayload,
  type CampaignBadgeLabel,
  type CampaignPriorityLevel,
  type CampaignTheme,
} from "@/lib/api/adminCampaignsApi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CampaignFormState = AdminCampaignPayload;

const copy = {
  fr: {
    title: "Campagnes",
    description:
      "Gérez simplement les campagnes visibles par le public. Commencez par repérer la campagne en cours, puis activez, publiez ou modifiez son contenu.",
    newCampaign: "Nouvelle campagne",
    save: "Enregistrer la campagne",
    editor: "Fiche campagne",
    loading: "Chargement des campagnes…",
    empty: "Aucune campagne pour le moment.",
    active: "Active",
    published: "Publiée",
    details: "Paramètres",
    code: "Code",
    status: "Statut",
    priority: "Priorité",
    badgeLabel: "Badge",
    theme: "Thème",
    startDate: "Début",
    endDate: "Fin",
    titleFr: "Titre FR",
    descriptionFr: "Description FR",
    ctaFr: "CTA FR",
    titleAr: "Titre AR",
    descriptionAr: "Description AR",
    ctaAr: "CTA AR",
    booleanYes: "Oui",
    booleanNo: "Non",
    isPublished: "Publiée",
    isActive: "Active",
    saved: "Campagne enregistrée.",
    error: "Impossible de charger ou sauvegarder les campagnes.",
    unsavedDialogTitle: "Quitter sans enregistrer ?",
    unsavedDialogDescription:
      "Les modifications non enregistrées de cette campagne seront perdues si vous continuez.",
    unsavedDialogAction: "Quitter sans enregistrer",
    archiveDialogTitle: "Confirmer l’archivage",
    archiveDialogDescription:
      "Cette campagne quittera les flux de planification actifs, mais son historique restera conservé pour l’analyse.",
    archiveDialogAction: "Archiver la campagne",
    selectedCampaign: "Campagne sélectionnée",
    selectedCampaignHint:
      "Vérifiez d'abord l'état de la campagne, puis modifiez son contenu public si nécessaire.",
    liveCampaign: "Campagne actuellement en ligne",
    liveCampaignEmpty: "Aucune campagne n'est actuellement active et publiée.",
    totalCampaigns: "Campagnes enregistrées",
    publishedCampaigns: "Publiées",
    draftCampaigns: "Brouillons ou à revoir",
    publicVisibility: "Visibilité publique",
    publicVisibilityHint:
      "Ces options déterminent si la campagne peut être vue par les donneurs sur le site.",
    internalSettings: "Réglages internes",
    internalSettingsHint:
      "Ces champs servent à l'organisation interne. Ils peuvent rester simples et stables dans le temps.",
    publicContent: "Contenu affiché au public",
    publicContentHint:
      "Rédigez ici le titre, le message et le bouton vus par les donneurs.",
    publicationState: "Visible sur le site",
    campaignRunning: "Campagne en cours",
    publicationHint:
      "Oui = la campagne peut apparaître sur le site public.",
    activeHint:
      "Oui = la campagne est prioritaire et considérée comme en cours par l'équipe.",
    statusHint:
      "Utilisez “Brouillon” pendant la préparation puis “Publiée” quand le contenu est validé.",
    priorityHint:
      "Choisissez simplement le niveau d'importance métier de la campagne.",
    codeHint:
      "Le code interne est généré automatiquement à partir du titre.",
    badgeHint:
      "Choisissez un libellé simple et compréhensible pour l'équipe et le public.",
    themeHint:
      "Choisissez le type de campagne le plus proche de votre besoin.",
    dateHint:
      "Laissez vide si la campagne n'a pas de période fixe.",
    campaignListTitle: "Toutes les campagnes",
    campaignListHint:
      "Choisissez une campagne pour la modifier, ou créez-en une nouvelle.",
    createHint:
      "Préparez la fiche, puis activez et publiez seulement quand le contenu est prêt.",
    neverPublished: "Jamais publiée",
    from: "Du",
    to: "au",
    noEndDate: "Sans date de fin",
    noStartDate: "Sans date de début",
    noScheduledPeriod: "Sans période planifiée",
    draftStatus: "Brouillon",
    publishedStatus: "Publiée",
    archivedStatus: "Archivée",
    unknownStatus: "Autre statut",
    stepVisibility: "Étape 1 · Visibilité",
    stepDetails: "Étape 2 · Réglages internes",
    stepContent: "Étape 3 · Texte public",
    publicSiteLabel: "Site public",
    teamLabel: "Équipe CTS",
    titlePreviewEmpty: "Titre non renseigné",
    descriptionPreviewEmpty: "Description non renseignée",
    ctaPreviewEmpty: "Bouton non renseigné",
    formPreviewTitle: "Aperçu rapide",
    formPreviewHint:
      "Ce bloc résume ce que l'équipe et les donneurs comprendront en premier.",
    saveHint:
      "Enregistrez après chaque modification importante pour éviter toute perte.",
    priorityStandard: "Standard",
    priorityImportant: "Importante",
    priorityHigh: "Haute",
    priorityUrgent: "Urgente",
    themeDefault: "Institutionnelle",
    themeEmergency: "Urgence",
    themeCommunity: "Relais local",
    themeMobile: "Collecte mobile",
    themePlasma: "Plasma",
    themePartner: "Partenariat",
    badgeNone: "Aucun badge",
  },
} as const;

const KNOWN_CAMPAIGN_STATUSES = ["draft", "published", "archived"] as const;
const PRIORITY_LEVELS = ["standard", "important", "high", "urgent"] as const;
const CAMPAIGN_THEMES = [
  "default",
  "emergency",
  "community",
  "mobile",
  "plasma",
  "partner",
] as const;
const EMPTY_BADGE_VALUE = "__none__";
const CAMPAIGN_BADGES = [
  "",
  "Urgence estivale",
  "Collecte mobile",
  "Relais campus",
  "Collecte campus",
  "Plasma cible",
  "Été solidaire",
  "Partenariat local",
] as const satisfies readonly CampaignBadgeLabel[];

function slugifyCampaignCodePart(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .toUpperCase();
}

function buildAutoCampaignCode(input: {
  title: string;
  startDate: string | null;
}) {
  const base = slugifyCampaignCodePart(input.title) || "CAMPAGNE";
  const year =
    input.startDate?.slice(0, 4) && /^\d{4}$/.test(input.startDate.slice(0, 4))
      ? input.startDate.slice(0, 4)
      : String(new Date().getFullYear());

  return `${base}-${year}`;
}

function formatCampaignDate(value: string | null) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function getCampaignStatusLabel(status: string) {
  switch (status) {
    case "draft":
      return copy.fr.draftStatus;
    case "published":
      return copy.fr.publishedStatus;
    case "archived":
      return copy.fr.archivedStatus;
    default:
      return copy.fr.unknownStatus;
  }
}

function getCampaignStatusTone(status: string) {
  switch (status) {
    case "published":
      return "bg-emerald-50 text-emerald-700";
    case "archived":
      return "bg-slate-200 text-slate-700";
    default:
      return "bg-amber-50 text-amber-700";
  }
}

function buildDateRangeSummary(item: {
  startDate: string | null;
  endDate: string | null;
}) {
  const startLabel = formatCampaignDate(item.startDate);
  const endLabel = formatCampaignDate(item.endDate);

  if (startLabel && endLabel) {
    return `${copy.fr.from} ${startLabel} ${copy.fr.to} ${endLabel}`;
  }

  if (startLabel) {
    return `${copy.fr.from} ${startLabel}`;
  }

  if (endLabel) {
    return `${copy.fr.to} ${endLabel}`;
  }

  return copy.fr.noScheduledPeriod;
}

function buildCampaignListSummary(item: AdminCampaignItem) {
  const flags = [
    item.isPublished ? copy.fr.published : null,
    item.isActive ? copy.fr.active : null,
  ].filter(Boolean);

  return flags.length > 0 ? flags.join(" · ") : getCampaignStatusLabel(item.status);
}

function getPriorityLevelLabel(level: CampaignPriorityLevel) {
  switch (level) {
    case "important":
      return copy.fr.priorityImportant;
    case "high":
      return copy.fr.priorityHigh;
    case "urgent":
      return copy.fr.priorityUrgent;
    default:
      return copy.fr.priorityStandard;
  }
}

function getPriorityLevelFromValue(priority?: number) {
  if ((priority ?? 0) >= 100) {
    return "urgent" as const;
  }

  if ((priority ?? 0) >= 80) {
    return "high" as const;
  }

  if ((priority ?? 0) >= 50) {
    return "important" as const;
  }

  return "standard" as const;
}

function getThemeLabel(theme: CampaignTheme) {
  switch (theme) {
    case "emergency":
      return copy.fr.themeEmergency;
    case "community":
      return copy.fr.themeCommunity;
    case "mobile":
      return copy.fr.themeMobile;
    case "plasma":
      return copy.fr.themePlasma;
    case "partner":
      return copy.fr.themePartner;
    default:
      return copy.fr.themeDefault;
  }
}

function getBadgeLabelText(value: CampaignBadgeLabel) {
  return value || copy.fr.badgeNone;
}

function createEmptyCampaignForm(): CampaignFormState {
  return {
    status: "draft",
    isPublished: false,
    isActive: false,
    priorityLevel: "standard",
    badgeLabel: "",
    theme: "default",
    startDate: null,
    endDate: null,
    localeContent: {
      fr: {
        title: "",
        description: "",
        ctaLabel: "",
      },
      ar: null,
    },
  };
}

function buildArchivedCampaignPayload(payload: AdminCampaignPayload): AdminCampaignPayload {
  return {
    ...payload,
    status: "archived",
    isPublished: false,
    isActive: false,
  };
}

function mapCampaignToForm(item: AdminCampaignItem): CampaignFormState {
  return {
    status: item.status,
    isPublished: item.isPublished,
    isActive: item.isActive,
    priorityLevel: item.priorityLevel ?? getPriorityLevelFromValue(item.priority),
    badgeLabel: item.badgeLabel,
    theme: item.theme,
    startDate: item.startDate ? item.startDate.slice(0, 10) : null,
    endDate: item.endDate ? item.endDate.slice(0, 10) : null,
    localeContent: {
      fr: { ...item.localeContent.fr },
      ar: item.localeContent.ar ? { ...item.localeContent.ar } : null,
    },
  };
}

function areCampaignFormsEqual(left: CampaignFormState, right: CampaignFormState) {
  return JSON.stringify(left) === JSON.stringify(right);
}

export function AdminCampaignsPage() {
  const locale = "fr" as const;
  const pageCopy = copy.fr;
  const { token, logout } = useAdminAuth();
  const [items, setItems] = useState<AdminCampaignItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<CampaignFormState>(createEmptyCampaignForm());
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pendingSavePayload, setPendingSavePayload] = useState<AdminCampaignPayload | null>(null);
  const [pendingDiscardAction, setPendingDiscardAction] = useState<
    | { type: "select"; id: string }
    | { type: "new" }
    | null
  >(null);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );
  const liveCampaign = useMemo(
    () => items.find((item) => item.isPublished && item.isActive) ?? null,
    [items],
  );
  const publishedCount = useMemo(
    () => items.filter((item) => item.isPublished).length,
    [items],
  );
  const draftCount = useMemo(
    () =>
      items.filter(
        (item) => item.status !== "published" || !item.isPublished || !item.isActive,
      ).length,
    [items],
  );
  const baselineForm = useMemo(
    () => (selectedItem ? mapCampaignToForm(selectedItem) : createEmptyCampaignForm()),
    [selectedItem],
  );
  const isDirty = useMemo(() => !areCampaignFormsEqual(form, baselineForm), [form, baselineForm]);
  const blocker = useSafeBlocker(isDirty && !isSaving);
  const previewCode = useMemo(
    () =>
      buildAutoCampaignCode({
        title: form.localeContent.fr.title,
        startDate: form.startDate,
      }),
    [form.localeContent.fr.title, form.startDate],
  );
  const statusOptions = useMemo(() => {
    const values = [...KNOWN_CAMPAIGN_STATUSES];

    if (form.status && !values.includes(form.status as (typeof KNOWN_CAMPAIGN_STATUSES)[number])) {
      values.push(form.status as (typeof KNOWN_CAMPAIGN_STATUSES)[number]);
    }

    return values;
  }, [form.status]);

  async function loadCampaigns() {
    if (!token) {
      setFeedback(pageCopy.error);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setFeedback(null);

    try {
      const nextItems = await listAdminCampaigns(token);
      setItems(nextItems);

      if (nextItems.length > 0 && !selectedId) {
        setSelectedId(nextItems[0].id);
        setForm(mapCampaignToForm(nextItems[0]));
      } else if (
        selectedId &&
        !nextItems.some((item) => item.id === selectedId)
      ) {
        const fallbackItem = nextItems[0] ?? null;
        setSelectedId(fallbackItem?.id ?? null);
        setForm(fallbackItem ? mapCampaignToForm(fallbackItem) : createEmptyCampaignForm());
      }
    } catch (error) {
      if (isUnauthorizedAdminError(error)) {
        await logout();
      }

      setFeedback(pageCopy.error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadCampaigns();
  }, [token, locale]);

  useEffect(() => {
    if (selectedItem) {
      setForm(mapCampaignToForm(selectedItem));
      return;
    }

    if (!selectedId) {
      setForm(createEmptyCampaignForm());
    }
  }, [selectedItem]);

  useEffect(() => {
    if (!isDirty) {
      return;
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  function updateForm(patch: Partial<CampaignFormState>) {
    setForm((current) => ({
      ...current,
      ...patch,
    }));
  }

  async function persistCampaign(payload: AdminCampaignPayload) {
    if (!token) {
      return;
    }

    setIsSaving(true);
    setFeedback(null);

    try {
      const saved = selectedItem
        ? await updateAdminCampaign(token, selectedItem.id, payload)
        : await createAdminCampaign(token, payload);

      const refreshed = await listAdminCampaigns(token);
      setItems(refreshed);
      setSelectedId(saved.id);
      setFeedback(pageCopy.saved);
    } catch (error) {
      if (isUnauthorizedAdminError(error)) {
        await logout();
        return;
      }

      setFeedback(
        typeof error === "object" && error && "message" in error && typeof error.message === "string"
          ? error.message
          : pageCopy.error,
      );
    } finally {
      setIsSaving(false);
      setPendingSavePayload(null);
    }
  }

  function buildPayload(): AdminCampaignPayload {
    const shouldForceArchive = form.status === "archived";

    return {
      ...form,
      isPublished: shouldForceArchive ? false : form.isPublished,
      isActive: shouldForceArchive ? false : form.isActive,
      code: selectedItem ? selectedItem.code : undefined,
      localeContent: {
        fr: {
          title: form.localeContent.fr.title.trim(),
          description: form.localeContent.fr.description.trim(),
          ctaLabel: form.localeContent.fr.ctaLabel.trim(),
        },
        ar: form.localeContent.ar
          ? {
              title: form.localeContent.ar.title.trim(),
              description: form.localeContent.ar.description.trim(),
              ctaLabel: form.localeContent.ar.ctaLabel.trim(),
            }
          : null,
      },
    };
  }

  function requiresArchiveConfirmation(payload: AdminCampaignPayload) {
    if (!selectedItem) {
      return false;
    }

    return (
      (selectedItem.isPublished && !payload.isPublished) ||
      (selectedItem.isActive && !payload.isActive)
    );
  }

  async function handleSave() {
    const payload = buildPayload();

    if (requiresArchiveConfirmation(payload)) {
      setPendingSavePayload(buildArchivedCampaignPayload(payload));
      return;
    }

    await persistCampaign(payload);
  }

  function applyDiscardAction(action: { type: "select"; id: string } | { type: "new" }) {
    if (action.type === "select") {
      setSelectedId(action.id);
      return;
    }

    setSelectedId(null);
    setForm(createEmptyCampaignForm());
  }

  function requestDiscardAction(action: { type: "select"; id: string } | { type: "new" }) {
    if (!isDirty) {
      applyDiscardAction(action);
      return;
    }

    setPendingDiscardAction(action);
  }

  return (
    <div className="flex flex-col gap-6">
      <AdminConfirmDialog
        open={blocker.state === "blocked"}
        onOpenChange={(open) => {
          if (!open && blocker.state === "blocked") {
            blocker.reset();
          }
        }}
        title={pageCopy.unsavedDialogTitle}
        description={pageCopy.unsavedDialogDescription}
        actionLabel={pageCopy.unsavedDialogAction}
        actionVariant="destructive"
        onConfirm={() => {
          if (blocker.state === "blocked") {
            blocker.proceed();
          }
        }}
      />

      <AdminConfirmDialog
        open={pendingDiscardAction !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingDiscardAction(null);
          }
        }}
        title={pageCopy.unsavedDialogTitle}
        description={pageCopy.unsavedDialogDescription}
        actionLabel={pageCopy.unsavedDialogAction}
        actionVariant="destructive"
        onConfirm={() => {
          if (!pendingDiscardAction) {
            return;
          }

          applyDiscardAction(pendingDiscardAction);
          setPendingDiscardAction(null);
        }}
      />

      <AdminConfirmDialog
        open={pendingSavePayload !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingSavePayload(null);
          }
        }}
        title={pageCopy.archiveDialogTitle}
        description={pageCopy.archiveDialogDescription}
        actionLabel={pageCopy.archiveDialogAction}
        actionVariant="destructive"
        isSubmitting={isSaving}
        onConfirm={async () => {
          if (!pendingSavePayload) {
            return;
          }

          await persistCampaign(pendingSavePayload);
        }}
      />

      <AdminPageHeader
        title={pageCopy.title}
        description={pageCopy.description}
        actions={
          <Button
            type="button"
            className="rounded-2xl bg-brand-red text-white hover:bg-brand-dark"
            onClick={() => {
              requestDiscardAction({ type: "new" });
            }}
          >
            <Plus data-icon="inline-start" />
            {pageCopy.newCampaign}
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-slate-200/80 bg-white shadow-sm">
          <CardContent className="flex items-start gap-4 p-5">
            <div className="rounded-2xl bg-brand-red/10 p-3 text-brand-red">
              <RadioTower className="size-5" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-500">{pageCopy.liveCampaign}</p>
              <p className="text-base font-semibold text-slate-950">
                {liveCampaign?.localeContent.fr.title ?? pageCopy.liveCampaignEmpty}
              </p>
              {liveCampaign ? (
                <p className="text-sm text-slate-600">
                  {liveCampaign.code} · {buildDateRangeSummary(liveCampaign)}
                </p>
              ) : null}
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200/80 bg-white shadow-sm">
          <CardContent className="flex items-start gap-4 p-5">
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
              <Eye className="size-5" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-500">{pageCopy.publishedCampaigns}</p>
              <p className="text-3xl font-semibold tracking-tight text-slate-950">
                {publishedCount}
              </p>
              <p className="text-sm text-slate-600">{pageCopy.publicationHint}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200/80 bg-white shadow-sm">
          <CardContent className="flex items-start gap-4 p-5">
            <div className="rounded-2xl bg-amber-50 p-3 text-amber-700">
              <FileText className="size-5" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-500">{pageCopy.draftCampaigns}</p>
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{draftCount}</p>
              <p className="text-sm text-slate-600">{pageCopy.createHint}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.86fr_1.14fr]">
        <div className="space-y-4">
          <Card className="border-slate-200/80 bg-white shadow-sm">
            <CardHeader className="space-y-2 pb-4">
              <CardTitle className="text-lg">{pageCopy.campaignListTitle}</CardTitle>
              <p className="text-sm leading-6 text-slate-600">{pageCopy.campaignListHint}</p>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {pageCopy.totalCampaigns}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{items.length}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {pageCopy.selectedCampaign}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">
                    {selectedItem?.code ?? pageCopy.newCampaign}
                  </p>
                </div>
              </div>

          {isLoading ? (
            <>
              <Skeleton className="h-28 w-full rounded-3xl" />
              <Skeleton className="h-28 w-full rounded-3xl" />
            </>
          ) : items.length === 0 ? (
            <Card className="border-dashed border-slate-200 bg-slate-50/70 shadow-none">
              <CardContent className="p-6 text-sm text-slate-500">
                {pageCopy.empty}
              </CardContent>
            </Card>
          ) : (
            items.map((campaign) => (
              <Card
                key={campaign.id}
                className={`cursor-pointer border-slate-200/80 bg-white shadow-sm transition hover:border-red-200 hover:shadow-md ${selectedId === campaign.id ? "ring-2 ring-red-200" : ""}`}
                onClick={() => requestDiscardAction({ type: "select", id: campaign.id })}
              >
                <CardHeader className="space-y-4">
                  <CardTitle className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {campaign.code}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        {campaign.localeContent.fr.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        {buildCampaignListSummary(campaign)}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-2">
                      <Badge
                        className={`rounded-full shadow-none hover:bg-inherit ${getCampaignStatusTone(campaign.status)}`}
                      >
                        {getCampaignStatusLabel(campaign.status)}
                      </Badge>
                      {campaign.isActive ? (
                        <Badge className="rounded-full bg-emerald-50 text-emerald-700 shadow-none hover:bg-emerald-50">
                          {pageCopy.active}
                        </Badge>
                      ) : null}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <div className="grid gap-2 rounded-2xl bg-slate-50 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span>{pageCopy.priority}</span>
                      <span className="font-medium text-slate-900">
                        {getPriorityLevelLabel(
                          campaign.priorityLevel ?? getPriorityLevelFromValue(campaign.priority),
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{pageCopy.theme}</span>
                      <span className="font-medium text-slate-900">
                        {getThemeLabel(campaign.theme)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>{pageCopy.startDate}</span>
                      <span className="font-medium text-slate-900">
                        {formatCampaignDate(campaign.startDate) ?? pageCopy.noStartDate}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200/80 bg-white shadow-sm">
          <CardHeader className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <CardTitle>{pageCopy.editor}</CardTitle>
                <p className="max-w-2xl text-sm leading-6 text-slate-600">
                  {selectedItem ? pageCopy.selectedCampaignHint : pageCopy.createHint}
                </p>
              </div>
            {selectedItem ? (
                <Badge className="w-fit rounded-full bg-slate-100 text-slate-700 shadow-none hover:bg-slate-100">
                  <PencilLine className="size-3.5" />
                  {selectedItem.code}
                </Badge>
            ) : null}
            </div>

            <div className="grid gap-3 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <ShieldCheck className="size-4 text-brand-red" />
                  {pageCopy.publicVisibility}
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {form.isPublished ? pageCopy.booleanYes : pageCopy.booleanNo}
                  {" · "}
                  {form.isActive ? pageCopy.active : pageCopy.draftStatus}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CalendarDays className="size-4 text-brand-red" />
                  {pageCopy.startDate} / {pageCopy.endDate}
                </div>
                <p className="mt-2 text-sm text-slate-600">{buildDateRangeSummary(form)}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="size-4 text-brand-red" />
                  {pageCopy.status}
                </div>
                <p className="mt-2 text-sm text-slate-600">{getCampaignStatusLabel(form.status)}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <section className="space-y-4 rounded-3xl border border-slate-200/80 p-5">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  {pageCopy.stepVisibility}
                </p>
                <h2 className="text-lg font-semibold text-slate-950">{pageCopy.publicVisibility}</h2>
                <p className="text-sm leading-6 text-slate-600">
                  {pageCopy.publicVisibilityHint}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-2xl bg-slate-50 p-4">
                  <label className="text-sm font-medium text-slate-700">
                    {pageCopy.isPublished}
                  </label>
                  <Select
                    value={form.isPublished ? "yes" : "no"}
                    onValueChange={(value) => updateForm({ isPublished: value === "yes" })}
                  >
                    <SelectTrigger aria-label={pageCopy.isPublished}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{pageCopy.booleanYes}</SelectItem>
                      <SelectItem value="no">{pageCopy.booleanNo}</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.publicationHint}</p>
                </div>

                <div className="space-y-2 rounded-2xl bg-slate-50 p-4">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.isActive}</label>
                  <Select
                    value={form.isActive ? "yes" : "no"}
                    onValueChange={(value) => updateForm({ isActive: value === "yes" })}
                  >
                    <SelectTrigger aria-label={pageCopy.isActive}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{pageCopy.booleanYes}</SelectItem>
                      <SelectItem value="no">{pageCopy.booleanNo}</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.activeHint}</p>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200/80 p-5">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  {pageCopy.stepDetails}
                </p>
                <h2 className="text-lg font-semibold text-slate-950">{pageCopy.internalSettings}</h2>
                <p className="text-sm leading-6 text-slate-600">
                  {pageCopy.internalSettingsHint}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.code}</label>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
                    {selectedItem?.code ?? previewCode}
                  </div>
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.codeHint}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.status}</label>
                  <Select
                    value={form.status}
                    onValueChange={(value) =>
                      updateForm({ status: value as CampaignFormState["status"] })
                    }
                  >
                    <SelectTrigger aria-label={pageCopy.status}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((status) => (
                        <SelectItem key={status} value={status}>
                          {getCampaignStatusLabel(status)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.statusHint}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.priority}</label>
                  <Select
                    value={form.priorityLevel}
                    onValueChange={(value: CampaignPriorityLevel) =>
                      updateForm({ priorityLevel: value })
                    }
                  >
                    <SelectTrigger aria-label={pageCopy.priority}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITY_LEVELS.map((level) => (
                        <SelectItem key={level} value={level}>
                          {getPriorityLevelLabel(level)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.priorityHint}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.badgeLabel}</label>
                  <Select
                    value={form.badgeLabel || EMPTY_BADGE_VALUE}
                    onValueChange={(value) =>
                      updateForm({
                        badgeLabel:
                          value === EMPTY_BADGE_VALUE
                            ? ""
                            : (value as CampaignBadgeLabel),
                      })
                    }
                  >
                    <SelectTrigger aria-label={pageCopy.badgeLabel}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CAMPAIGN_BADGES.map((badge) => (
                        <SelectItem
                          key={badge || EMPTY_BADGE_VALUE}
                          value={badge || EMPTY_BADGE_VALUE}
                        >
                          {getBadgeLabelText(badge)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.badgeHint}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.theme}</label>
                  <Select
                    value={form.theme}
                    onValueChange={(value: CampaignTheme) => updateForm({ theme: value })}
                  >
                    <SelectTrigger aria-label={pageCopy.theme}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CAMPAIGN_THEMES.map((theme) => (
                        <SelectItem key={theme} value={theme}>
                          {getThemeLabel(theme)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.themeHint}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.startDate}</label>
                  <Input
                    type="date"
                    value={form.startDate ?? ""}
                    onChange={(e) => updateForm({ startDate: e.target.value || null })}
                  />
                  <p className="text-xs leading-5 text-slate-500">{pageCopy.dateHint}</p>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">{pageCopy.endDate}</label>
                  <Input
                    type="date"
                    value={form.endDate ?? ""}
                    onChange={(e) => updateForm({ endDate: e.target.value || null })}
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200/80 p-5">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  {pageCopy.stepContent}
                </p>
                <h2 className="text-lg font-semibold text-slate-950">{pageCopy.publicContent}</h2>
                <p className="text-sm leading-6 text-slate-600">
                  {pageCopy.publicContentHint}
                </p>
              </div>

              <div className="grid gap-4 rounded-3xl bg-slate-50/80 p-4 xl:grid-cols-[1.08fr_0.92fr]">
                <Tabs defaultValue="fr" className="flex min-w-0 flex-col gap-4">
                  <TabsList className="w-fit rounded-2xl bg-white p-1 shadow-sm">
                    <TabsTrigger value="fr">Français</TabsTrigger>
                    <TabsTrigger value="ar">العربية</TabsTrigger>
                  </TabsList>
                  <TabsContent value="fr" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">{pageCopy.titleFr}</label>
                      <Input
                        aria-label="Titre FR"
                        value={form.localeContent.fr.title}
                        onChange={(e) =>
                          updateForm({
                            localeContent: {
                              ...form.localeContent,
                              fr: { ...form.localeContent.fr, title: e.target.value },
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">{pageCopy.descriptionFr}</label>
                      <textarea
                        aria-label="Description FR"
                        className="min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                        value={form.localeContent.fr.description}
                        onChange={(e) =>
                          updateForm({
                            localeContent: {
                              ...form.localeContent,
                              fr: { ...form.localeContent.fr, description: e.target.value },
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">{pageCopy.ctaFr}</label>
                      <Input
                        aria-label="CTA FR"
                        value={form.localeContent.fr.ctaLabel}
                        onChange={(e) =>
                          updateForm({
                            localeContent: {
                              ...form.localeContent,
                              fr: { ...form.localeContent.fr, ctaLabel: e.target.value },
                            },
                          })
                        }
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="ar" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">{pageCopy.titleAr}</label>
                      <Input
                        aria-label="Titre AR"
                        value={form.localeContent.ar?.title ?? ""}
                        onChange={(e) =>
                          updateForm({
                            localeContent: {
                              ...form.localeContent,
                              ar: {
                                title: e.target.value,
                                description: form.localeContent.ar?.description ?? "",
                                ctaLabel: form.localeContent.ar?.ctaLabel ?? "",
                              },
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">{pageCopy.descriptionAr}</label>
                      <textarea
                        aria-label="Description AR"
                        className="min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                        value={form.localeContent.ar?.description ?? ""}
                        onChange={(e) =>
                          updateForm({
                            localeContent: {
                              ...form.localeContent,
                              ar: {
                                title: form.localeContent.ar?.title ?? "",
                                description: e.target.value,
                                ctaLabel: form.localeContent.ar?.ctaLabel ?? "",
                              },
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">{pageCopy.ctaAr}</label>
                      <Input
                        aria-label="CTA AR"
                        value={form.localeContent.ar?.ctaLabel ?? ""}
                        onChange={(e) =>
                          updateForm({
                            localeContent: {
                              ...form.localeContent,
                              ar: {
                                title: form.localeContent.ar?.title ?? "",
                                description: form.localeContent.ar?.description ?? "",
                                ctaLabel: e.target.value,
                              },
                            },
                          })
                        }
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Globe2 className="size-4 text-brand-red" />
                    {pageCopy.formPreviewTitle}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {pageCopy.formPreviewHint}
                  </p>

                  <div className="mt-5 space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {pageCopy.publicSiteLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        {form.localeContent.fr.title.trim() || pageCopy.titlePreviewEmpty}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {form.localeContent.fr.description.trim() ||
                          pageCopy.descriptionPreviewEmpty}
                      </p>
                      <div className="mt-4 inline-flex rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white">
                        {form.localeContent.fr.ctaLabel.trim() || pageCopy.ctaPreviewEmpty}
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {pageCopy.teamLabel}
                      </p>
                      <div className="mt-3 grid gap-2 text-sm text-slate-600">
                        <div className="flex items-center justify-between gap-3">
                          <span>{pageCopy.status}</span>
                          <span className="font-medium text-slate-900">
                            {getCampaignStatusLabel(form.status)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span>{pageCopy.isPublished}</span>
                          <span className="font-medium text-slate-900">
                            {form.isPublished ? pageCopy.booleanYes : pageCopy.booleanNo}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span>{pageCopy.isActive}</span>
                          <span className="font-medium text-slate-900">
                            {form.isActive ? pageCopy.booleanYes : pageCopy.booleanNo}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span>{pageCopy.priority}</span>
                          <span className="font-medium text-slate-900">
                            {getPriorityLevelLabel(form.priorityLevel)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span>{pageCopy.badgeLabel}</span>
                          <span className="font-medium text-slate-900">
                            {getBadgeLabelText(form.badgeLabel)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {feedback ? <p className="text-sm text-slate-500">{feedback}</p> : null}

            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm leading-6 text-slate-600">{pageCopy.saveHint}</p>
                <Button
                  type="button"
                  disabled={isSaving}
                  className="w-full rounded-2xl bg-brand-red text-white hover:bg-brand-dark md:w-auto md:min-w-56"
                  onClick={() => {
                    void handleSave();
                  }}
                >
                  <Save data-icon="inline-start" />
                  {pageCopy.save}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
