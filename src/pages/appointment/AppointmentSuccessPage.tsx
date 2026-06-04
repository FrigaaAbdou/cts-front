import { CalendarDays, Check, Clock3, Droplets, House, RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { PublicLayout } from "@/app/layouts/PublicLayout";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/i18n/locale";

type AppointmentSuccessState = {
  appointmentDate?: string;
  appointmentTime?: string;
  firstName?: string;
  lastName?: string;
};

export function AppointmentSuccessPage() {
  const { locale } = useLocale();
  const location = useLocation();
  const state = (location.state as AppointmentSuccessState | null) ?? null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const copy =
    locale === "ar"
      ? {
          title: "تم إرسال طلبك بنجاح",
          description:
            "استلم المركز طلب موعدك. سيقوم الفريق بتأكيد الحجز والتواصل معك إذا لزم الأمر.",
          summaryTitle: "ملخص الطلب",
          donorLabel: "المتبرع",
          dateLabel: "التاريخ",
          timeLabel: "الوقت",
          donorFallback: "طلب موعد جديد",
          dateFallback: "سيتم تأكيد التاريخ من طرف المركز",
          timeFallback: "سيتم تأكيد التوقيت من طرف المركز",
          hintsTitle: "قبل حضورك",
          hints: [
            "أحضر بطاقة تعريف وتناول وجبة خفيفة قبل الموعد.",
            "اشرب الماء جيدا قبل الحضور إلى المركز.",
            "إذا تغيرت حالتك الصحية، اتصل بالمركز قبل التنقل.",
          ],
          backHome: "العودة إلى الرئيسية",
          newRequest: "إرسال طلب آخر",
        }
      : {
          title: "Votre demande a bien été envoyée",
          description:
            "Le centre a bien reçu votre demande de rendez-vous. L'équipe confirmera le créneau et vous recontactera si un ajustement est nécessaire.",
          summaryTitle: "Récapitulatif de la demande",
          donorLabel: "Donneur",
          dateLabel: "Date",
          timeLabel: "Heure",
          donorFallback: "Nouvelle demande",
          dateFallback: "La date sera confirmée par le centre",
          timeFallback: "L'horaire sera confirmé par le centre",
          hintsTitle: "Avant votre venue",
          hints: [
            "Munissez-vous d'une pièce d'identité et prenez une collation légère avant le rendez-vous.",
            "Hydratez-vous correctement avant de vous présenter au centre.",
            "En cas de changement de votre état de santé, contactez le centre avant de vous déplacer.",
          ],
          backHome: "Retour à l'accueil",
          newRequest: "Envoyer une autre demande",
        };

  const donorName =
    state?.firstName || state?.lastName
      ? `${state?.firstName ?? ""} ${state?.lastName ?? ""}`.trim()
      : copy.donorFallback;

  return (
    <PublicLayout>
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <PageContainer className="max-w-5xl">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <Card className="overflow-visible rounded-[2rem] border-none bg-white py-0 shadow-soft ring-1 ring-red-100/70">
              <CardHeader className="justify-items-center px-8 pb-0 pt-10 text-center sm:px-12">
                <div className="relative mb-6 flex size-28 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-red-100/70 motion-safe:animate-ping" />
                  <span className="absolute inset-3 rounded-full bg-red-50" />
                  <span className="relative flex size-20 items-center justify-center rounded-full bg-brand-red text-white shadow-soft">
                    <Check className="h-10 w-10" />
                  </span>
                </div>
                <h1 className="max-w-2xl text-4xl font-black text-slate-950 sm:text-5xl">
                  {copy.title}
                </h1>
                <CardDescription className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {copy.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-8 pb-8 pt-8 sm:px-12">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-red-100 bg-red-50/60 p-5">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white text-brand-red shadow-sm">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-slate-500">{copy.donorLabel}</p>
                    <p className="mt-2 text-lg font-bold text-slate-950">{donorName}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-red-100 bg-white p-5">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-50 text-brand-red shadow-sm">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-slate-500">{copy.dateLabel}</p>
                    <p className="mt-2 text-lg font-bold text-slate-950">
                      {state?.appointmentDate ?? copy.dateFallback}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-red-100 bg-white p-5">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-50 text-brand-red shadow-sm">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-slate-500">{copy.timeLabel}</p>
                    <p className="mt-2 text-lg font-bold text-slate-950">
                      {state?.appointmentTime ?? copy.timeFallback}
                    </p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="rounded-[1.75rem] bg-slate-50 px-6 py-6 text-left sm:px-8">
                  <h2 className="text-xl font-black text-slate-950">{copy.hintsTitle}</h2>
                  <div className="mt-4 flex flex-col gap-3">
                    {copy.hints.map((hint) => (
                      <div
                        key={hint}
                        className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200/70"
                      >
                        <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-brand-red">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <p className="text-sm leading-7 text-slate-600 sm:text-base">{hint}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 rounded-b-[2rem] border-t border-red-100 bg-red-50/40 px-8 py-6 sm:flex-row sm:justify-center sm:px-12">
                <Button asChild size="lg" className="w-full rounded-2xl px-6 sm:w-auto">
                  <Link to="/">
                    <House data-icon="inline-start" />
                    {copy.backHome}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-2xl px-6 sm:w-auto"
                >
                  <Link to="/appointment">
                    <RotateCcw data-icon="inline-start" />
                    {copy.newRequest}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </PageContainer>
      </section>
    </PublicLayout>
  );
}
