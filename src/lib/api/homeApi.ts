import { apiRequest } from "@/lib/api/client";
import type {
  CampaignItem,
  HomeContentApiResponse,
  HomePageContent,
} from "@/features/home/types";

export const homeFallbackContent: HomePageContent = {
  hero: {
    campaignLabel: "#SolidaritéAlgérienneParLeSang",
    title: "Donner son sang, c'est sauver des vies",
    description:
      "Chaque don peut contribuer à sauver jusqu'à trois vies. Rejoignez le Centre de Transfusion Sanguine du CHU Mustapha Pacha et prenez rendez-vous en quelques clics.",
    ctaLabel: "Je donne maintenant",
  },
  impact: {
    sectionLabel: "Campagne permanente de sensibilisation",
    title: "Notre Impact",
    description:
      "Un don régulier soutient directement les besoins transfusionnels des établissements hospitaliers et des urgences vitales.",
    stats: [
      { label: "Donneurs mobilisés par jour", value: "135+" },
      { label: "Prise en charge et suivi coordonnés", value: "24h" },
      { label: "Procédure encadrée et sécurisée", value: "100%" },
    ],
  },
  eligibilityPreview: {
    sectionLabel: "Éligibilité",
    title: "Suis-je éligible au don ?",
    description:
      "Avant de prendre rendez-vous, vérifiez rapidement les principales conditions. L'éligibilité finale sera confirmée sur place par l'équipe médicale.",
    items: [
      {
        title: "Vous avez l'âge requis",
        description: "Vous êtes majeur selon la réglementation locale.",
      },
      {
        title: "Vous pesez au moins 50 kg",
        description: "Ce critère permet de protéger le donneur pendant le prélèvement.",
      },
      {
        title: "Vous êtes en bonne santé le jour du don",
        description: "Vous n'avez pas de fièvre, d'infection, de malaise ou de fatigue importante.",
      },
      {
        title: "Vous avez mangé et vous êtes bien hydraté",
        description: "Il est déconseillé de venir à jeun pour donner son sang.",
      },
      {
        title: "Votre dernier don respecte le délai minimum",
        description: "L'intervalle entre deux dons sera vérifié avant le prélèvement.",
      },
    ],
  },
  ctaBanner: {
    title: "Réservez votre rendez-vous en quelques clics",
    description:
      "Lancez votre demande de rendez-vous et rejoignez une communauté de donneurs mobilisée pour les patients qui ont besoin d'une transfusion.",
    ctaLabel: "Prendre rendez-vous",
  },
  process: {
    sectionLabel: "Parcours de don",
    title: "Comment ça se passe ?",
    description:
      "Le parcours de don reste simple, encadré et rassurant à chaque étape.",
    items: [
      {
        title: "Avant le don",
        description: "Vérification de l’éligibilité, accueil et orientation médicale.",
      },
      {
        title: "Pendant le don",
        description: "Prélèvement sécurisé et accompagnement tout au long du geste.",
      },
      {
        title: "Après le don",
        description: "Temps de repos, collation et recommandations de récupération.",
      },
    ],
  },
  support: {
    label: "Vous avez encore une question ?",
    phone: "+213 560 038 317",
    email: "cts.chu.mustapha@gmail.com",
  },
};

export function getHomeFallbackContent(locale: "fr" | "ar"): HomePageContent {
  if (locale === "ar") {
    return {
      hero: {
        campaignLabel: "#التضامن_الجزائري_بالدم",
        title: "التبرع بالدم يعني إنقاذ الأرواح",
        description:
          "يمكن لكل تبرع أن يساهم في إنقاذ ما يصل إلى ثلاث أرواح. انضم إلى مركز نقل الدم بالمستشفى الجامعي مصطفى باشا واطلب موعدا في بضع نقرات.",
        ctaLabel: "أتبرع الآن",
      },
      impact: {
        sectionLabel: "حملة توعوية مستمرة",
        title: "أثرنا",
        description:
          "التبرع المنتظم يدعم مباشرة احتياجات نقل الدم في المؤسسات الاستشفائية وحالات الاستعجال الحيوية.",
        stats: [
          { label: "متبرعون تتم تعبئتهم يوميا", value: "135+" },
          { label: "تكفل ومتابعة منسقة", value: "24h" },
          { label: "إجراء مؤطر وآمن", value: "100%" },
        ],
      },
      eligibilityPreview: {
        sectionLabel: "الأهلية",
        title: "هل أنا مؤهل للتبرع؟",
        description:
          "قبل طلب الموعد، تحقق بسرعة من الشروط الأساسية. يتم تأكيد الأهلية النهائية في عين المكان من طرف الفريق الطبي.",
        items: [
          {
            title: "أن يكون عمرك ضمن السن المطلوب",
            description: "أن تكون بالغا وفقا للتنظيم المحلي.",
          },
          {
            title: "أن يكون وزنك 50 كلغ على الأقل",
            description: "هذا الشرط يساعد على حماية المتبرع أثناء سحب الدم.",
          },
          {
            title: "أن تكون في صحة جيدة يوم التبرع",
            description: "ألا تكون لديك حمى أو عدوى أو وعكة أو تعب شديد.",
          },
          {
            title: "أن تكون قد أكلت وشربت الماء جيدا",
            description: "لا ينصح بالمجيء على الريق للتبرع بالدم.",
          },
          {
            title: "أن يحترم آخر تبرع المدة الدنيا المطلوبة",
            description: "يتم التحقق من الفاصل الزمني بين تبرعين قبل السحب.",
          },
        ],
      },
      ctaBanner: {
        title: "احجز موعدك في بضع نقرات",
        description:
          "أرسل طلب موعدك وانضم إلى مجتمع من المتبرعين الملتزمين لدعم المرضى المحتاجين إلى نقل الدم.",
        ctaLabel: "طلب موعد",
      },
      process: {
        sectionLabel: "مسار التبرع",
        title: "كيف يتم الأمر؟",
        description:
          "يبقى مسار التبرع بسيطا ومؤطرا ومطمئنا في كل مرحلة.",
        items: [
          {
            title: "قبل التبرع",
            description: "التحقق من الأهلية والاستقبال والتوجيه الطبي.",
          },
          {
            title: "أثناء التبرع",
            description: "سحب آمن ومرافقة طوال العملية.",
          },
          {
            title: "بعد التبرع",
            description: "فترة راحة ووجبة خفيفة وتوصيات للتعافي.",
          },
        ],
      },
      support: {
        label: "هل لديك سؤال آخر؟",
        phone: "+213 560 038 317",
        email: "cts.chu.mustapha@gmail.com",
      },
    };
  }

  return homeFallbackContent;
}

