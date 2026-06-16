import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { AdminCalendarPage } from "./AdminCalendarPage";

vi.mock("@/features/admin-auth/AdminAuthProvider", () => ({
  useAdminAuth: () => ({
    token: "admin-token",
    logout: vi.fn(),
  }),
  isUnauthorizedAdminError: () => false,
}));

vi.mock("@/lib/api/adminCalendarApi", () => ({
  closeAdminCalendarDay: vi.fn(),
  createAdminCalendarSlot: vi.fn(),
  getAdminCalendarMonth: vi.fn(),
  getAdminCalendarDay: vi.fn(),
  listAdminCalendarCampaignSelectorItems: vi.fn(),
  listAdminCalendarTemplates: vi.fn(),
  replaceAdminCalendarTemplates: vi.fn(),
  reopenAdminCalendarDay: vi.fn(),
  updateAdminCalendarSlot: vi.fn(),
}));

import {
  closeAdminCalendarDay,
  createAdminCalendarSlot,
  getAdminCalendarDay,
  getAdminCalendarMonth,
  listAdminCalendarCampaignSelectorItems,
  listAdminCalendarTemplates,
  replaceAdminCalendarTemplates,
} from "@/lib/api/adminCalendarApi";

const generalScope = {
  context: "general" as const,
  campaignCode: null,
};

