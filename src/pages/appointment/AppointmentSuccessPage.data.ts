import type {
  AppointmentConfirmationDetail,
  AppointmentConfirmationSnapshot,
  AppointmentSuccessRouteState,
} from "@/features/appointment/confirmation.types";

export type AppointmentSuccessViewModel = {
  donorName: string;
  appointmentDate: string;
  appointmentTime: string;
  confirmationCode: string;
  confirmationToken: string | null;
  qrCodeDataUrl: string | null;
  qrTargetUrl: string | null;
  recoverySource: "route" | "storage" | "server" | "none";
};

type BuildAppointmentSuccessViewModelInput = {
  routeState?: AppointmentSuccessRouteState | null;
  storedSnapshot?: AppointmentConfirmationSnapshot | null;
  remoteConfirmation?: AppointmentConfirmationDetail | null;
};

export function buildAppointmentScanUrl(token: string) {
  return `https://ctsmustapha.com/admin/appointments/scan/${encodeURIComponent(token)}`;
}

export function resolveAppointmentSuccessViewModel({
  routeState,
  storedSnapshot,
  remoteConfirmation,
}: BuildAppointmentSuccessViewModelInput): AppointmentSuccessViewModel {
  const firstName =
    remoteConfirmation?.donor?.firstName ??
    routeState?.firstName ??
    storedSnapshot?.firstName ??
    "";
  const lastName =
    remoteConfirmation?.donor?.lastName ??
    routeState?.lastName ??
    storedSnapshot?.lastName ??
    "";
  const appointmentDate =
    remoteConfirmation?.appointment?.date ??
    routeState?.appointmentDate ??
    storedSnapshot?.appointmentDate ??
    "";
  const appointmentTime =
    remoteConfirmation?.appointment?.time ??
    routeState?.appointmentTime ??
    storedSnapshot?.appointmentTime ??
    "";
  const confirmationCode =
    remoteConfirmation?.confirmationCode ??
    routeState?.confirmationCode ??
    storedSnapshot?.confirmationCode ??
    "";
  const confirmationToken =
    routeState?.confirmationToken ?? storedSnapshot?.confirmationToken ?? null;
  const qrCodeDataUrl = remoteConfirmation?.qrCodeDataUrl ?? null;
  const qrTargetUrl = confirmationToken
    ? buildAppointmentScanUrl(confirmationToken)
    : null;

  const recoverySource = remoteConfirmation
    ? "server"
    : routeState
      ? "route"
      : storedSnapshot
        ? "storage"
        : "none";

  return {
    donorName: `${firstName} ${lastName}`.trim() || "Nouvelle demande",
    appointmentDate,
    appointmentTime,
    confirmationCode,
    confirmationToken,
    qrCodeDataUrl,
    qrTargetUrl,
    recoverySource,
  };
}
