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
      "Quelles sont les contre-indications ?",
      "Quelle campagne est active ?",
    ],
    welcomeMessage:
      "Bonjour. Je peux vous aider sur les questions generales de don du sang, de rendez-vous et de campagnes en cours.",
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
      "ما هي موانع التبرع؟",
      "ما هي الحملة النشطة حاليا؟",
    ],
    welcomeMessage:
      "مرحبا. يمكنني مساعدتك في الأسئلة العامة حول التبرع بالدم، حجز الموعد والحملات الجارية.",
  },
};

export function getChatbotCopy(locale: ChatbotLocale) {
  return COPY[locale];
}
