import { apiRequest } from "@/lib/api/client";
import type {
  ChatbotRequestPayload,
  ChatbotResponsePayload,
} from "@/features/chatbot/types";

export async function postChatbotMessage(payload: ChatbotRequestPayload) {
  return apiRequest<ChatbotResponsePayload>("/api/public/chatbot/message", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
