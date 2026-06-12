import { Clock3, HeartPulse, Users } from "lucide-react";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionShell } from "@/components/layout/SectionShell";

const fallbackStats = [
  {
    value: "3",
    label: "Jusqu'à 3 donneurs par créneau",
    icon: Users,
  },
  {
    value: "Quotidien",
    label: "Besoin en collecte régulière",
    icon: Clock3,
  },
];

type ImpactSectionProps = {
  sectionLabel?: string;
  title?: string;
  description?: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
};

export function ImpactSection({
  sectionLabel = "Chaque don compte",
  title = "Un geste simple qui soutient les urgences, la chirurgie et l'oncologie",
  description = "Le don de sang reste indispensable pour maintenir des réserves stables au CHU Mustapha et accompagner les patients qui en ont besoin chaque jour.",
  stats = fallbackStats,
}: ImpactSectionProps) {
  const iconMap = [Users, Clock3];
  const visibleStats = stats.slice(0, 2);

  return (
    <SectionShell className="pt-8">
      <PageContainer>
        <p className="mx-auto w-fit rounded-full border border-red-100 bg-white px-5 py-2 text-sm font-semibold text-brand-red shadow-sm">
          {sectionLabel}
        </p>

        <h2 className="mx-auto mt-7 max-w-6xl text-center text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
          {title}
        </h2>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          {visibleStats.map(({ value, label }, index) => {
            const Icon = iconMap[index] ?? HeartPulse;

            return (
              <article
                key={label}
                className="relative rounded-[2rem] bg-white px-8 pb-12 pt-24 text-center shadow-soft sm:px-12 sm:pb-14 sm:pt-28"
              >
                <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red text-white shadow-soft sm:h-24 sm:w-24">
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>
                <p className="text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
                  {value}
                </p>
                <p className="mx-auto mt-5 max-w-[22rem] text-xl leading-8 text-slate-600 sm:text-2xl sm:leading-9">
                  {label}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 flex max-w-4xl items-start justify-center gap-4 text-center text-lg leading-9 text-slate-600 sm:items-center">
          <HeartPulse className="h-5 w-5 shrink-0 text-brand-red" />
          {description}
        </p>
      </PageContainer>
    </SectionShell>
  );
}
