import { apiRequest } from "@/lib/api/client";
import type {
  AppointmentCreationResponse,
  AppointmentFormMetaResponse,
  AppointmentSlotsResponse,
} from "@/features/appointment/types";
import type { AppointmentConfirmationResponse } from "@/features/appointment/confirmation.types";

export async function getAppointmentFormMeta(locale: "fr" | "ar" = "fr") {
  return apiRequest<AppointmentFormMetaResponse>(
    `/api/public/appointment-form-meta?locale=${locale}`,
  );
}

export async function getAppointmentSlots(date: string, campaignCode?: string) {
  const query = new URLSearchParams({ date });

  if (campaignCode) {
    query.set("campaignCode", campaignCode);
  }

  return apiRequest<AppointmentSlotsResponse>(
    `/api/public/appointment-slots?${query.toString()}`,
  );
}

export async function createAppointmentRequest(payload: unknown) {
  return apiRequest<AppointmentCreationResponse>("/api/public/appointments", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getAppointmentConfirmation(token: string) {
  return apiRequest<AppointmentConfirmationResponse>(
    `/api/public/appointments/confirmations/${encodeURIComponent(token)}`,
  );
}
