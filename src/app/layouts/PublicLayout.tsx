import type { ReactNode } from "react";

import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";
import { useLocale } from "@/i18n/locale";

type PublicLayoutProps = {
  children: ReactNode;
  chatbotPage?: "home" | "appointment";
};

export function PublicLayout({
  children,
  chatbotPage = "home",
}: PublicLayoutProps) {
  const { direction } = useLocale();

  return (
    <div
      dir={direction}
      className="min-h-screen bg-[radial-gradient(circle_at_top,#fff1ef,transparent_40%)]"
    >
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
      <ChatbotWidget page={chatbotPage} />
    </div>
  );
}
