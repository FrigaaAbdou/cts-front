export type SelectOption = {
  value: string;
  label: string;
};

export type AppointmentFormMeta = {
  locales: readonly ("fr" | "ar")[];
  genders: ReadonlyArray<{ value: "male" | "female"; label: string }>;
  bloodGroups: readonly string[];
  donationTypes: ReadonlyArray<{
    value: "whole_blood" | "plasma" | "platelets";
    label: string;
  }>;
  wilayas: ReadonlyArray<{ code: string; label: string }>;
  communesByWilaya: Record<string, ReadonlyArray<SelectOption>>;
  eligibilityChecklistTemplate: ReadonlyArray<{
    key:
      | "ageConfirmed"
      | "weightConfirmed"
      | "healthyConfirmed"
      | "noContraIndicationConfirmed";
    label: string;
  }>;
};

export type AppointmentFormMetaResponse = {
  success: true;
  data: AppointmentFormMeta;
  message: string;
};

export type AppointmentSlotsResponse = {
  success: true;
  data: {
    date: string;
    slots: Array<{
      value: string;
      label: string;
      isAvailable: boolean;
      capacity?: number;
      reservedCount?: number;
      remainingCapacity?: number;
      status?: "open" | "full" | "closed" | "blocked";
    }>;
  };
  message: string;
};

export type AppointmentCreationResponse = {
  success: true;
  data: {
    id: string;
    status: "pending" | "approved" | "rejected" | "cancelled";
    appointmentDate: string;
    appointmentTime: string;
    createdAt: string;
    confirmationToken: string;
    confirmationCode: string;
  };
  message: string;
};
