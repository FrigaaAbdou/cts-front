import { ArrowRight, CalendarDays, CircleDot, Clock3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionShell } from "@/components/layout/SectionShell";
import type { CampaignItem } from "@/features/home/types";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/utils";

type CampaignsSectionProps = {
  campaigns: CampaignItem[];
};

function formatCampaignDate(date: string | null, locale: "fr" | "ar") {
  if (!date) {
    return null;
  }

  const formatter = new Intl.DateTimeFormat(locale === "ar" ? "ar-DZ" : "fr-DZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return formatter.format(new Date(date));
}

function getOperationalStatusLabel(
  status: CampaignItem["operationalStatus"] | undefined,
  locale: "fr" | "ar",
) {
  const labels =
    locale === "ar"
      ? {
          scheduled: "مجدولة",
          ongoing: "جارية",
          finished: "منتهية",
        }
      : {
          scheduled: "Programmée",
          ongoing: "En cours",
          finished: "Terminée",
        };

  return status ? labels[status] : "";
}

function getCampaignLink(code: string) {
  return `/appointment?campaignCode=${encodeURIComponent(code)}`;
}

export function CampaignsSection({ campaigns }: CampaignsSectionProps) {
  const { locale } = useLocale();
  const copy =
    locale === "ar"
      ? {
          sectionLabel: "الحملات",
          title: "الحملات المتاحة الآن",
          description:
            "اطلع على الحملات المنشورة والفعالة أو المجدولة، ثم انتقل مباشرة إلى طلب الموعد.",
          emptyTitle: "لا توجد حملة مبرزة حاليا",
          emptyDescription:
            "يمكنك دائما طلب موعد عام أو العودة لاحقا للاطلاع على الحملات القادمة.",
          actionLabel: "اختيار الحملة",
          noDates: "الحملة دون تاريخ محدد",
        }
      : {
          sectionLabel: "Campagnes",
          title: "Les campagnes ouvertes au rendez-vous",
          description:
            "Consultez les campagnes publiées et actives, puis accédez directement à la prise de rendez-vous.",
          emptyTitle: "Aucune campagne mise en avant pour le moment",
          emptyDescription:
            "Vous pouvez toujours prendre un rendez-vous général ou revenir plus tard pour consulter les prochaines campagnes.",
          actionLabel: "Choisir cette campagne",
          noDates: "Campagne sans date précisée",
        };

  return (
    <SectionShell className="pt-0">
      <PageContainer>
        <p className="mx-auto w-fit rounded-full border border-red-100 bg-white px-5 py-2 text-sm font-semibold text-brand-red shadow-sm">
          {copy.sectionLabel}
        </p>

        <h2 className="mt-6 text-center text-4xl font-black text-slate-950 sm:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
          {copy.description}
        </p>

        {campaigns.length > 0 ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {campaigns.slice(0, 3).map((campaign, index) => {
              const startLabel = formatCampaignDate(campaign.startDate, locale);
              const endLabel = formatCampaignDate(campaign.endDate, locale);
              const dateLabel =
                startLabel && endLabel
                  ? `${startLabel} - ${endLabel}`
                  : startLabel ?? endLabel ?? copy.noDates;

              return (
                <article
                  key={campaign.code}
                  className={cn(
                    "group rounded-[1.75rem] border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg",
                    index === 0 ? "border-red-200 bg-gradient-to-b from-red-50 to-white" : "border-slate-100",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                        <Sparkles className="h-3.5 w-3.5" />
                        {getOperationalStatusLabel(campaign.operationalStatus, locale)}
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">
                        {campaign.title}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-red text-white shadow-soft">
                      <CircleDot className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {campaign.description}
                  </p>

                  <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0 text-brand-red" />
                      <span>{dateLabel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 shrink-0 text-brand-red" />
                      <span>{campaign.badgeLabel || campaign.code}</span>
                    </div>
                  </div>

                  <Link
                    to={getCampaignLink(campaign.code)}
                    className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-brand-red transition hover:gap-3"
                  >
                    {copy.actionLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border border-slate-200 bg-white p-10 text-center shadow-soft">
            <p className="text-2xl font-black text-slate-950">{copy.emptyTitle}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {copy.emptyDescription}
            </p>
            <Link
              to="/appointment"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
            >
              {copy.actionLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </PageContainer>
    </SectionShell>
  );
}
