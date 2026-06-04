import { useEffect, useState } from "react";

import { PublicLayout } from "@/app/layouts/PublicLayout";
import { CtaBannerSection } from "@/components/marketing/CtaBannerSection";
import { EligibilityPreviewSection } from "@/components/marketing/EligibilityPreviewSection";
import { FaqSection } from "@/components/marketing/FaqSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { ImpactSection } from "@/components/marketing/ImpactSection";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { FaqItem, HomePageContent } from "@/features/home/types";
import { useLocale } from "@/i18n/locale";
import { getFeaturedCampaign } from "@/lib/api/campaignApi";
import { getFaq } from "@/lib/api/faqApi";
import {
  getHomeFallbackContent,
  getHomeContent,
} from "@/lib/api/homeApi";

export function HomePage() {
  const { locale } = useLocale();
  const [content, setContent] = useState<HomePageContent>(
    getHomeFallbackContent(locale),
  );
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);

  useEffect(() => {
    let isActive = true;

    setContent(getHomeFallbackContent(locale));

    void (async () => {
      const [featuredCampaignResult, faqResult] = await Promise.allSettled([
        getFeaturedCampaign(locale),
        getFaq(locale),
      ]);

      const featuredCampaign =
        featuredCampaignResult.status === "fulfilled"
          ? featuredCampaignResult.value
          : null;

      if (faqResult.status === "fulfilled" && isActive) {
        setFaqItems(faqResult.value);
      }

      try {
        const payload = await getHomeContent(locale, featuredCampaign);

        if (isActive) {
          setContent(payload);
        }
      } catch {
        if (isActive) {
          setContent(getHomeFallbackContent(locale));
        }
      }
    })();

    return () => {
      isActive = false;
    };
  }, [locale]);

  return (
    <PublicLayout>
      <ScrollReveal variant="fade-scale">
        <HeroSection
          campaignLabel={content.hero.campaignLabel}
          title={content.hero.title}
          description={content.hero.description}
          ctaLabel={content.hero.ctaLabel}
        />
      </ScrollReveal>
      <ScrollReveal delay={80} stagger>
        <ImpactSection
          sectionLabel={content.impact.sectionLabel}
          title={content.impact.title}
          description={content.impact.description}
          stats={content.impact.stats}
        />
      </ScrollReveal>
      <ScrollReveal delay={120} stagger variant="slide-right">
        <EligibilityPreviewSection
          sectionLabel={content.eligibilityPreview.sectionLabel}
          title={content.eligibilityPreview.title}
          description={content.eligibilityPreview.description}
          items={content.eligibilityPreview.items}
        />
      </ScrollReveal>
      <ScrollReveal delay={80} variant="fade-scale">
        <CtaBannerSection
          title={content.ctaBanner.title}
          description={content.ctaBanner.description}
          ctaLabel={content.ctaBanner.ctaLabel}
        />
      </ScrollReveal>
      <ScrollReveal delay={120} stagger variant="slide-left">
        <ProcessSection
          sectionLabel={content.process.sectionLabel}
          title={content.process.title}
          description={content.process.description}
          items={content.process.items}
        />
      </ScrollReveal>
      <ScrollReveal delay={80} stagger>
        <FaqSection
          items={faqItems}
          supportLabel={content.support.label}
          phone={content.support.phone}
          email={content.support.email}
        />
      </ScrollReveal>
    </PublicLayout>
  );
}
