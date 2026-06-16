import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AdminCampaignsPage } from "./AdminCampaignsPage";

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
}));

vi.mock("@/lib/api/adminCampaignsApi", () => ({
  listAdminCampaigns: vi.fn(),
  createAdminCampaign: vi.fn(),
  updateAdminCampaign: vi.fn(),
}));

import {
  createAdminCampaign,
  listAdminCampaigns,
  updateAdminCampaign,
} from "@/lib/api/adminCampaignsApi";

describe("AdminCampaignsPage", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the campaigns list", async () => {
    vi.mocked(listAdminCampaigns).mockResolvedValue([
      {
        id: "campaign-1",
        code: "SOLIDARITE-2026",
        status: "published",
        isPublished: true,
        isActive: true,
        priority: 90,
        badgeLabel: "Urgence estivale",
        theme: "emergency",
        startDate: null,
        endDate: null,
        localeContent: {
          fr: { title: "Solidarité 2026", description: "Desc", ctaLabel: "Je donne" },
          ar: null,
        },
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCampaignsPage />
      </MemoryRouter>,
    );

    expect(await screen.findAllByText("SOLIDARITE-2026")).not.toHaveLength(0);
    expect(screen.getAllByText("Solidarité 2026").length).toBeGreaterThan(0);
    expect(screen.getByText("Campagne actuellement en ligne")).toBeInTheDocument();
  });

  it("keeps archived campaigns visible in the admin list for historical access", async () => {
    vi.mocked(listAdminCampaigns).mockResolvedValue([
      {
        id: "campaign-archived",
        code: "ARCHIVE-2026",
        status: "archived",
        isPublished: false,
        isActive: false,
        priority: 40,
        badgeLabel: "",
        theme: "community",
        startDate: "2026-05-01T00:00:00.000Z",
        endDate: "2026-06-01T00:00:00.000Z",
        localeContent: {
          fr: { title: "Campagne archivée", description: "Historique", ctaLabel: "Voir" },
          ar: null,
        },
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCampaignsPage />
      </MemoryRouter>,
    );

    expect(await screen.findAllByText("ARCHIVE-2026")).not.toHaveLength(0);
    expect(screen.getAllByText("Archivée").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Campagne archivée").length).toBeGreaterThan(0);
  });

  it("creates a campaign from the editor form", async () => {
    const user = userEvent.setup();

    vi.mocked(listAdminCampaigns).mockResolvedValue([]);
    vi.mocked(createAdminCampaign).mockResolvedValue({
      id: "campaign-1",
      code: "SOLIDARITE-2026",
      status: "published",
      isPublished: true,
      isActive: true,
      priority: 90,
      badgeLabel: "Urgence estivale",
      theme: "emergency",
      startDate: null,
      endDate: null,
      localeContent: {
        fr: { title: "Solidarité 2026", description: "Desc", ctaLabel: "Je donne" },
        ar: null,
      },
    });

    render(
      <MemoryRouter>
        <AdminCampaignsPage />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /nouvelle campagne/i }));
    await user.type(screen.getByLabelText("Titre FR"), "Solidarité 2026");
    await user.type(screen.getByLabelText("Description FR"), "Desc");
    await user.type(screen.getByLabelText("CTA FR"), "Je donne");
    await user.click(screen.getByRole("button", { name: /enregistrer la campagne/i }));

    await waitFor(() => {
      expect(createAdminCampaign).toHaveBeenCalled();
    });
  });

  it("asks confirmation before archiving an active or published campaign", async () => {
    const user = userEvent.setup();

    vi.mocked(listAdminCampaigns).mockResolvedValue([
      {
        id: "campaign-1",
        code: "SOLIDARITE-2026",
        status: "published",
        isPublished: true,
        isActive: true,
        priority: 90,
        badgeLabel: "Urgence estivale",
        theme: "emergency",
        startDate: null,
        endDate: null,
        localeContent: {
          fr: { title: "Solidarité 2026", description: "Desc", ctaLabel: "Je donne" },
          ar: null,
        },
      },
    ]);
    vi.mocked(updateAdminCampaign).mockResolvedValue({
      id: "campaign-1",
      code: "SOLIDARITE-2026",
      status: "archived",
      isPublished: false,
      isActive: false,
      priority: 90,
      badgeLabel: "Urgence estivale",
      theme: "emergency",
      startDate: null,
      endDate: null,
      localeContent: {
        fr: { title: "Solidarité 2026", description: "Desc", ctaLabel: "Je donne" },
        ar: null,
      },
    });

    render(
      <MemoryRouter>
        <AdminCampaignsPage />
      </MemoryRouter>,
    );

    await screen.findAllByText("Solidarité 2026");
    await user.click(screen.getByRole("combobox", { name: "Active" }));
    await user.click(await screen.findByText("Non"));
    await user.click(screen.getByRole("button", { name: /enregistrer la campagne/i }));

    expect(
      await screen.findByText(/cette campagne quittera les flux de planification actifs/i),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /archiver la campagne/i }));

    await waitFor(() => {
      expect(updateAdminCampaign).toHaveBeenCalled();
    });

    expect(updateAdminCampaign).toHaveBeenCalledWith(
      "admin-token",
      "campaign-1",
      expect.objectContaining({
        status: "archived",
        isPublished: false,
        isActive: false,
      }),
    );
  });

  it("asks confirmation before discarding campaign edits when switching selection", async () => {
    const user = userEvent.setup();

    vi.mocked(listAdminCampaigns).mockResolvedValue([
      {
        id: "campaign-1",
        code: "SOLIDARITE-2026",
        status: "published",
        isPublished: true,
        isActive: true,
        priority: 90,
        badgeLabel: "Urgence estivale",
        theme: "emergency",
        startDate: null,
        endDate: null,
        localeContent: {
          fr: { title: "Solidarité 2026", description: "Desc", ctaLabel: "Je donne" },
          ar: null,
        },
      },
      {
        id: "campaign-2",
        code: "JEUNES-2026",
        status: "draft",
        isPublished: false,
        isActive: false,
        priority: 10,
        badgeLabel: "",
        theme: "default",
        startDate: null,
        endDate: null,
        localeContent: {
          fr: { title: "Jeunes 2026", description: "Desc 2", ctaLabel: "Participer" },
          ar: null,
        },
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCampaignsPage />
      </MemoryRouter>,
    );

    await screen.findAllByText("Solidarité 2026");
    await user.clear(screen.getByLabelText("Titre FR"));
    await user.type(screen.getByLabelText("Titre FR"), "Solidarité modifiée");
    await user.click(screen.getByText("JEUNES-2026"));

    expect(
      await screen.findByText(/modifications non enregistrées de cette campagne/i),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /quitter sans enregistrer/i }));

    await waitFor(() => {
      expect(screen.getByDisplayValue("Jeunes 2026")).toBeInTheDocument();
    });
  });
});
