import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { LocaleProvider } from "@/i18n/locale";
import { AppointmentSuccessPage } from "@/pages/appointment/AppointmentSuccessPage";
import { getAppointmentConfirmation } from "@/lib/api/appointmentApi";

vi.mock("@/lib/api/appointmentApi", () => ({
  getAppointmentConfirmation: vi.fn(),
}));

beforeEach(() => {
  window.sessionStorage.clear();
  window.scrollTo = vi.fn();
  vi.mocked(getAppointmentConfirmation).mockReset();
});

test("renders the confirmation receipt from stored snapshot and server data", async () => {
  window.sessionStorage.setItem(
    "cts-appointment-confirmation",
    JSON.stringify({
      confirmationToken: "stored-token",
      confirmationCode: "CTS-20260610-AB12CD",
      firstName: "Nadia",
      lastName: "Dupont",
      appointmentDate: "2026-06-10",
      appointmentTime: "08:00",
    }),
  );

  vi.mocked(getAppointmentConfirmation).mockResolvedValueOnce({
    success: true,
    data: {
      appointmentId: "appt-1",
      confirmationCode: "CTS-20260610-AB12CD",
      status: "pending",
      qrCodeDataUrl: "data:image/png;base64,server-qr",
      donor: {
        firstName: "Nadia",
        lastName: "Dupont",
      },
      appointment: {
        date: "2026-06-10",
        time: "08:00",
      },
      guidance: {
        title: "Avant votre venue",
        items: ["Hydratez-vous", "Apportez une pièce d'identité"],
      },
    },
    message: "ok",
  });

  render(
    <LocaleProvider>
      <MemoryRouter initialEntries={["/appointment/success"]}>
        <Routes>
          <Route path="/appointment/success" element={<AppointmentSuccessPage />} />
        </Routes>
      </MemoryRouter>
    </LocaleProvider>,
  );

  expect(
    await screen.findByRole("heading", {
      level: 1,
      name: "Votre demande de rendez-vous a bien été enregistrée",
    }),
  ).toBeInTheDocument();
  expect(screen.getByText("Nadia Dupont")).toBeInTheDocument();
  expect(screen.getByText("2026-06-10")).toBeInTheDocument();
  expect(screen.getByText("08:00")).toBeInTheDocument();
  expect(
    screen.getAllByText("CTS-20260610-AB12CD").length,
  ).toBeGreaterThan(0);
  expect(
    await screen.findByRole("img", {
      name: "QR code de confirmation CTS-20260610-AB12CD",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Retour à l'accueil" }),
  ).toBeInTheDocument();
});

test("shows a recovery screen when no confirmation token is available", async () => {
  render(
    <LocaleProvider>
      <MemoryRouter initialEntries={["/appointment/success"]}>
        <Routes>
          <Route path="/appointment/success" element={<AppointmentSuccessPage />} />
        </Routes>
      </MemoryRouter>
    </LocaleProvider>,
  );

  expect(
    await screen.findByRole("heading", {
      level: 1,
      name: "Confirmation introuvable",
    }),
  ).toBeInTheDocument();
});

test("renders the Arabic confirmation receipt when the locale is Arabic", async () => {
  Object.defineProperty(window, "localStorage", {
    configurable: true,
    value: {
      getItem: vi.fn((key: string) => (key === "cts-app-locale" ? "ar" : null)),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
  });
  window.sessionStorage.setItem(
    "cts-appointment-confirmation",
    JSON.stringify({
      confirmationToken: "stored-token",
      confirmationCode: "CTS-20260610-AB12CD",
      firstName: "Nadia",
      lastName: "Dupont",
      appointmentDate: "2026-06-10",
      appointmentTime: "08:00",
    }),
  );

  vi.mocked(getAppointmentConfirmation).mockResolvedValueOnce({
    success: true,
    data: {
      appointmentId: "appt-1",
      confirmationCode: "CTS-20260610-AB12CD",
      status: "pending",
      qrCodeDataUrl: "data:image/png;base64,server-qr",
      donor: {
        firstName: "Nadia",
        lastName: "Dupont",
      },
      appointment: {
        date: "2026-06-10",
        time: "08:00",
      },
      guidance: {
        title: "قبل حضورك",
        items: ["اشرب الماء", "أحضر بطاقة تعريف"],
      },
    },
    message: "ok",
  });

  render(
    <LocaleProvider>
      <MemoryRouter initialEntries={["/appointment/success"]}>
        <Routes>
          <Route path="/appointment/success" element={<AppointmentSuccessPage />} />
        </Routes>
      </MemoryRouter>
    </LocaleProvider>,
  );

  expect(
    await screen.findByRole("heading", {
      level: 1,
      name: "تم تسجيل طلب الموعد بنجاح",
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "العودة إلى الرئيسية" })).toBeInTheDocument();
  expect(screen.getByText("رمز الدخول")).toBeInTheDocument();
});
