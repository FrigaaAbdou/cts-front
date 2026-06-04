import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { LocaleProvider } from "@/i18n/locale";
import { AppointmentSuccessPage } from "@/pages/appointment/AppointmentSuccessPage";

test("renders the success summary from navigation state", async () => {
  render(
    <LocaleProvider>
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/appointment/success",
            state: {
              firstName: "Nadia",
              lastName: "Dupont",
              appointmentDate: "2026-06-10",
              appointmentTime: "08:00",
            },
          },
        ]}
      >
        <Routes>
          <Route path="/appointment/success" element={<AppointmentSuccessPage />} />
        </Routes>
      </MemoryRouter>
    </LocaleProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Votre demande a bien été envoyée",
    }),
  ).toBeInTheDocument();
  expect(screen.getByText("Nadia Dupont")).toBeInTheDocument();
  expect(screen.getByText("2026-06-10")).toBeInTheDocument();
  expect(screen.getByText("08:00")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Retour à l'accueil" }),
  ).toBeInTheDocument();
});
