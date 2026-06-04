import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";
import { LocaleProvider } from "@/i18n/locale";

vi.mock("@/lib/api/chatbotApi", () => ({
  postChatbotMessage: vi.fn(),
}));

describe("ChatbotWidget", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    if (typeof window.sessionStorage?.clear === "function") {
      window.sessionStorage.clear();
    }
    if (typeof window.localStorage?.removeItem === "function") {
      window.localStorage.removeItem("cts-app-locale");
    }
  });

  it("opens, sends a quick reply, and renders the assistant answer", async () => {
    const user = userEvent.setup();
    const { postChatbotMessage } = await import("@/lib/api/chatbotApi");

    vi.mocked(postChatbotMessage).mockResolvedValue({
      success: true,
      message: "ok",
      data: {
        reply: "Vous pouvez prendre rendez-vous directement via /appointment.",
        locale: "fr",
        outcome: "answered",
        sensitive: false,
        sourceSummary: ["faq", "support"],
      },
    });

    render(
      <LocaleProvider>
        <ChatbotWidget page="home" />
      </LocaleProvider>,
    );

    await user.click(screen.getByRole("button", { name: /chatbot/i }));
    await user.click(
      screen.getByRole("button", { name: /comment prendre rendez-vous/i }),
    );

    await waitFor(() => {
      expect(postChatbotMessage).toHaveBeenCalledWith(
        expect.objectContaining({
          locale: "fr",
          message: "Comment prendre rendez-vous ?",
          context: { page: "home" },
        }),
      );
    });

    expect(
      await screen.findByText(/via \/appointment/i),
    ).toBeInTheDocument();
  });

  it("closes when clicking outside the panel", async () => {
    const user = userEvent.setup();

    render(
      <LocaleProvider>
        <main>
          <button type="button">Outside target</button>
          <ChatbotWidget page="home" />
        </main>
      </LocaleProvider>,
    );

    await user.click(screen.getByRole("button", { name: /chatbot/i }));

    expect(screen.getByText(/questions fréquentes/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /outside target/i }));

    await waitFor(() => {
      expect(screen.queryByText(/questions fréquentes/i)).not.toBeInTheDocument();
    });
  });
});
