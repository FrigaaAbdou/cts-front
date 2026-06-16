import {
  buildAppointmentScanUrl,
  resolveAppointmentSuccessViewModel,
} from "@/pages/appointment/AppointmentSuccessPage.data";

test("builds the admin scan URL from the token", () => {
  expect(buildAppointmentScanUrl("token/with spaces")).toBe(
    "https://ctsmustapha.com/admin/appointments/scan/token%2Fwith%20spaces",
  );
});

test("prefers server confirmation data and keeps the QR target stable", () => {
  const viewModel = resolveAppointmentSuccessViewModel({
    routeState: {
      confirmationToken: "route-token",
      confirmationCode: "CTS-ROUTE",
      firstName: "Route",
      lastName: "User",
      appointmentDate: "2026-06-10",
      appointmentTime: "08:00",
    },
    storedSnapshot: {
      confirmationToken: "stored-token",
      confirmationCode: "CTS-STORED",
      firstName: "Stored",
      lastName: "Person",
      appointmentDate: "2026-06-09",
      appointmentTime: "07:00",
    },
    remoteConfirmation: {
      appointmentId: "appt-1",
      confirmationCode: "CTS-SERVER",
      status: "pending",
      qrCodeDataUrl: "data:image/png;base64,server",
      donor: {
        firstName: "Server",
        lastName: "Side",
      },
      appointment: {
        date: "2026-06-11",
        time: "09:00",
      },
    },
  });

  expect(viewModel.donorName).toBe("Server Side");
  expect(viewModel.appointmentDate).toBe("2026-06-11");
  expect(viewModel.appointmentTime).toBe("09:00");
  expect(viewModel.confirmationCode).toBe("CTS-SERVER");
  expect(viewModel.confirmationToken).toBe("route-token");
  expect(viewModel.qrCodeDataUrl).toBe("data:image/png;base64,server");
  expect(viewModel.qrTargetUrl).toBe(
    "https://ctsmustapha.com/admin/appointments/scan/route-token",
  );
  expect(viewModel.recoverySource).toBe("server");
});

test("falls back to session snapshot when the route state is absent", () => {
  const viewModel = resolveAppointmentSuccessViewModel({
    storedSnapshot: {
      confirmationToken: "stored-token",
      confirmationCode: "CTS-STORED",
      firstName: "Nadia",
      lastName: "Dupont",
      appointmentDate: "2026-06-10",
      appointmentTime: "08:00",
    },
  });

  expect(viewModel.donorName).toBe("Nadia Dupont");
  expect(viewModel.confirmationCode).toBe("CTS-STORED");
  expect(viewModel.recoverySource).toBe("storage");
});
