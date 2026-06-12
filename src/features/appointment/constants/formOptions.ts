import {
  getCommunesByWilaya,
  getWilayasByLocale,
} from "@/features/appointment/constants/algeria-locations";
import type { AppointmentFormMeta } from "@/features/appointment/types";

export const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
] as const;

export const donationTypes = [
  { value: "whole_blood", label: "Don de sang total" },
  { value: "plasma", label: "Don de plasma" },
  { value: "platelets", label: "Don de plaquettes" },
] as const;

export function getFallbackAppointmentMeta(
  locale: "fr" | "ar",
): AppointmentFormMeta {
  return {
    locales: ["fr", "ar"],
    genders:
      locale === "ar"
        ? [
            { value: "male", label: "ذكر" },
            { value: "female", label: "أنثى" },
          ]
        : [
            { value: "male", label: "Homme" },
            { value: "female", label: "Femme" },
          ],
    bloodGroups: [...bloodGroups],
    donationTypes:
      locale === "ar"
        ? [
            { value: "whole_blood", label: "التبرع بالدم الكامل" },
            { value: "plasma", label: "التبرع بالبلازما" },
            { value: "platelets", label: "التبرع بالصفائح" },
          ]
        : [...donationTypes],
    wilayas: getWilayasByLocale(locale),
    communesByWilaya: getCommunesByWilaya(locale),
    eligibilityChecklistTemplate:
      locale === "ar"
        ? [
            { key: "ageConfirmed", label: "العمر بين 18 و65 سنة" },
            { key: "weightConfirmed", label: "الوزن الأدنى 50 كلغ" },
            { key: "healthyConfirmed", label: "حالة صحية جيدة" },
            {
              key: "noContraIndicationConfirmed",
              label: "عدم وجود مانع للتبرع",
            },
          ]
        : [
            { key: "ageConfirmed", label: "Âge entre 18 et 65 ans" },
            { key: "weightConfirmed", label: "Poids minimum 50 kg" },
            { key: "healthyConfirmed", label: "Être en bonne santé" },
            {
              key: "noContraIndicationConfirmed",
              label: "Aucune contre-indication au don",
            },
          ],
  } as AppointmentFormMeta;
}

export const fallbackAppointmentMeta = getFallbackAppointmentMeta("fr");
