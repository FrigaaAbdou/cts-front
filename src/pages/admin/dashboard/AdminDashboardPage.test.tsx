import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AdminDashboardPage } from "./AdminDashboardPage";

vi.mock("@/features/admin-auth/AdminAuthProvider", () => ({
  useAdminAuth: () => ({
    token: "admin-token",
  }),
}));

vi.mock("@/lib/api/adminDashboardApi", () => ({
  getAdminDashboardOverview: vi.fn(),
}));

import { getAdminDashboardOverview } from "@/lib/api/adminDashboardApi";

describe("AdminDashboardPage", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the dashboard overview from the admin API", async () => {
    vi.mocked(getAdminDashboardOverview).mockResolvedValue({
      metrics: {
        pendingCount: 12,
        todayCount: 4,
        activeCampaignCount: 2,
      },
      statusDistribution: [
        { status: "pending", count: 12 },
        { status: "confirmed", count: 8 },
        { status: "rejected", count: 2 },
        { status: "completed", count: 5 },
        { status: "cancelled", count: 1 },
      ],
      recentAppointments: [
        {
          id: "appointment-1",
          donor: {
            id: "donor-1",
            firstName: "Sara",
            lastName: "Benali",
            phone: "0555123456",
            bloodGroup: "O+",
          },
          campaignCode: "SOLIDARITE-2026",
          appointmentDate: "2026-05-29",
          appointmentTime: "09:00",
          donationType: "whole_blood",
          status: "pending",
          createdAt: "2026-05-29T08:45:00.000Z",
        },
      ],
      featuredCampaign: {
        code: "SOLIDARITE-2026",
        title: "Solidarité 2026",
        badgeLabel: "Urgence estivale",
        theme: "emergency",
        startDate: "2026-06-01T00:00:00.000Z",
        endDate: null,
      },
      activity: [
        {
          id: "activity-1",
          title: "Nouvelle demande reçue",
          detail: "08:45 - Sara Benali",
        },
      ],
      analytics: {
        requestsOverTime: [{ date: "2026-06-01", count: 4 }],
        statusDistribution: [{ status: "pending", count: 12 }],
        campaignPerformance: [
          { campaignId: "camp-1", label: "Solidarité 2026", count: 5 },
        ],
        busiestDays: [{ date: "2026-06-01", count: 4 }],
        funnel: {
          received: 10,
          confirmed: 8,
          completed: 5,
        },
        campaignShare: {
          withCampaign: 6,
          withoutCampaign: 4,
          percentageWithCampaign: 60,
        },
      },
    });

    render(
      <MemoryRouter>
        <AdminDashboardPage />
      </MemoryRouter>,
    );

    expect(await screen.findAllByText("12")).not.toHaveLength(0);
    expect(screen.getAllByText("Solidarité 2026")).not.toHaveLength(0);
    expect(screen.getByText("Sara Benali")).toBeInTheDocument();
    expect(screen.getByText("Nouvelle demande reçue")).toBeInTheDocument();
    expect(screen.getByText("Demandes sur 30 jours")).toBeInTheDocument();
    expect(screen.getByText("Campagnes les plus performantes")).toBeInTheDocument();
    expect(screen.getByText("Jours les plus sollicités")).toBeInTheDocument();
    expect(screen.getByText("Taux de transformation")).toBeInTheDocument();
    expect(screen.getByText("Part des demandes avec campagne")).toBeInTheDocument();
  });

  it("shows a retry state when the dashboard loading fails", async () => {
    vi.mocked(getAdminDashboardOverview).mockRejectedValue(
      new Error("dashboard failure"),
    );

    render(
      <MemoryRouter>
        <AdminDashboardPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(/impossible de charger la vue d'ensemble admin/i),
      ).toBeInTheDocument();
    });
  });
});
