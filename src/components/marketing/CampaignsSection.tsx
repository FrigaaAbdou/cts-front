import { ArrowRight, CalendarDays, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionShell } from "@/components/layout/SectionShell";
import type { CampaignItem } from "@/features/home/types";
import { useLocale } from "@/i18n/locale";

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

function CampaignFeatureCard({
  campaign,
  locale,
  actionLabel,
}: {
  campaign: CampaignItem;
  locale: "fr" | "ar";
  actionLabel: string;
}) {
  const startLabel = formatCampaignDate(campaign.startDate, locale);
  const endLabel = formatCampaignDate(campaign.endDate, locale);
  const dateLabel =
    startLabel && endLabel
      ? `${startLabel} - ${endLabel}`
      : startLabel ?? endLabel ?? "";
  const badgeLabel = campaign.badgeLabel || campaign.code;
  const statusLabel = getOperationalStatusLabel(campaign.operationalStatus, locale);

  return (
    <article className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            {statusLabel}
          </p>

          <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
            {campaign.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {campaign.description}
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-red-50 text-brand-red">
          <CircleDot className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
          <CalendarDays className="h-3.5 w-3.5 shrink-0 text-brand-red" />
          <span>
            {dateLabel || (locale === "ar" ? "دون تاريخ محدد" : "Date non précisée")}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
          <CircleDot className="h-3.5 w-3.5 shrink-0 text-brand-red" />
          <span>{badgeLabel}</span>
        </div>
      </div>

      <Link
        to={getCampaignLink(campaign.code)}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function CampaignMiniCard({
  campaign,
  locale,
  actionLabel,
}: {
  campaign: CampaignItem;
  locale: "fr" | "ar";
  actionLabel: string;
}) {
  const startLabel = formatCampaignDate(campaign.startDate, locale);
  const endLabel = formatCampaignDate(campaign.endDate, locale);
  const dateLabel =
    startLabel && endLabel
      ? `${startLabel} - ${endLabel}`
      : startLabel ?? endLabel ?? "";
  const badgeLabel = campaign.badgeLabel || campaign.code;

  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
            {getOperationalStatusLabel(campaign.operationalStatus, locale)}
          </p>
          <h4 className="mt-2 text-base font-black leading-tight text-slate-950">
            {campaign.title}
          </h4>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-brand-red">
          <CircleDot className="h-3.5 w-3.5" />
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-2">
        {campaign.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-500">
        <span className="rounded-full bg-slate-50 px-2.5 py-1">
          {dateLabel || (locale === "ar" ? "دون تاريخ" : "Date non précisée")}
        </span>
        <span className="rounded-full bg-slate-50 px-2.5 py-1">{badgeLabel}</span>
      </div>

      <Link
        to={getCampaignLink(campaign.code)}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red transition hover:gap-3"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
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
          <div className="mt-12 space-y-6">
            <CampaignFeatureCard
              campaign={campaigns[0]}
              locale={locale}
              actionLabel={copy.actionLabel}
            />

            {campaigns.length > 1 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {campaigns.slice(1, 4).map((campaign) => (
                  <CampaignMiniCard
                    key={campaign.code}
                    campaign={campaign}
                    locale={locale}
                    actionLabel={copy.actionLabel}
                  />
                ))}
              </div>
            ) : null}
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
