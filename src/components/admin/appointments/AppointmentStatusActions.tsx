import { useState } from "react";

import { LoaderCircle } from "lucide-react";

import { AdminConfirmDialog } from "@/components/admin/shared/AdminConfirmDialog";
import { StatusBadge, type AdminStatusBadgeValue } from "@/components/admin/shared/StatusBadge";
import { Button } from "@/components/ui/button";

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

function getStatusConfirmationCopy(
  status: AdminStatusBadgeValue,
  labels: Record<AdminStatusBadgeValue, string>,
) {
  if (status === "rejected") {
    return {
      title: "Confirmer le rejet",
      description:
        "Cette demande sera rejetée pour le traitement admin. Voulez-vous vraiment continuer ?",
      actionLabel: labels[status],
    };
  }

  if (status === "cancelled") {
    return {
      title: "Confirmer l'annulation",
      description:
        "Cette demande sera annulée et ne restera plus active dans le parcours de traitement. Voulez-vous continuer ?",
      actionLabel: labels[status],
    };
  }

  return null;
}

export function AppointmentStatusActions({
  locale,
  role,
  currentStatus,
  copy,
  onSubmit,
}: {
  locale: "fr" | "ar";
  role: "super_admin" | "manager" | "operator";
  currentStatus: AdminStatusBadgeValue;
  copy: {
    currentStatus: string;
    statusLabels: Record<AdminStatusBadgeValue, string>;
    mutateTitle: string;
  };
  onSubmit: (status: AdminStatusBadgeValue) => Promise<void>;
}) {
  const [pendingStatus, setPendingStatus] = useState<AdminStatusBadgeValue | null>(null);
  const [confirmStatus, setConfirmStatus] = useState<AdminStatusBadgeValue | null>(null);
  const transitions = getAllowedTransitions(currentStatus, role);
  const confirmCopy = confirmStatus
    ? getStatusConfirmationCopy(confirmStatus, copy.statusLabels)
    : null;

  async function submitStatus(status: AdminStatusBadgeValue) {
    try {
      setPendingStatus(status);
      await onSubmit(status);
    } finally {
      setPendingStatus(null);
      setConfirmStatus(null);
    }
  }

  return (
    <>
      <AdminConfirmDialog
        open={confirmStatus !== null}
        onOpenChange={(open) => {
          if (!open) {
            setConfirmStatus(null);
          }
        }}
        title={confirmCopy?.title ?? ""}
        description={confirmCopy?.description ?? ""}
        actionLabel={confirmCopy?.actionLabel ?? ""}
        actionVariant="destructive"
        isSubmitting={pendingStatus !== null}
        onConfirm={async () => {
          if (!confirmStatus) {
            return;
          }

          await submitStatus(confirmStatus);
        }}
      />

      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            {copy.currentStatus}
          </p>
          <div className="mt-3">
            <StatusBadge status={currentStatus} locale={locale} />
          </div>
        </div>

        {transitions.length > 0 ? (
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-slate-900">{copy.mutateTitle}</p>
            <div className="flex flex-wrap gap-2">
              {transitions.map((status) => (
                <Button
                  key={status}
                  type="button"
                  variant="outline"
                  disabled={pendingStatus !== null}
                  className="rounded-xl border-slate-200"
                  onClick={async () => {
                    if (status === "rejected" || status === "cancelled") {
                      setConfirmStatus(status);
                      return;
                    }

                    await submitStatus(status);
                  }}
                >
                  {pendingStatus === status ? (
                    <LoaderCircle className="size-4 animate-spin" />
                  ) : null}
                  {copy.statusLabels[status]}
                </Button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
