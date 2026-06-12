import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { LocaleProvider } from "@/i18n/locale";
import { HomePage } from "@/pages/home/HomePage";

vi.mock("@/lib/api/campaignApi", () => ({
  getFeaturedCampaign: vi.fn().mockResolvedValue(null),
  getActiveCampaigns: vi.fn().mockResolvedValue([]),
}));

vi.mock("@/lib/api/faqApi", () => ({
  getFaq: vi.fn().mockResolvedValue([]),
}));

vi.mock("@/lib/api/homeApi", async () => {
  const actual = await vi.importActual<typeof import("@/lib/api/homeApi")>(
    "@/lib/api/homeApi",
  );

  return {
    ...actual,
    getHomeContent: vi.fn().mockResolvedValue(actual.homeFallbackContent),
  };
});

beforeEach(() => {
  if (typeof window.localStorage?.removeItem === "function") {
    window.localStorage.removeItem("cts-app-locale");
  }
  vi.clearAllMocks();
});

test("renders the homepage critical sections", async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /donner son sang, c'est sauver des vies/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Notre Impact" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /questions fréquentes/i }),
  ).toBeInTheDocument();
});

test("keeps rendering when faq and campaigns are unavailable", async () => {
  const { getFeaturedCampaign } = await import("@/lib/api/campaignApi");
  const { getFaq } = await import("@/lib/api/faqApi");

  vi.mocked(getFeaturedCampaign).mockRejectedValueOnce(
    new Error("campaign failure"),
  );
  vi.mocked(getFaq).mockRejectedValueOnce(new Error("faq failure"));

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /donner son sang, c'est sauver des vies/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/vous avez encore une question/i),
  ).toBeInTheDocument();
});

test("renders dynamic homepage content from backend-driven sections", async () => {
  const { getHomeContent } = await import("@/lib/api/homeApi");
  const { getFeaturedCampaign, getActiveCampaigns } = await import("@/lib/api/campaignApi");

  vi.mocked(getFeaturedCampaign).mockResolvedValueOnce({
    id: "campaign-1",
    code: "SOLIDARITE-2026",
    title: "Campagne de solidarité",
    description: "Description campagne",
    status: "published",
    startDate: null,
    endDate: null,
    ctaLabel: "Participer",
    badgeLabel: "Urgence estivale",
    theme: "emergency",
    priority: 90,
  });
  vi.mocked(getActiveCampaigns).mockResolvedValueOnce([
    {
      id: "campaign-1",
      code: "SOLIDARITE-2026",
      title: "Campagne de solidarité",
      description: "Description campagne",
      status: "published",
      operationalStatus: "ongoing",
      startDate: null,
      endDate: null,
      ctaLabel: "Participer",
      badgeLabel: "Urgence estivale",
      theme: "emergency",
      priority: 90,
    },
  ]);

  vi.mocked(getHomeContent).mockResolvedValueOnce({
    hero: {
      campaignLabel: "Urgence estivale",
      title: "Un titre piloté par le backend",
      description: "Une description dynamique de homepage.",
      ctaLabel: "Agir maintenant",
    },
    impact: {
      sectionLabel: "Impact réel",
      title: "Des données utiles",
      description: "Texte d'impact dynamique.",
      stats: [
        { label: "Donneurs", value: "180+" },
        { label: "Jours actifs", value: "7/7" },
      ],
    },
    eligibilityPreview: {
      sectionLabel: "Conditions",
      title: "Vérifiez votre profil",
      description: "Critères dynamiques",
      items: [
        { title: "Âge valide", description: "Entre 18 et 65 ans" },
        { title: "Poids valide", description: "Plus de 50 kg" },
      ],
    },
    ctaBanner: {
      title: "Passez à l'action",
      description: "Description CTA dynamique",
      ctaLabel: "Réserver",
    },
    process: {
      sectionLabel: "Étapes",
      title: "Le parcours",
      description: "Description process dynamique",
      items: [
        { title: "Avant", description: "Préparation" },
        { title: "Pendant", description: "Prélèvement" },
      ],
    },
    support: {
      label: "Support",
      phone: "+213 560 038 317",
      email: "cts.chu.mustapha@gmail.com",
    },
  });

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(
    await screen.findByRole("heading", {
      level: 1,
      name: /un titre piloté par le backend/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /les campagnes ouvertes au rendez-vous/i })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /choisir cette campagne/i }),
  ).toHaveAttribute("href", "/appointment?campaignCode=SOLIDARITE-2026");
  expect(screen.getByRole("heading", { name: /des données utiles/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /vérifiez votre profil/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /passez à l'action/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 2, name: /le parcours/i }),
  ).toBeInTheDocument();
});

test("opens the campaign section with a rendez-vous link", async () => {
  const { getActiveCampaigns } = await import("@/lib/api/campaignApi");

  vi.mocked(getActiveCampaigns).mockResolvedValueOnce([
    {
      id: "campaign-2",
      code: "METRO-2026",
      title: "Collecte métro",
      description: "Description campagne",
      status: "published",
      operationalStatus: "scheduled",
      startDate: "2026-06-14T00:00:00.000Z",
      endDate: "2026-06-20T00:00:00.000Z",
      ctaLabel: "Participer",
      badgeLabel: "Collecte mobile",
      theme: "mobile",
      priority: 80,
    },
  ]);

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(
    await screen.findByRole("heading", {
      name: /collecte métro/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /choisir cette campagne/i }),
  ).toHaveAttribute("href", "/appointment?campaignCode=METRO-2026");
});

test("falls back to arabic homepage copy when content loading fails in ar locale", async () => {
  const { getHomeContent } = await import("@/lib/api/homeApi");

  if (typeof window.localStorage?.setItem === "function") {
    window.localStorage.setItem("cts-app-locale", "fr");
  }
  vi.mocked(getHomeContent).mockRejectedValue(new Error("home failure"));

  render(
    <LocaleProvider>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </LocaleProvider>,
  );

  fireEvent.click(screen.getAllByRole("button", { name: "AR" })[0]);

  expect(
    await screen.findByRole("heading", {
      level: 1,
      name: /التبرع بالدم يعني إنقاذ الأرواح/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByText(/احجز موعدك في بضع نقرات/i)).toBeInTheDocument();
  expect(screen.getByText(/حمى أو إنفلونزا أو عدوى أو التهاب حلق حديث/i)).toBeInTheDocument();
});

test("renders detailed contraindications in french", async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(
    await screen.findByText(/fièvre, grippe, infection ou mal de gorge récent/i),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/infection transmissible par le sang connue/i),
  ).toBeInTheDocument();
});

test("renders the public chatbot launcher in french and arabic", async () => {
  render(
    <LocaleProvider>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </LocaleProvider>,
  );

  expect(
    screen.getByRole("button", { name: /chatbot/i }),
  ).toBeInTheDocument();

  fireEvent.click(screen.getAllByRole("button", { name: "AR" })[0]);

  expect(
    await screen.findByRole("button", { name: /chatbot/i }),
  ).toBeInTheDocument();
});
