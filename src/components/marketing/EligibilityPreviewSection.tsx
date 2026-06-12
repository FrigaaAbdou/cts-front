import {
  BadgeAlert,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Pill,
  Scale,
  ShieldAlert,
  Thermometer,
  Utensils,
  UserRoundCheck,
  Syringe,
  XCircle,
} from "lucide-react";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionShell } from "@/components/layout/SectionShell";
import { useLocale } from "@/i18n/locale";

const requirements = [
  {
    label: "Vous avez l'âge requis",
    description: "Vous êtes majeur selon la réglementation locale.",
    icon: UserRoundCheck,
  },
  {
    label: "Vous pesez au moins 50 kg",
    description: "Ce critère permet de protéger le donneur pendant le prélèvement.",
    icon: Scale,
  },
  {
    label: "Vous êtes en bonne santé le jour du don",
    description: "Vous n'avez pas de fièvre, d'infection, de malaise ou de fatigue importante.",
    icon: HeartPulse,
  },
  {
    label: "Vous avez mangé et vous êtes bien hydraté",
    description: "Il est déconseillé de venir à jeun pour donner son sang.",
    icon: Utensils,
  },
  {
    label: "Votre dernier don respecte le délai minimum",
    description: "L'intervalle entre deux dons sera vérifié avant le prélèvement.",
    icon: Clock3,
  },
];

const arabicRequirements = [
  {
    label: "توفر العمر والوزن المناسبين",
    description: "توفر السن المطلوب والوزن الكافي للتبرع.",
    icon: UserRoundCheck,
  },
  {
    label: "وزن لا يقل عن 50 كلغ",
    description: "هذا الشرط يساعد على حماية المتبرع أثناء سحب الدم.",
    icon: Scale,
  },
  {
    label: "حالة صحية جيدة يوم التبرع",
    description: "عدم وجود حمى أو عدوى أو وعكة أو تعب شديد.",
    icon: HeartPulse,
  },
  {
    label: "تناول الطعام وشرب الماء قبل الحضور",
    description: "لا ينصح بالمجيء على الريق قبل التبرع بالدم.",
    icon: Utensils,
  },
  {
    label: "احترام المدة الدنيا منذ آخر تبرع",
    description: "يتم التحقق من الفاصل الزمني بين تبرعين قبل سحب الدم.",
    icon: Clock3,
  },
];

const contraindications = [
  {
    label: "Fièvre, grippe, infection ou mal de gorge récent",
    description: "Attendez d'être complètement rétabli avant de donner.",
    icon: Thermometer,
  },
  {
    label: "Prise actuelle d'antibiotiques ou traitement important",
    description: "Le don peut être reporté selon le médicament et la raison du traitement.",
    icon: Pill,
  },
  {
    label: "Chirurgie, hospitalisation ou acte médical récent",
    description: "Le délai dépend du type d'intervention réalisée.",
    icon: BadgeAlert,
  },
  {
    label: "Tatouage, piercing ou exposition récente à un risque infectieux",
    description: "Un délai d'attente peut être nécessaire pour protéger le receveur.",
    icon: Syringe,
  },
  {
    label: "Infection transmissible par le sang connue",
    description:
      "Par exemple : VIH, hépatite B ou C, syphilis, paludisme ou maladie de Chagas. Ces situations nécessitent une évaluation médicale.",
    icon: ShieldAlert,
  },
];

type EligibilityPreviewSectionProps = {
  sectionLabel?: string;
  title?: string;
  description?: string;
  items?: Array<{
    title: string;
    description: string;
  }>;
};

