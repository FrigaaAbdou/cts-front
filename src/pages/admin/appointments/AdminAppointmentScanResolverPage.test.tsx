import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AdminAppointmentScanResolverPage } from "./AdminAppointmentScanResolverPage";
import { resolveAdminAppointmentScan } from "@/lib/api/adminAppointmentsApi";

const logoutMock = vi.fn();

vi.mock("@/features/admin-auth/AdminAuthProvider", () => ({
  useAdminAuth: () => ({
    token: "admin-token",
    status: "authenticated",
    logout: logoutMock,
  }),
  isUnauthorizedAdminError: (error: unknown) =>
    Boolean(
      error &&
        typeof error === "object" &&
        "status" in error &&
        (error as { status?: number }).status === 401,
    ),
}));

vi.mock("@/lib/api/adminAppointmentsApi", () => ({
  resolveAdminAppointmentScan: vi.fn(),
}));

describe("AdminAppointmentScanResolverPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("resolves the scan and navigates to the appointment detail page", async () => {
    vi.mocked(resolveAdminAppointmentScan).mockResolvedValueOnce({
      appointmentId: "appointment-1",
      confirmationCode: "CTS-20260620-AB12CD",
      status: "pending",
      redirectTo: "/admin/appointments/appointment-1",
    });

    render(
      <MemoryRouter initialEntries={["/admin/appointments/scan/public-token-123"]}>
        <Routes>
          <Route
            path="/admin/appointments/scan/:token"
            element={<AdminAppointmentScanResolverPage />}
          />
          <Route
            path="/admin/appointments/:id"
            element={<p>appointment detail</p>}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText("appointment detail")).toBeInTheDocument();
    expect(resolveAdminAppointmentScan).toHaveBeenCalledWith(
      "admin-token",
      "public-token-123",
    );
  });

  it("shows an invalid token screen when the token cannot be found", async () => {
    vi.mocked(resolveAdminAppointmentScan).mockRejectedValueOnce({
      status: 404,
      code: "NOT_FOUND",
      message: "Appointment confirmation not found",
    });

    render(
      <MemoryRouter initialEntries={["/admin/appointments/scan/missing-token"]}>
        <Routes>
          <Route
            path="/admin/appointments/scan/:token"
            element={<AdminAppointmentScanResolverPage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      await screen.findByText("QR code introuvable"),
    ).toBeInTheDocument();
  });

  it("returns to the admin login route when the admin session is unauthorized", async () => {
    vi.mocked(resolveAdminAppointmentScan).mockRejectedValueOnce({
      status: 401,
      code: "UNAUTHORIZED",
      message: "Admin authentication is required",
    });

    render(
      <MemoryRouter initialEntries={["/admin/appointments/scan/public-token-123"]}>
        <Routes>
          <Route
            path="/admin/appointments/scan/:token"
            element={<AdminAppointmentScanResolverPage />}
          />
          <Route path="/admin/login" element={<p>login</p>} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => expect(logoutMock).toHaveBeenCalled());
    expect(await screen.findByText("login")).toBeInTheDocument();
  });
});