describe("AdminCalendarPage", () => {
  beforeEach(() => {
    vi.mocked(listAdminCalendarCampaignSelectorItems).mockResolvedValue([]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the admin calendar month, day detail and weekly templates", async () => {
    vi.mocked(getAdminCalendarMonth).mockResolvedValue({
      month: "2026-06",
      days: [
        {
          date: "2026-06-15",
          appointmentCount: 4,
          openSlots: 2,
          fullSlots: 1,
          blockedSlots: 0,
          closedSlots: 0,
          status: "available",
        },
      ],
    });
    vi.mocked(getAdminCalendarDay).mockResolvedValue({
      date: "2026-06-15",
      summary: {
        totalSlots: 3,
        openSlots: 2,
        fullSlots: 1,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 4,
        dayClosureType: null,
      },
      slots: [
        {
          value: "08:00",
          label: "08:00",
          capacity: 3,
          reservedCount: 1,
          remainingCapacity: 2,
          status: "open",
          source: "template",
          overrideId: null,
          reason: null,
        },
      ],
    });
    vi.mocked(listAdminCalendarTemplates).mockResolvedValue([
      {
        id: "template-1",
        campaignCode: null,
        daysOfWeek: [1],
        startTime: "08:00",
        endTime: "12:00",
        intervalMinutes: 15,
        capacity: 3,
        isActive: true,
        donationTypes: ["whole_blood"],
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    expect(await screen.findByRole("heading", { name: "Calendrier" })).toBeInTheDocument();
    expect(
      screen.getAllByText(
        "Lecture mensuelle des disponibilités, des rendez-vous et des créneaux configurés pour le centre.",
      ).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText("Vue mensuelle")).toBeInTheDocument();
    expect(screen.getByText("Détail de la journée")).toBeInTheDocument();
    expect(screen.getByText("Règles hebdomadaires")).toBeInTheDocument();
    expect(screen.getAllByText("08:00").length).toBeGreaterThan(0);
    expect(screen.getByText("Lun")).toBeInTheDocument();
    expect(screen.getByText("08:00 -> 12:00")).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Calendrier" })).toHaveTextContent(
      "Calendrier general",
    );
  });

  it("switches the calendar scope from general to a published campaign", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();

    vi.mocked(listAdminCalendarCampaignSelectorItems).mockResolvedValue([
      {
        code: "SOLIDARITE-2026",
        title: "Solidarite 2026",
        startDate: "2026-06-20T00:00:00.000Z",
        endDate: "2026-06-30T00:00:00.000Z",
        operationalStatus: "ongoing",
      },
    ]);
    vi.mocked(getAdminCalendarMonth).mockImplementation(async (_token, _month, scope) => ({
      month: "2026-06",
      days: [
        scope?.context === "campaign"
          ? {
              date: "2026-06-20",
              appointmentCount: 0,
              openSlots: 1,
              fullSlots: 0,
              blockedSlots: 0,
              closedSlots: 0,
              status: "available" as const,
            }
          : {
              date: "2026-06-15",
              appointmentCount: 4,
              openSlots: 2,
              fullSlots: 1,
              blockedSlots: 0,
              closedSlots: 0,
              status: "available" as const,
            },
      ],
    }));
    vi.mocked(getAdminCalendarDay).mockImplementation(async (_token, date, scope) => ({
      date,
      summary: {
        totalSlots: 1,
        openSlots: 1,
        fullSlots: 0,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 0,
        dayClosureType: null,
      },
      slots: [
        {
          value: scope?.context === "campaign" ? "09:00" : "08:00",
          label: scope?.context === "campaign" ? "09:00" : "08:00",
          capacity: 2,
          reservedCount: 0,
          remainingCapacity: 2,
          status: "open",
          source: "template",
          overrideId: null,
          reason: null,
        },
      ],
    }));
    vi.mocked(listAdminCalendarTemplates).mockImplementation(async (_token, scope) => [
      {
        id: scope?.context === "campaign" ? "campaign-template-1" : "template-1",
        campaignCode: scope?.context === "campaign" ? "SOLIDARITE-2026" : null,
        daysOfWeek: [1],
        startTime: scope?.context === "campaign" ? "09:00" : "08:00",
        endTime: scope?.context === "campaign" ? "12:00" : "10:00",
        intervalMinutes: 15,
        capacity: 3,
        isActive: true,
        donationTypes: ["whole_blood"],
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await screen.findByRole("heading", { name: "Calendrier" });
    expect(await screen.findByRole("combobox", { name: "Calendrier" })).toHaveTextContent(
      "Calendrier general",
    );

    await user.click(screen.getByRole("combobox", { name: "Calendrier" }));
    await user.click(screen.getByRole("option", { name: "Solidarite 2026" }));

    await waitFor(() => {
      expect(getAdminCalendarMonth).toHaveBeenCalledWith(
        "admin-token",
        "2026-06",
        expect.objectContaining({
          context: "campaign",
          campaignCode: "SOLIDARITE-2026",
        }),
      );
    });

    expect(await screen.findByRole("combobox", { name: "Calendrier" })).toHaveTextContent(
      "Solidarite 2026",
    );
    expect(screen.getByText("Code: SOLIDARITE-2026")).toBeInTheDocument();
    expect(screen.getByText("Période: 2026-06-20 → 2026-06-30")).toBeInTheDocument();
    expect(screen.getByText("Statut: ongoing")).toBeInTheDocument();
    expect(screen.getByText("Planification opérationnelle de campagne")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Les dates de campagne sont définies par l’équipe communication. Le calendrier ne modifie que l’organisation opérationnelle.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "L’équipe communication fixe les dates de début et de fin de la campagne.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "L’équipe opérations ajuste uniquement les horaires, capacités, fermetures et exceptions.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Modifiable côté opérations: horaires")).toBeInTheDocument();
    expect(screen.getByText("Modifiable côté opérations: capacités")).toBeInTheDocument();
    expect(screen.getByText("Modifiable côté opérations: fermetures")).toBeInTheDocument();
    expect(screen.getByText("Modifiable côté opérations: exceptions")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Go to the Previous Month" }),
    ).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByRole("button", { name: "Go to the Next Month" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("shows a retry state when the admin calendar fails to load", async () => {
    vi.mocked(getAdminCalendarMonth).mockRejectedValue(new Error("month failure"));
    vi.mocked(getAdminCalendarDay).mockRejectedValue(new Error("day failure"));
    vi.mocked(listAdminCalendarTemplates).mockRejectedValue(
      new Error("templates failure"),
    );

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(/impossible de charger le calendrier admin/i),
      ).toBeInTheDocument();
    });
  });

  it("creates a slot override from the calendar sheet", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();

    vi.mocked(getAdminCalendarMonth).mockResolvedValue({
      month: "2026-06",
      days: [],
    });
    vi.mocked(getAdminCalendarDay).mockResolvedValue({
      date: "2026-05-31",
      summary: {
        totalSlots: 0,
        openSlots: 0,
        fullSlots: 0,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 0,
        dayClosureType: null,
      },
      slots: [],
    });
    vi.mocked(listAdminCalendarTemplates).mockResolvedValue([]);
    vi.mocked(createAdminCalendarSlot).mockResolvedValue({
      id: "override-1",
      date: "2026-05-31",
      time: "16:00",
      capacity: 2,
      status: "open",
      reason: "",
      campaignCode: null,
    });

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await screen.findByRole("heading", { name: "Calendrier" });
    await user.click(screen.getByRole("button", { name: /ajouter un créneau/i }));

    const timeInput = screen.getByLabelText("Heure");
    const capacityInput = screen.getByLabelText("Capacité");

    await user.clear(timeInput);
    await user.type(timeInput, "16:00");
    await user.clear(capacityInput);
    await user.type(capacityInput, "2");
    await user.click(screen.getByRole("button", { name: /^Enregistrer$/i }));

    await waitFor(() => {
      expect(createAdminCalendarSlot).toHaveBeenCalledWith(
        "admin-token",
        expect.objectContaining({
          date: expect.any(String),
          time: "16:00",
          capacity: 2,
          status: "open",
        }),
        generalScope,
      );
    });
  });

  it("confirms and closes the selected day", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();

    vi.mocked(getAdminCalendarMonth).mockResolvedValue({
      month: "2026-06",
      days: [],
    });
    vi.mocked(getAdminCalendarDay).mockResolvedValue({
      date: "2026-05-31",
      summary: {
        totalSlots: 1,
        openSlots: 1,
        fullSlots: 0,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 0,
        dayClosureType: null,
      },
      slots: [
        {
          value: "08:00",
          label: "08:00",
          capacity: 3,
          reservedCount: 0,
          remainingCapacity: 3,
          status: "open",
          source: "template",
          overrideId: null,
          reason: null,
        },
      ],
    });
    vi.mocked(listAdminCalendarTemplates).mockResolvedValue([]);
    vi.mocked(closeAdminCalendarDay).mockResolvedValue({
      date: "2026-05-31",
      status: "closed",
      affectedSlots: 1,
      closureType: "day_off",
    });

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await screen.findByRole("heading", { name: "Calendrier" });
    await user.click(screen.getByRole("button", { name: /jour off/i }));
    await user.click(screen.getByRole("button", { name: /^Marquer off$/i }));

    await waitFor(() => {
      expect(closeAdminCalendarDay).toHaveBeenCalledWith(
        "admin-token",
        {
          date: expect.any(String),
          reason: "Jour off",
          closureType: "day_off",
        },
        generalScope,
      );
    });
  });

  it("edits and saves weekly templates from the dedicated sheet", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();

    vi.mocked(getAdminCalendarMonth).mockResolvedValue({
      month: "2026-06",
      days: [],
    });
    vi.mocked(getAdminCalendarDay).mockResolvedValue({
      date: "2026-05-31",
      summary: {
        totalSlots: 0,
        openSlots: 0,
        fullSlots: 0,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 0,
        dayClosureType: null,
      },
      slots: [],
    });
    vi.mocked(listAdminCalendarTemplates).mockResolvedValue([
      {
        id: "template-1",
        campaignCode: null,
        daysOfWeek: [1],
        startTime: "08:00",
        endTime: "12:00",
        intervalMinutes: 15,
        capacity: 3,
        isActive: true,
        donationTypes: ["whole_blood"],
      },
    ]);
    vi.mocked(replaceAdminCalendarTemplates).mockResolvedValue([
      {
        id: "template-1",
        campaignCode: null,
        daysOfWeek: [1],
        startTime: "09:00",
        endTime: "12:00",
        intervalMinutes: 30,
        capacity: 4,
        isActive: true,
        donationTypes: ["whole_blood"],
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await screen.findByRole("heading", { name: "Calendrier" });
    await user.click(
      screen.getByRole("button", { name: /modifier les règles/i }),
    );

    const startTimeTrigger = screen.getByRole("combobox", {
      name: "Heure du créneau",
    });
    const endTimeTrigger = screen.getByRole("combobox", {
      name: "Heure de fin",
    });
    const capacityInput = screen.getByLabelText("Capacité hebdomadaire");

    await user.click(startTimeTrigger);
    await user.click(screen.getByRole("option", { name: "09:00" }));
    await user.click(endTimeTrigger);
    await user.click(screen.getByRole("option", { name: "12:00" }));
    await user.clear(capacityInput);
    await user.type(capacityInput, "4");
    await user.click(screen.getByRole("combobox", { name: "Intervalle" }));
    await user.click(screen.getByRole("option", { name: "30 min" }));

    expect(screen.getAllByText("09:00").length).toBeGreaterThan(0);
    expect(screen.getByText("09:30")).toBeInTheDocument();
    expect(screen.getByText("11:30")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^Enregistrer$/i }));

    await waitFor(() => {
      expect(replaceAdminCalendarTemplates).toHaveBeenCalledWith(
        "admin-token",
        [
          expect.objectContaining({
            daysOfWeek: [1],
            startTime: "09:00",
            endTime: "12:00",
            intervalMinutes: 30,
            capacity: 4,
            isActive: true,
            donationTypes: ["whole_blood"],
          }),
        ],
        generalScope,
      );
    });
  });

  it("applies recurrence presets such as week-end before saving a rule", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();

    vi.mocked(getAdminCalendarMonth).mockResolvedValue({
      month: "2026-06",
      days: [],
    });
    vi.mocked(getAdminCalendarDay).mockResolvedValue({
      date: "2026-05-31",
      summary: {
        totalSlots: 0,
        openSlots: 0,
        fullSlots: 0,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 0,
        dayClosureType: null,
      },
      slots: [],
    });
    vi.mocked(listAdminCalendarTemplates).mockResolvedValue([
      {
        id: "template-1",
        campaignCode: null,
        daysOfWeek: [1],
        startTime: "08:00",
        endTime: "10:00",
        intervalMinutes: 30,
        capacity: 2,
        isActive: true,
        donationTypes: ["whole_blood"],
      },
    ]);
    vi.mocked(replaceAdminCalendarTemplates).mockResolvedValue([
      {
        id: "template-1",
        campaignCode: null,
        daysOfWeek: [0, 6],
        startTime: "08:00",
        endTime: "10:00",
        intervalMinutes: 30,
        capacity: 2,
        isActive: true,
        donationTypes: ["whole_blood"],
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await screen.findByRole("heading", { name: "Calendrier" });
    await user.click(screen.getByRole("button", { name: /modifier les règles/i }));
    await user.click(screen.getByRole("button", { name: "Week-end" }));
    await user.click(screen.getByRole("button", { name: /^Enregistrer$/i }));

    await waitFor(() => {
      expect(replaceAdminCalendarTemplates).toHaveBeenCalledWith(
        "admin-token",
        [
          expect.objectContaining({
            daysOfWeek: [0, 6],
          }),
        ],
        generalScope,
      );
    });
  });

  it("offers only quarter-hour values for recurring rule time selectors", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();

    vi.mocked(getAdminCalendarMonth).mockResolvedValue({
      month: "2026-06",
      days: [],
    });
    vi.mocked(getAdminCalendarDay).mockResolvedValue({
      date: "2026-05-31",
      summary: {
        totalSlots: 0,
        openSlots: 0,
        fullSlots: 0,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 0,
        dayClosureType: null,
      },
      slots: [],
    });
    vi.mocked(listAdminCalendarTemplates).mockResolvedValue([
      {
        id: "template-1",
        campaignCode: null,
        daysOfWeek: [1],
        startTime: "08:00",
        endTime: "10:00",
        intervalMinutes: 15,
        capacity: 2,
        isActive: true,
        donationTypes: ["whole_blood"],
      },
    ]);

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await screen.findByRole("heading", { name: "Calendrier" });
    await user.click(screen.getByRole("button", { name: /modifier les règles/i }));
    await user.click(
      screen.getByRole("combobox", { name: "Heure du créneau" }),
    );

    expect(screen.getByRole("option", { name: "08:15" })).toBeInTheDocument();
    expect(
      screen.queryByRole("option", { name: "08:07" }),
    ).not.toBeInTheDocument();
  });

  it("allows deleting the last weekly rule and saving an empty schedule", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();

    vi.mocked(getAdminCalendarMonth).mockResolvedValue({
      month: "2026-06",
      days: [],
    });
    vi.mocked(getAdminCalendarDay).mockResolvedValue({
      date: "2026-05-31",
      summary: {
        totalSlots: 0,
        openSlots: 0,
        fullSlots: 0,
        blockedSlots: 0,
        closedSlots: 0,
        appointmentCount: 0,
        dayClosureType: null,
      },
      slots: [],
    });
    vi.mocked(listAdminCalendarTemplates).mockResolvedValue([
      {
        id: "template-1",
        campaignCode: null,
        daysOfWeek: [5],
        startTime: "08:00",
        endTime: "14:00",
        intervalMinutes: 15,
        capacity: 1,
        isActive: false,
        donationTypes: ["whole_blood"],
      },
    ]);
    vi.mocked(replaceAdminCalendarTemplates).mockResolvedValue([]);

    render(
      <MemoryRouter>
        <AdminCalendarPage />
      </MemoryRouter>,
    );

    await screen.findByRole("heading", { name: "Calendrier" });
    await user.click(screen.getByRole("button", { name: /modifier les règles/i }));
    await user.click(screen.getByRole("button", { name: /supprimer la règle/i }));
    expect(
      screen.getByText(/aucune règle hebdomadaire/i),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /^Enregistrer$/i }));

    await waitFor(() => {
      expect(replaceAdminCalendarTemplates).toHaveBeenCalledWith(
        "admin-token",
        [],
        generalScope,
      );
    });
  });
});