export function EligibilityPreviewSection({
  sectionLabel = "Éligibilité",
  title = "Suis-je éligible au don ?",
  description = "Vérifiez votre éligibilité avant de prendre rendez-vous. En cas de doute, nos professionnels de santé sont là pour vous conseiller.",
  items,
}: EligibilityPreviewSectionProps) {
  const { locale } = useLocale();
  const requirementItems = locale === "ar" ? arabicRequirements : requirements;
  const contraindicationItems =
    locale === "ar"
      ? [
          {
            label: "حمى أو إنفلونزا أو عدوى أو التهاب حلق حديث",
            description: "يجب الانتظار إلى حين التعافي الكامل قبل التبرع.",
            icon: Thermometer,
          },
          {
            label: "تناول مضادات حيوية أو علاج مهم حاليا",
            description: "قد يتم تأجيل التبرع حسب الدواء وسبب العلاج.",
            icon: Pill,
          },
          {
            label: "جراحة أو استشفاء أو إجراء طبي حديث",
            description: "مدة التأجيل تعتمد على نوع التدخل الذي تم.",
            icon: BadgeAlert,
          },
          {
            label: "وشم أو ثقب أو تعرض حديث لخطر عدوى",
            description: "قد تكون هناك مدة انتظار لحماية المتلقي.",
            icon: Syringe,
          },
          {
            label: "وجود عدوى معروفة تنتقل عبر الدم",
            description:
              "مثل فيروس نقص المناعة أو التهاب الكبد B و C أو الزهري أو الملاريا أو داء شاغاس. هذه الحالات تحتاج إلى تقييم طبي.",
            icon: ShieldAlert,
          },
        ]
      : contraindications;
  const sectionTitles =
    locale === "ar"
      ? {
          requirements: "الشروط المطلوبة",
          contraindications: "موانع التبرع",
        }
      : {
          requirements: "Conditions requises",
          contraindications: "Contre-indications",
        };
  const medicalNote =
    locale === "ar"
      ? "هذا التحقق لا يعوض المقابلة الطبية. تؤكد أهلية التبرع النهائية دائما من طرف الفريق الطبي لحماية المتبرع والمتلقي."
      : "Cette vérification ne remplace pas l'entretien médical. L'éligibilité finale au don est toujours confirmée par l'équipe médicale afin de protéger le donneur et le receveur.";

  const matchesLocale = (value: string) =>
    locale === "ar" ? /[\u0600-\u06FF]/.test(value) : !/[\u0600-\u06FF]/.test(value);

  const dynamicRequirements = requirementItems.map((fallbackItem, index) => {
    const item = items?.[index];
    const title = item?.title?.trim() ?? "";
    const itemDescription = item?.description?.trim() ?? "";

    return {
      label: title && matchesLocale(title) ? title : fallbackItem.label,
      description:
        itemDescription && matchesLocale(itemDescription)
          ? itemDescription
          : fallbackItem.description,
      icon: fallbackItem.icon ?? CheckCircle2,
    };
  });

  return (
    <SectionShell>
      <PageContainer>
        <p className="mx-auto w-fit rounded-full border border-red-100 bg-white px-5 py-2 text-sm font-semibold text-brand-red shadow-sm">
          {sectionLabel}
        </p>
        <h2 className="text-center text-4xl font-black text-slate-950 sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
          {description}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-green-100 bg-green-50/70 p-10 shadow-soft">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-black text-green-900">
                {sectionTitles.requirements}
              </h3>
            </div>

            <ul className="space-y-4">
              {dynamicRequirements.map(({ label, description: itemDescription, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-lg text-slate-700"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-green-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="pt-1">
                    <p>{label}</p>
                    {itemDescription ? (
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {itemDescription}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-red-100 bg-red-50/70 p-10 shadow-soft">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-black text-red-900">
                {sectionTitles.contraindications}
              </h3>
            </div>

            <ul className="space-y-4">
              {contraindicationItems.map(({ label, description: itemDescription, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-lg text-slate-700"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-brand-red shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="pt-1">
                    <p>{label}</p>
                    {itemDescription ? (
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {itemDescription}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white/80 px-6 py-5 text-center shadow-sm backdrop-blur">
          <p className="text-sm leading-7 text-slate-600">{medicalNote}</p>
        </div>
      </PageContainer>
    </SectionShell>
  );
}
