export type ChatbotLocale = "fr" | "ar";

export type ChatbotOutcome =
  | "answered"
  | "redirected_sensitive"
  | "redirected_out_of_scope"
  | "fallback";

export type ChatbotReply = {
  reply: string;
  locale: ChatbotLocale;
  outcome: ChatbotOutcome;
  sensitive: boolean;
  sourceSummary: string[];
};

export type ChatbotResponsePayload = {
  success: boolean;
  data: ChatbotReply;
  message: string;
};

export type ChatbotRequestPayload = {
  message: string;
  locale: ChatbotLocale;
  sessionId?: string;
  context?: {
    page?: "home" | "appointment";
  };
};

export type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  state?: "sent" | "loading" | "error";
};
