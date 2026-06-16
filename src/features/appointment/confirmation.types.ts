export type AppointmentConfirmationSnapshot = {
  appointmentId?: string;
  confirmationToken: string;
  confirmationCode: string;
  firstName: string;
  lastName: string;
  appointmentDate: string;
  appointmentTime: string;
};

export type AppointmentSuccessRouteState = AppointmentConfirmationSnapshot;

export type AppointmentConfirmationGuidance = {
  title: string;
  items: string[];
};

export type AppointmentConfirmationDetail = {
  appointmentId: string;
  confirmationCode: string;
  status: "pending" | "approved" | "rejected" | "cancelled" | "checked_in";
  qrCodeDataUrl?: string;
  donor?: {
    firstName: string;
    lastName: string;
  };
  appointment?: {
    date: string;
    time: string;
    donationType?: string;
    commune?: string;
    wilayaLabel?: string;
  };
  guidance?: AppointmentConfirmationGuidance;
};

export type AppointmentConfirmationResponse = {
  success: true;
  data: AppointmentConfirmationDetail;
  message: string;
};
