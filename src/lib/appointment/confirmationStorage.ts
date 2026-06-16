import type { AppointmentConfirmationSnapshot } from "@/features/appointment/confirmation.types";

const APPOINTMENT_CONFIRMATION_STORAGE_KEY = "cts-appointment-confirmation";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.sessionStorage !== "undefined";
}

export function saveAppointmentConfirmationSnapshot(
  snapshot: AppointmentConfirmationSnapshot,
) {
  if (!canUseStorage()) {
    return;
  }

  window.sessionStorage.setItem(
    APPOINTMENT_CONFIRMATION_STORAGE_KEY,
    JSON.stringify(snapshot),
  );
}

export function loadAppointmentConfirmationSnapshot() {
  if (!canUseStorage()) {
    return null;
  }

  const rawSnapshot = window.sessionStorage.getItem(
    APPOINTMENT_CONFIRMATION_STORAGE_KEY,
  );

  if (!rawSnapshot) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawSnapshot) as Partial<AppointmentConfirmationSnapshot>;

    if (
      typeof parsed.confirmationToken !== "string" ||
      typeof parsed.confirmationCode !== "string" ||
      typeof parsed.firstName !== "string" ||
      typeof parsed.lastName !== "string" ||
      typeof parsed.appointmentDate !== "string" ||
      typeof parsed.appointmentTime !== "string"
    ) {
      return null;
    }

    return parsed as AppointmentConfirmationSnapshot;
  } catch {
    return null;
  }
}

export function clearAppointmentConfirmationSnapshot() {
  if (!canUseStorage()) {
    return;
  }

  window.sessionStorage.removeItem(APPOINTMENT_CONFIRMATION_STORAGE_KEY);
}

