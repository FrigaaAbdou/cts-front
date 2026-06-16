import {
  CalendarDays,
  Check,
  Clock3,
  Droplets,
  House,
  RotateCcw,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { PublicLayout } from "@/app/layouts/PublicLayout";
import { AppointmentConfirmationChecklist } from "@/components/appointment/AppointmentConfirmationChecklist";
import { AppointmentQrCard } from "@/components/appointment/AppointmentQrCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { loadAppointmentConfirmationSnapshot } from "@/lib/appointment/confirmationStorage";
import { getAppointmentConfirmation } from "@/lib/api/appointmentApi";
import { useLocale } from "@/i18n/locale";
import type {
  AppointmentConfirmationDetail,
  AppointmentSuccessRouteState,
} from "@/features/appointment/confirmation.types";
import {
  resolveAppointmentSuccessViewModel,
} from "@/pages/appointment/AppointmentSuccessPage.data";

export function AppointmentSuccessPage() {
  const { locale } = useLocale();
  const location = useLocation();
  const routeState = (location.state as AppointmentSuccessRouteState | null) ?? null;
  const [storedSnapshot] = useState(() => loadAppointmentConfirmationSnapshot());
  const [remoteConfirmation, setRemoteConfirmation] =
    useState<AppointmentConfirmationDetail | null>(null);
  const [isConfirmationLoading, setIsConfirmationLoading] = useState(false);
  const [confirmationError, setConfirmationError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const copy =
    locale === "ar"
      ? {
          title: "تم تسجيل طلب الموعد بنجاح",
          description:
            "استلم المركز طلبك، وسيبقى رمز QR متاحا لك على هذه الصفحة وفي البريد الإلكتروني لتقديمه عند الوصول.",
          summaryTitle: "ملخص التأكيد",
          qrTitle: "رمز الدخول",
          qrDescription:
            "أظهر هذا الرمز لفريق CTS عند الوصول حتى يتم العثور على طلبك بسرعة.",
          checklistTitle: "ما الذي عليك فعله قبل الحضور",
          checklistDescription:
            "هذه الصفحة هي بمثابة إيصال تأكيد. التقييم الطبي النهائي يبقى على الموقع.",
          donorLabel: "المتبرع",
          dateLabel: "التاريخ",
          timeLabel: "الوقت",
          codeLabel: "رمز التأكيد",
          donorFallback: "طلب موعد جديد",
          dateFallback: "سيؤكد المركز التاريخ لاحقا",
          timeFallback: "سيؤكد المركز التوقيت لاحقا",
          loadError:
            "تعذر تحديث تفاصيل التأكيد من الخادم. بقي رمز QR متاحا على هذه الصفحة ويمكن استخدامه عند الوصول.",
          missingTokenTitle: "تعذر العثور على التأكيد",
          missingTokenDescription:
            "لم نتمكن من استرجاع رمز الحجز. ارجع إلى صفحة الطلب أو افتح رسالة التأكيد من جديد.",
          backHome: "العودة إلى الرئيسية",
          newRequest: "إرسال طلب آخر",
          checklistItems: [
            "أحضر بطاقة تعريف سارية.",
            "اشرب الماء وتناول وجبة خفيفة قبل الحضور.",
            "إذا تغيرت حالتك الصحية، تواصل مع المركز قبل التنقل.",
            "أظهر رمز QR أو رمز التأكيد عند الاستقبال.",
          ],
          checklistNote:
            "سيتم تأكيد أهلية التبرع النهائية من طرف الفريق الطبي في الموقع.",
          supportNote:
            "إذا لم يصلك البريد الإلكتروني، احتفظ بهذه الصفحة مفتوحة أو أظهر رمز التأكيد المكتوب على الشاشة.",
        }
      : {
          title: "Votre demande de rendez-vous a bien été enregistrée",
          description:
            "Le centre a bien reçu votre demande. Le QR code reste disponible sur cette page et dans l'email pour faciliter votre accueil sur site.",
          summaryTitle: "Récapitulatif de confirmation",
          qrTitle: "Pass d'arrivée",
          qrDescription:
            "Présentez ce QR code à l'équipe du CTS à votre arrivée pour retrouver votre dossier rapidement.",
          checklistTitle: "Avant votre venue",
          checklistDescription:
            "Cette page sert de reçu de confirmation. La validation médicale finale reste faite sur place.",
          donorLabel: "Donneur",
          dateLabel: "Date",
          timeLabel: "Heure",
          codeLabel: "Code de confirmation",
          donorFallback: "Nouvelle demande",
          dateFallback: "La date sera confirmée par le centre",
          timeFallback: "L'horaire sera confirmé par le centre",
          loadError:
            "Impossible de recharger les détails de confirmation depuis le serveur. Le QR code reste disponible sur cette page et peut être présenté à l'accueil.",
          missingTokenTitle: "Confirmation introuvable",
          missingTokenDescription:
            "Nous n'avons pas retrouvé le jeton de confirmation. Revenez à la page de demande ou rouvrez l'email de confirmation.",
          backHome: "Retour à l'accueil",
          newRequest: "Envoyer une autre demande",
          checklistItems: [
            "Apportez une pièce d'identité valide.",
            "Hydratez-vous correctement et prenez une collation légère avant le rendez-vous.",
            "En cas de changement d'état de santé, contactez le centre avant de vous déplacer.",
            "Présentez le QR code ou le code de confirmation à l'accueil.",
          ],
          checklistNote:
            "L'aptitude finale au don sera confirmée par l'équipe médicale sur place.",
          supportNote:
            "Si l'email n'arrive pas, gardez cette page ouverte ou présentez le code de confirmation affiché à l'écran.",
        };

  const viewModel = resolveAppointmentSuccessViewModel({
    routeState,
    storedSnapshot,
    remoteConfirmation,
  });

  useEffect(() => {
    if (!viewModel.confirmationToken) {
      setIsConfirmationLoading(false);
      return;
    }

    let cancelled = false;

    setIsConfirmationLoading(true);
    setConfirmationError(null);

    getAppointmentConfirmation(viewModel.confirmationToken)
      .then((payload) => {
        if (cancelled) {
          return;
        }

        setRemoteConfirmation(payload.data);
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        setConfirmationError(copy.loadError);
      })
      .finally(() => {
        if (!cancelled) {
          setIsConfirmationLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [copy.loadError, viewModel.confirmationToken]);

  if (!viewModel.confirmationToken) {
    return (
      <PublicLayout>
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <PageContainer className="max-w-4xl">
            <Card className="rounded-[2rem] border-none bg-white shadow-soft ring-1 ring-red-100/70">
              <CardHeader className="px-8 pb-0 pt-10 text-center sm:px-12">
                <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <TriangleAlert className="h-10 w-10" />
                </div>
                <h1 className="text-4xl font-black text-slate-950 sm:text-5xl">
                  {copy.missingTokenTitle}
                </h1>
                <CardDescription className="text-base leading-8 text-slate-600 sm:text-lg">
                  {copy.missingTokenDescription}
                </CardDescription>
              </CardHeader>
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
          </PageContainer>
        </section>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <PageContainer className="max-w-6xl">
          <div className="mx-auto flex max-w-4xl flex-col gap-8">
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
                {confirmationError ? (
                  <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-7 text-amber-900">
                    {confirmationError}
                  </div>
                ) : null}

                {isConfirmationLoading ? (
                  <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
                    Chargement de la confirmation...
                  </div>
                ) : null}

                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                  <Card className="rounded-[1.75rem] border border-red-100 bg-red-50/40 shadow-soft">
                    <CardHeader className="px-6 pt-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
                        {copy.summaryTitle}
                      </p>
                      <CardDescription className="text-base leading-7 text-slate-600">
                        {copy.supportNote}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-red-100 bg-white p-5">
                          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-50 text-brand-red shadow-sm">
                            <Droplets className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-slate-500">
                            {copy.donorLabel}
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            {viewModel.donorName}
                          </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-red-100 bg-white p-5">
                          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-50 text-brand-red shadow-sm">
                            <CalendarDays className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-slate-500">
                            {copy.dateLabel}
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            {viewModel.appointmentDate || copy.dateFallback}
                          </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-red-100 bg-white p-5">
                          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-50 text-brand-red shadow-sm">
                            <Clock3 className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-slate-500">
                            {copy.timeLabel}
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            {viewModel.appointmentTime || copy.timeFallback}
                          </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-red-100 bg-white p-5">
                          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-50 text-brand-red shadow-sm">
                            <Check className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-slate-500">
                            {copy.codeLabel}
                          </p>
                          <p className="mt-2 text-lg font-black tracking-[0.18em] text-brand-red">
                            {viewModel.confirmationCode}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <AppointmentQrCard
                    confirmationCode={viewModel.confirmationCode}
                    qrCodeDataUrl={remoteConfirmation?.qrCodeDataUrl ?? viewModel.qrCodeDataUrl}
                    qrTargetUrl={viewModel.qrTargetUrl}
                    title={copy.qrTitle}
                    description={copy.qrDescription}
                    fallbackMessage={copy.supportNote}
                  />
                </div>

                <Separator className="my-8" />

                <AppointmentConfirmationChecklist
                  title={copy.checklistTitle}
                  description={copy.checklistDescription}
                  items={[...copy.checklistItems, copy.checklistNote]}
                />
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
