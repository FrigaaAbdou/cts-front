import { useEffect, useMemo, useRef, useState } from "react";
import {
  Circle,
  Loader2,
  SendHorizontal,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postChatbotMessage } from "@/lib/api/chatbotApi";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale";
import type { ChatMessage } from "@/features/chatbot/types";
import { getChatbotCopy } from "./chatbot.copy";

type ChatbotWidgetProps = {
  page: "home" | "appointment";
};

const SESSION_STORAGE_KEY = "cts-chatbot-session-id";

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.4 12.8c-11.2 0-20.3 8.1-20.3 18.1 0 5.2 2.5 9.9 6.4 13.2l-2.1 8.1c-.3 1.3 1 2.3 2.1 1.7l8.1-4.1c1.8.5 3.7.7 5.8.7 11.2 0 20.3-8.1 20.3-18.1S42.6 12.8 31.4 12.8Z"
        stroke="currentColor"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getSessionId() {
  if (typeof window === "undefined") {
    return "server-session";
  }

  const existing = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (existing) {
    return existing;
  }

  const next =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `session-${Date.now()}`;

  window.sessionStorage.setItem(SESSION_STORAGE_KEY, next);

  return next;
}

export function ChatbotWidget({ page }: ChatbotWidgetProps) {
  const { locale, direction } = useLocale();
  const copy = useMemo(() => getChatbotCopy(locale), [locale]);
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const launcherRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const sessionIdRef = useRef<string>(getSessionId());

  useEffect(() => {
    setMessages([
      {
        id: `welcome-${locale}`,
        role: "assistant",
        content: copy.welcomeMessage,
        state: "sent",
      },
    ]);
    setDraft("");
    setIsLoading(false);
  }, [copy.welcomeMessage, locale]);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const panel = panelRef.current;
      const launcher = launcherRef.current;
      const target = event.target as Node;

      if (
        panel &&
        !panel.contains(target) &&
        !launcher?.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  async function sendMessage(rawMessage: string) {
    const message = rawMessage.trim();

    if (!message || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: message,
      state: "sent",
    };

    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setIsLoading(true);

    try {
      const payload = await postChatbotMessage({
        message,
        locale,
        sessionId: sessionIdRef.current,
        context: { page },
      });

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: payload.data.reply,
          state: "sent",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content: copy.errorLabel,
          state: "error",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div
        ref={launcherRef}
        className={cn(
          "fixed bottom-5 z-[60]",
          direction === "rtl" ? "left-5" : "right-5",
        )}
      >
        <Button
          type="button"
          aria-label={copy.launcherLabel}
          onClick={() => setIsOpen((current) => !current)}
          className={cn(
            "size-20 rounded-full border-0 bg-[radial-gradient(circle_at_34%_26%,#ff3d63_0%,#ff0a1f_48%,#cf0028_100%)] text-white shadow-[0_12px_22px_rgba(180,0,36,0.34),0_3px_0_rgba(255,255,255,0.16)_inset] transition hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(180,0,36,0.4),0_3px_0_rgba(255,255,255,0.18)_inset]",
          )}
        >
          <ChatBubbleIcon className="size-10" />
          <span className="sr-only">
            {copy.launcherLabel}
          </span>
        </Button>
      </div>

      {isOpen ? (
        <div
          ref={panelRef}
          className={cn(
            "chatbot-panel-enter fixed inset-x-3 bottom-28 z-50 flex max-h-[calc(100dvh-8rem)] flex-col overflow-hidden rounded-[1.75rem] border border-red-100/80 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.18)]",
            "sm:inset-x-auto sm:bottom-28 sm:w-[25rem] sm:max-h-[min(78dvh,40rem)]",
            direction === "rtl" ? "sm:left-5" : "sm:right-5",
          )}
        >
          <div className="shrink-0 border-b border-red-100/70 bg-gradient-to-br from-brand-red via-[#ff4f69] to-[#ff7b92] px-4 py-4 text-white sm:px-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/15 backdrop-blur-sm">
                  <ChatBubbleIcon className="size-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                    CTS Assistant
                  </p>
                  <p className="mt-1 text-xl font-bold leading-none">
                    {copy.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-5 text-white/88">
                    {copy.subtitle}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-medium text-white/92 ring-1 ring-white/14">
                    <Circle className="size-3 fill-emerald-300 text-emerald-300" />
                    {locale === "ar"
                      ? "متصل الآن • العربية والفرنسية"
                      : "En ligne • Français et arabe"}
                  </div>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Close chatbot"
                onClick={() => setIsOpen(false)}
                className="shrink-0 rounded-full bg-white/14 text-white hover:bg-white/20 hover:text-white"
              >
                <X />
              </Button>
            </div>
          </div>

          <div
            ref={messagesContainerRef}
            className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto bg-[linear-gradient(180deg,rgba(255,247,248,0.85)_0%,rgba(255,255,255,1)_22%)] px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex max-w-[92%] gap-3",
                  message.role === "assistant" ? "self-start" : "self-end",
                  direction === "rtl" && message.role === "assistant"
                    ? "flex-row-reverse"
                    : "",
                )}
              >
                {message.role === "assistant" ? (
                  <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-brand-red ring-1 ring-red-100">
                    <Sparkles className="size-5" />
                  </div>
                ) : null}
                <div
                  className={cn(
                    "rounded-[2rem] px-4 py-4 text-sm leading-7 shadow-[0_18px_40px_rgba(255,10,31,0.08)]",
                    message.role === "assistant"
                      ? "rounded-tl-[1rem] border border-red-100 bg-white text-slate-800"
                      : "rounded-tr-[1rem] bg-brand-red text-white",
                    message.state === "error" &&
                      "border border-red-200 bg-red-50 text-red-700",
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading ? (
              <div className="flex max-w-[92%] gap-3 self-start">
                <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-brand-red ring-1 ring-red-100">
                  <Sparkles className="size-5" />
                </div>
                <div className="rounded-[2rem] rounded-tl-[1rem] border border-red-100 bg-white px-4 py-4 text-sm text-slate-600 shadow-[0_18px_40px_rgba(255,10,31,0.08)]">
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    {copy.sendLabel}...
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <form
            className="shrink-0 border-t border-red-100 bg-white px-4 py-3"
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(draft);
            }}
          >
            <div className="mb-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max gap-2">
                {copy.quickReplies.map((item) => (
                  <Button
                    key={item}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-9 shrink-0 rounded-full border-red-100 bg-red-50/70 px-3 text-sm font-semibold text-slate-700 hover:bg-red-100"
                    onClick={() => void sendMessage(item)}
                    disabled={isLoading}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold text-slate-600">
                Aa
              </div>
              <Input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={copy.placeholder}
                disabled={isLoading}
                aria-label={copy.placeholder}
                className="h-11 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
              />
              <Button
                type="submit"
                size="icon-lg"
                className="rounded-full bg-brand-red text-white shadow-[0_12px_28px_rgba(255,10,31,0.24)] hover:bg-brand-dark"
                disabled={isLoading || !draft.trim()}
                aria-label={copy.sendLabel}
              >
                <SendHorizontal className="size-5" />
              </Button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
