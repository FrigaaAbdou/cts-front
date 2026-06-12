import {
  ArrowRight,
  CalendarDays,
  CircleDot,
  Clock3,
  Sparkles,
} from "lucide-react";
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

  return (
    <article className="overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-soft">
      <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              <Sparkles className="h-3.5 w-3.5" />
              {getOperationalStatusLabel(campaign.operationalStatus, locale)}
            </div>

            <h3 className="mt-5 max-w-xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              {campaign.title}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              {campaign.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0 text-brand-red" />
                <span className="font-medium text-slate-800">
                  {dateLabel || (locale === "ar" ? "دون تاريخ محدد" : "Date non précisée")}
                </span>
              </div>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                {locale === "ar"
                  ? "يمكن للمتبرعين رؤية هذه الحملة وحجز موعد مرتبط بها."
                  : "Les donneurs peuvent voir cette campagne et réserver dessus."}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 shrink-0 text-brand-red" />
                <span className="font-medium text-slate-800">
                  {campaign.badgeLabel || campaign.code}
                </span>
              </div>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                {locale === "ar"
                  ? "حملة منشورة وفعالة في الواجهة العمومية."
                  : "Campagne publiée et active sur le site public."}
              </p>
            </div>
          </div>

          <Link
            to={getCampaignLink(campaign.code)}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-brand-dark"
          >
            {actionLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative min-h-[320px] overflow-hidden bg-[#f7f0ea] lg:min-h-[540px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),rgba(255,255,255,0.45)_34%,rgba(248,240,233,0.1)_70%)]" />
          <img
            src="/images/campaign-metro-donneur-illustration.jpeg"
            alt={campaign.title}
            className="absolute inset-0 h-full w-full object-contain object-center p-4 sm:p-6 lg:p-8"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/70 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur">
            {locale === "ar" ? "صورة الحملة" : "Visuel campagne"}
          </div>
        </div>
      </div>
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

  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
            {getOperationalStatusLabel(campaign.operationalStatus, locale)}
          </p>
          <h4 className="mt-2 text-lg font-black leading-tight text-slate-950">
            {campaign.title}
          </h4>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-brand-red">
          <CircleDot className="h-4 w-4" />
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
        {campaign.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-slate-50 px-3 py-1">{dateLabel || (locale === "ar" ? "دون تاريخ" : "Date non précisée")}</span>
        <span className="rounded-full bg-slate-50 px-3 py-1">{campaign.badgeLabel || campaign.code}</span>
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