function mapHomeContent(
  payload: HomeContentApiResponse,
  campaign?: CampaignItem | null,
): HomePageContent {
  return {
    hero: {
      campaignLabel:
        campaign?.title ??
        campaign?.badgeLabel ??
        payload.data.hero?.eyebrow ??
        homeFallbackContent.hero.campaignLabel,
      title: payload.data.hero?.title ?? homeFallbackContent.hero.title,
      description:
        payload.data.hero?.description ?? homeFallbackContent.hero.description,
      ctaLabel:
        payload.data.hero?.primaryCtaLabel ?? homeFallbackContent.hero.ctaLabel,
    },
    impact: {
      sectionLabel:
        payload.data.impact?.sectionLabel ?? homeFallbackContent.impact.sectionLabel,
      title: payload.data.impact?.title ?? homeFallbackContent.impact.title,
      description:
        payload.data.impact?.description ?? homeFallbackContent.impact.description,
      stats:
        payload.data.impact?.stats
          ?.filter(
            (item): item is { label: string; value: string } =>
              Boolean(item?.label) && Boolean(item?.value),
          ) ?? homeFallbackContent.impact.stats,
    },
    eligibilityPreview: {
      sectionLabel:
        payload.data.eligibilityPreview?.sectionLabel ??
        homeFallbackContent.eligibilityPreview.sectionLabel,
      title:
        payload.data.eligibilityPreview?.title ??
        homeFallbackContent.eligibilityPreview.title,
      description:
        payload.data.eligibilityPreview?.description ??
        homeFallbackContent.eligibilityPreview.description,
      items:
        payload.data.eligibilityPreview?.items
          ?.filter(
            (item): item is { title: string; description: string } =>
              Boolean(item?.title) && Boolean(item?.description),
          ) ?? homeFallbackContent.eligibilityPreview.items,
    },
    ctaBanner: {
      title: payload.data.ctaBanner?.title ?? homeFallbackContent.ctaBanner.title,
      description:
        payload.data.ctaBanner?.description ??
        homeFallbackContent.ctaBanner.description,
      ctaLabel:
        payload.data.ctaBanner?.ctaLabel ?? homeFallbackContent.ctaBanner.ctaLabel,
    },
    process: {
      sectionLabel:
        payload.data.process?.sectionLabel ?? homeFallbackContent.process.sectionLabel,
      title: payload.data.process?.title ?? homeFallbackContent.process.title,
      description:
        payload.data.process?.description ?? homeFallbackContent.process.description,
      items:
        payload.data.process?.items
          ?.filter(
            (item): item is { title: string; description: string } =>
              Boolean(item?.title) && Boolean(item?.description),
          ) ?? homeFallbackContent.process.items,
    },
    support: {
      label:
        payload.data.support?.label ?? homeFallbackContent.support.label,
      phone:
        payload.data.support?.phone ??
        payload.data.footer?.phone ??
        homeFallbackContent.support.phone,
      email:
        payload.data.footer?.email ?? homeFallbackContent.support.email,
    },
  };
}

export async function getHomeContent(
  locale: "fr" | "ar" = "fr",
  campaign?: CampaignItem | null,
): Promise<HomePageContent> {
  const payload = await apiRequest<HomeContentApiResponse>(
    `/api/public/home-content?locale=${locale}`,
  );

  return mapHomeContent(payload, campaign);
}
