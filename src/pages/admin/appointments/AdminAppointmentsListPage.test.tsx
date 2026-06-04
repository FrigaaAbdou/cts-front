import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AdminAppointmentsListPage } from "./AdminAppointmentsListPage";

vi.mock("@/features/admin-auth/AdminAuthProvider", () => ({
  useAdminAuth: () => ({
    token: "admin-token",
    admin: {
      id: "admin-1",
      email: "manager@cts.local",
      role: "manager",
      isActive: true,
    },
    logout: vi.fn(),
  }),
  isUnauthorizedAdminError: () => false,
}));

vi.mock("@/lib/api/adminAppointmentsApi", () => ({
  listAdminAppointments: vi.fn(),
  updateAdminAppointmentStatus: vi.fn(),
  updateAdminAppointmentsStatusBulk: vi.fn(),
}));

vi.mock("@/lib/api/adminCampaignsApi", () => ({
  listAdminCampaigns: vi.fn(),
}));

import {
  listAdminAppointments,
  updateAdminAppointmentsStatusBulk,
} from "@/lib/api/adminAppointmentsApi";
import { listAdminCampaigns } from "@/lib/api/adminCampaignsApi";

const baseItem = {
  donor: {
    id: "donor-1",
    firstName: "Sara",
    lastName: "Benali",
    phone: "0555123456",
    bloodGroup: "O+",
  },
  campaignCode: null,
  appointmentDate: "2026-05-29",
  appointmentTime: "09:00",
  donationType: "whole_blood",
  status: "pending" as const,
  createdAt: "2026-05-28T10:00:00.000Z",
};

describe("AdminAppointmentsListPage", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the fetched appointments list with french donation type labels", async () => {
    vi.mocked(listAdminCampaigns).mockResolvedValue([]);
    vi.mocked(listAdminAppointments).mockResolvedValue({
      items: [
        {
          id: "appointment-1",
          ...baseItem,
        },
      ],
      pagination: {
        page: 1,
        pageSize: 10,
        total: 1,
        totalPages: 1,
      },
    });

    render(
      <MemoryRouter>
        <AdminAppointmentsListPage />
      </MemoryRouter>,
    );

    expect(await screen.findByText("Sara Benali")).toBeInTheDocument();
    expect(screen.getByText("Don de sang total")).toBeInTheDocument();
  });

  it("applies a bulk status change on selected appointments", async () => {
    const user = userEvent.setup();

    vi.mocked(listAdminCampaigns).mockResolvedValue([]);
    vi.mocked(listAdminAppointments).mockResolvedValue({
      items: [
        {
          id: "appointment-1",
          ...baseItem,
        },
        {
          id: "appointment-2",
          ...baseItem,
          donor: {
            ...baseItem.donor,
            id: "donor-2",
            firstName: "Nadia",
          },
          appointmentTime: "09:15",
        },
      ],
      pagination: {
        page: 1,
        pageSize: 10,
        total: 2,
        totalPages: 1,
      },
    });
    vi.mocked(updateAdminAppointmentsStatusBulk).mockResolvedValue({
      updatedCount: 2,
      status: "confirmed",
      ids: ["appointment-1", "appointment-2"],
    });

    render(
      <MemoryRouter>
        <AdminAppointmentsListPage />
      </MemoryRouter>,
    );

    await screen.findByText("Sara Benali");

    const rowCheckboxes = screen.getAllByRole("checkbox");
    await user.click(rowCheckboxes[1]);
    await user.click(rowCheckboxes[2]);

    await user.click(screen.getByRole("combobox", { name: /choisir un statut/i }));
    await user.click(screen.getAllByText("Confirmé")[0]);
    await user.click(screen.getByRole("button", { name: /appliquer aux demandes/i }));

    await waitFor(() => {
      expect(updateAdminAppointmentsStatusBulk).toHaveBeenCalledWith("admin-token", {
        ids: ["appointment-1", "appointment-2"],
        status: "confirmed",
      });
    });
  });

  it("refetches the list when page size changes", async () => {
    const user = userEvent.setup();

    vi.mocked(listAdminCampaigns).mockResolvedValue([]);
    vi.mocked(listAdminAppointments).mockResolvedValue({
      items: [
        {
          id: "appointment-1",
          ...baseItem,
        },
      ],
      pagination: {
        page: 1,
        pageSize: 10,
        total: 1,
        totalPages: 1,
      },
    });

    render(
      <MemoryRouter>
        <AdminAppointmentsListPage />
      </MemoryRouter>,
    );

    await screen.findByText("Sara Benali");

    const initialCalls = vi.mocked(listAdminAppointments).mock.calls.length;

    await user.click(screen.getByRole("combobox", { name: /taille de page/i }));
    await user.click(screen.getByText("20 / page"));

    await waitFor(() => {
      expect(vi.mocked(listAdminAppointments).mock.calls.length).toBeGreaterThan(initialCalls);
    });

    const lastCall = vi.mocked(listAdminAppointments).mock.calls.at(-1);
    expect(lastCall?.[1]).toEqual(
      expect.objectContaining({
        page: 1,
        pageSize: 20,
      }),
    );
  });

  it("keeps the search input enabled during a refetch triggered by typing", async () => {
    const user = userEvent.setup();

    vi.mocked(listAdminCampaigns).mockResolvedValue([]);

    let callCount = 0;
    vi.mocked(listAdminAppointments).mockImplementation(async () => {
      callCount += 1;

      if (callCount === 1) {
        return {
          items: [
            {
              id: "appointment-1",
              ...baseItem,
            },
          ],
          pagination: {
            page: 1,
            pageSize: 10,
            total: 1,
            totalPages: 1,
          },
        };
      }

      return new Promise(() => undefined);
    });

    render(
      <MemoryRouter>
        <AdminAppointmentsListPage />
      </MemoryRouter>,
    );

    const searchInput = await screen.findByPlaceholderText("Rechercher par nom ou téléphone");
    await user.click(searchInput);
    await user.type(searchInput, "sa");

    await waitFor(() => {
      expect(vi.mocked(listAdminAppointments).mock.calls.length).toBeGreaterThan(1);
    }, { timeout: 2000 });

    expect(searchInput).not.toBeDisabled();
    expect(document.activeElement).toBe(searchInput);
  });
});
