import type { ChatbotLocale } from "@/features/chatbot/types";

export type ChatbotCopy = {
  launcherLabel: string;
  title: string;
  subtitle: string;
  placeholder: string;
  sendLabel: string;
  openingLabel: string;
  errorLabel: string;
  quickReplies: string[];
  welcomeMessage: string;
};

const COPY: Record<ChatbotLocale, ChatbotCopy> = {
  fr: {
    launcherLabel: "Chatbot",
    title: "Chatbot",
    subtitle: "Questions fréquentes, rendez-vous et campagnes",
    placeholder: "Posez votre question...",
    sendLabel: "Envoyer",
    openingLabel: "Ouvrir le chatbot",
    errorLabel:
      "Le service d'assistance est temporairement indisponible. Reessayez dans un instant.",
    quickReplies: [
      "Qui peut donner son sang ?",
      "Comment prendre rendez-vous ?",
      "Quelles situations peuvent reporter un don ?",
      "Comment me preparer avant de venir ?",
      "Quelle campagne est active ?",
    ],
    welcomeMessage:
      "Bonjour. Je peux vous aider sur l'eligibilite generale, les rendez-vous, les campagnes et la preparation avant don.",
  },
  ar: {
    launcherLabel: "Chatbot",
    title: "شاتبوت",
    subtitle: "الأسئلة العامة، المواعيد والحملات",
    placeholder: "اكتب سؤالك...",
    sendLabel: "إرسال",
    openingLabel: "فتح الشاتبوت",
    errorLabel:
      "خدمة المساعدة غير متاحة مؤقتا. حاول مرة أخرى بعد قليل.",
    quickReplies: [
      "من يمكنه التبرع بالدم؟",
      "كيف أحجز موعدا؟",
      "ما الحالات التي قد تؤجل التبرع؟",
      "كيف أستعد قبل الحضور؟",
      "ما هي الحملة النشطة حاليا؟",
    ],
    welcomeMessage:
      "مرحبا. يمكنني مساعدتك في الأهلية العامة، وحجز الموعد، والحملات، والاستعداد قبل التبرع.",
  },
};

export function getChatbotCopy(locale: ChatbotLocale) {
  return COPY[locale];
}
