import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, LoaderCircle } from "lucide-react";

import { AppointmentFormSection } from "@/components/appointment/AppointmentFormSection";
import { Button } from "@/components/ui/button";
import {
  EligibilityGate,
  type EligibilityGateValue,
} from "@/components/appointment/EligibilityGate";
import { getActiveCampaigns } from "@/lib/api/campaignApi";
import {
  getFallbackAppointmentMeta,
} from "@/features/appointment/constants/formOptions";
import {
  appointmentFormSchema,
  type AppointmentFormValues,
} from "@/features/appointment/schema/appointmentFormSchema";
import type { AppointmentFormMeta } from "@/features/appointment/types";
import {
  createAppointmentRequest,
  getAppointmentFormMeta,
  getAppointmentSlots,
} from "@/lib/api/appointmentApi";
import { useLocale } from "@/i18n/locale";
import type { ApiErrorPayload } from "@/lib/api/client";

function getFallbackCampaignOptions(locale: "fr" | "ar") {
  return [
    {
      value: "",
      label:
        locale === "ar"
          ? "بدون حملة محددة"
          : "Aucune campagne spécifique",
    },
  ];
}

function getCampaignOperationalLabel(
  status: "scheduled" | "ongoing" | "finished" | undefined,
  locale: "fr" | "ar",
) {
  if (!status) {
    return "";
  }

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

  return labels[status];
}

type FieldProps = {
  label: string;
  error?: string;
  hint?: string;
  fieldId?: string;
  children: React.ReactNode;
};

function Field({ label, error, hint, fieldId, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>
      {children}
      {hint ? <p className="mt-2 text-xs text-slate-500">{hint}</p> : null}
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

const inputClassName =
  "h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-red focus:bg-white";

const textareaClassName =
  "min-h-[144px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-red focus:bg-white";

function isAppointmentFormMeta(value: unknown): value is AppointmentFormMeta {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const candidate = value as Partial<AppointmentFormMeta>;

  return (
    Array.isArray(candidate.genders) &&
    Array.isArray(candidate.wilayas) &&
    Array.isArray(candidate.bloodGroups) &&
    Array.isArray(candidate.donationTypes) &&
    !!candidate.communesByWilaya &&
    typeof candidate.communesByWilaya === "object"
  );
}

type AppointmentFormProps = {
  initialCampaignCode?: string;
  onSuccess?: (payload: {
    appointmentDate: string;
    appointmentTime: string;
    firstName: string;
    lastName: string;
  }) => void;
};

export function AppointmentForm({ initialCampaignCode, onSuccess }: AppointmentFormProps) {
  const { locale } = useLocale();
  const localizedFallbackMeta = useMemo(
    () => getFallbackAppointmentMeta(locale),
    [locale],
  );
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [meta, setMeta] = useState<AppointmentFormMeta>(localizedFallbackMeta);
  const [campaignOptions, setCampaignOptions] = useState<
    Array<{ value: string; label: string }>
  >(() => [...getFallbackCampaignOptions(locale)]);
  const [slotOptions, setSlotOptions] = useState<
    Array<{ value: string; label: string; isAvailable: boolean }>
  >([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [gate, setGate] = useState<EligibilityGateValue>({
    ageConfirmed: false,
    weightConfirmed: false,
    healthyConfirmed: false,
    noContraIndicationConfirmed: false,
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "male",
      phone: "",
      email: "",
      wilayaCode: "",
      commune: "",
      campaignCode: "",
      appointmentDate: "",
      appointmentTime: "",
      bloodGroup: "",
      donationType: "",
      isExistingDonor: false,
      lastDonationDate: "",
      remarks: "",
    },
  });

  const isExistingDonor = form.watch("isExistingDonor");
  const selectedWilayaCode = form.watch("wilayaCode");
  const selectedAppointmentDate = form.watch("appointmentDate");
  const selectedCampaignCode = form.watch("campaignCode");
  const safeMeta = isAppointmentFormMeta(meta) ? meta : localizedFallbackMeta;
  const communeOptions = safeMeta.communesByWilaya[selectedWilayaCode] ?? [];
  const availableSlotOptions = slotOptions.filter((slot) => slot.isAvailable);
  const fieldIds = {
    lastName: "appointment-last-name",
    firstName: "appointment-first-name",
    birthDate: "appointment-birth-date",
    gender: "appointment-gender",
    phone: "appointment-phone",
    email: "appointment-email",
    wilayaCode: "appointment-wilaya",
    commune: "appointment-commune",
    campaignCode: "appointment-campaign",
    appointmentDate: "appointment-date",
    appointmentTime: "appointment-time",
    bloodGroup: "appointment-blood-group",
    donationType: "appointment-donation-type",
    lastDonationDate: "appointment-last-donation-date",
    remarks: "appointment-remarks",
  } as const;

  useEffect(() => {
    if (!isUnlocked || !initialCampaignCode) {
      return;
    }

    const campaignMatch = campaignOptions.some(
      (option) => option.value === initialCampaignCode,
    );

    if (campaignMatch && form.getValues("campaignCode") !== initialCampaignCode) {
      form.setValue("campaignCode", initialCampaignCode, {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: true,
      });
    }
  }, [campaignOptions, form, initialCampaignCode, isUnlocked]);

  const copy =
    locale === "ar"
      ? {
          sections: {
            personal: "المعلومات الشخصية",
            appointment: "الموعد",
            donationType: "نوع التبرع",
            existingDonor: "هل سبق لك التبرع؟",
            remarks: "ملاحظات أو احتياجات خاصة",
          },
          fields: {
            lastName: "اللقب",
            firstName: "الاسم",
            birthDate: "تاريخ الميلاد",
            gender: "الجنس",
            phone: "الهاتف",
            email: "البريد الإلكتروني",
            wilaya: "الولاية",
            commune: "البلدية",
            campaign: "الحملة",
            appointmentDate: "تاريخ الموعد",
            appointmentTime: "وقت الموعد",
            bloodGroup: "فصيلة الدم",
            donationType: "نوع التبرع",
            existingDonor: "هل سبق لك التبرع بالدم؟",
            lastDonationDate: "تاريخ آخر تبرع",
            remarks: "ملاحظات",
          },
          placeholders: {
            lastName: "لقبك",
            firstName: "اسمك",
            email: "name@example.com",
            wilaya: "اختر ولاية",
            commune: "اختر بلدية",
            bloodGroup: "اختر فصيلة",
            donationType: "اختر نوع التبرع",
            remarks: "رسالتك",
          },
          hints: {
            campaign: "اختياري إذا كنت تأتي في إطار حملة محددة.",
            dateFirst: "اختر تاريخا أولا.",
            loadingSlots: "جار تحميل المواعيد...",
            noSlotsForDate: "لا توجد مواعيد متاحة في هذا التاريخ.",
            selectWilayaFirst: "اختر ولاية أولا",
            selectCommune: "اختر بلدية",
            selectSlot: "اختر موعدا",
            slotsUnavailable: "المواعيد غير متاحة",
            selectBloodGroup: "اختر فصيلة دم",
            selectDonationType: "اختر نوع التبرع",
            remarks:
              "اختياري للإشارة إلى قيد خاص أو معلومة مفيدة.",
            backendReady:
              "الاستمارة جاهزة للربط مع الواجهة الخلفية وتدير بالفعل رسائل أخطاء الـ API.",
          },
          options: {
            yes: "نعم",
            no: "لا",
          },
          actions: {
            submitting: "جار الإرسال...",
            submit: "إرسال طلبي",
          },
          success:
            "تم إرسال طلبك. سنتواصل معك لتأكيد الموعد.",
          validationError: "بعض الحقول غير صالحة. يرجى التحقق من الاستمارة.",
          conflictError: "هذا الموعد لم يعد متاحا. يرجى اختيار موعد آخر.",
          serverError: "واجه الخادم خطأ. يرجى إعادة المحاولة لاحقا.",
          networkError:
            "تعذر إرسال الطلب حاليا. قد لا تكون الواجهة الخلفية متاحة بعد.",
          slotLoadError: "تعذر تحميل المواعيد.",
        }
      : {
          sections: {
            personal: "Informations personnelles",
            appointment: "Rendez-vous",
            donationType: "Type de don",
            existingDonor: "Déjà donneur",
            remarks: "Remarques ou besoins particuliers",
          },
          fields: {
            lastName: "Nom",
            firstName: "Prénom",
            birthDate: "Date de naissance",
            gender: "Sexe",
            phone: "Téléphone",
            email: "E-mail",
            wilaya: "Wilaya",
            commune: "Commune",
            campaign: "Campagne",
            appointmentDate: "Date de rendez-vous",
            appointmentTime: "Heure de rendez-vous",
            bloodGroup: "Groupe sanguin",
            donationType: "Type de don",
            existingDonor: "Avez-vous déjà donné votre sang ?",
            lastDonationDate: "Date du dernier don",
            remarks: "Remarques",
          },
          placeholders: {
            lastName: "Votre nom",
            firstName: "Votre prénom",
            email: "nom@exemple.com",
            wilaya: "Sélectionner une wilaya",
            commune: "Sélectionner une commune",
            bloodGroup: "Sélectionner un groupe",
            donationType: "Sélectionner un type de don",
            remarks: "Votre message",
          },
          hints: {
            campaign: "Optionnel, si vous venez dans le cadre d'une campagne ciblée.",
            dateFirst: "Choisissez d'abord une date.",
            loadingSlots: "Chargement des créneaux...",
            noSlotsForDate: "Aucun créneau disponible pour cette date.",
            selectWilayaFirst: "Choisissez d'abord une wilaya",
            selectCommune: "Sélectionner une commune",
            selectSlot: "Sélectionner un créneau",
            slotsUnavailable: "Créneaux indisponibles",
            selectBloodGroup: "Sélectionner un groupe",
            selectDonationType: "Sélectionner un type de don",
            remarks:
              "Optionnel, pour signaler une contrainte particulière ou une information utile.",
            backendReady:
              "Le formulaire est prêt pour le branchement backend et gère déjà les retours d'erreur API.",
          },
          options: {
            yes: "Oui",
            no: "Non",
          },
          actions: {
            submitting: "Envoi en cours...",
            submit: "Envoyer ma demande",
          },
          success:
            "Votre demande a été envoyée. Nous vous recontacterons pour confirmation.",
          validationError:
            "Certains champs sont invalides. Vérifiez le formulaire.",
          conflictError:
            "Ce créneau n'est plus disponible. Merci d'en choisir un autre.",
          serverError:
            "Le serveur a rencontré une erreur. Merci de réessayer un peu plus tard.",
          networkError:
            "Impossible d'envoyer la demande pour le moment. L'API n'est peut-être pas encore disponible.",
          slotLoadError: "Impossible de charger les créneaux.",
          invalidFieldsTitle: "Champs à corriger",
        };

  const fieldLabels: Partial<Record<keyof AppointmentFormValues, string>> = {
    lastName: copy.fields.lastName,
    firstName: copy.fields.firstName,
    birthDate: copy.fields.birthDate,
    gender: copy.fields.gender,
    phone: copy.fields.phone,
    email: copy.fields.email,
    wilayaCode: copy.fields.wilaya,
    commune: copy.fields.commune,
    campaignCode: copy.fields.campaign,
    appointmentDate: copy.fields.appointmentDate,
    appointmentTime: copy.fields.appointmentTime,
    bloodGroup: copy.fields.bloodGroup,
    donationType: copy.fields.donationType,
    isExistingDonor: copy.fields.existingDonor,
    lastDonationDate: copy.fields.lastDonationDate,
    remarks: copy.fields.remarks,
  };

  const invalidFieldNames = useMemo(
    () =>
      Object.keys(form.formState.errors).filter((field): field is keyof AppointmentFormValues =>
        field in fieldLabels,
      ),
    [fieldLabels, form.formState.errors],
  );

  function scrollToField(field: keyof AppointmentFormValues) {
    const fieldId = fieldIds[field as keyof typeof fieldIds];
    const element =
      (fieldId ? document.getElementById(fieldId) : null) ??
      document.querySelector<HTMLElement>(`[name="${field}"]`);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "center" });

    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement
    ) {
      element.focus();
    }
  }

  function revealInvalidFields(fields: Array<keyof AppointmentFormValues>) {
    if (fields.length === 0) {
      return;
    }

    const [firstField] = fields;

    requestAnimationFrame(() => {
      scrollToField(firstField);
    });
  }

  useEffect(() => {
    setMeta(localizedFallbackMeta);
    setCampaignOptions([...getFallbackCampaignOptions(locale)]);
  }, [locale, localizedFallbackMeta]);

  useEffect(() => {
    if (!isUnlocked) {
      return;
    }

    let isCancelled = false;

    void (async () => {
      try {
        const payload = await getAppointmentFormMeta(locale);

        if (!isCancelled) {
          setMeta(
            isAppointmentFormMeta(payload.data)
              ? payload.data
              : localizedFallbackMeta,
          );
        }
      } catch {
        if (!isCancelled) {
          setMeta(localizedFallbackMeta);
        }
      }

      try {
        const campaigns = await getActiveCampaigns(locale);

        if (!isCancelled) {
          setCampaignOptions([
            ...getFallbackCampaignOptions(locale),
            ...campaigns.map((campaign) => ({
              value: campaign.code,
              label: campaign.operationalStatus
                ? `${campaign.title} · ${getCampaignOperationalLabel(
                    campaign.operationalStatus,
                    locale,
                  )}`
                : campaign.title,
            })),
          ]);
        }
      } catch {
        if (!isCancelled) {
          setCampaignOptions([...getFallbackCampaignOptions(locale)]);
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [isUnlocked, locale, localizedFallbackMeta]);

  useEffect(() => {
    if (!isUnlocked || !selectedAppointmentDate) {
      setSlotOptions([]);
      setSlotsError(null);
      setSlotsLoading(false);
      form.setValue("appointmentTime", "");
      return;
    }

    let isCancelled = false;

    form.setValue("appointmentTime", "");
    setSlotsLoading(true);
    setSlotsError(null);

    void getAppointmentSlots(
      selectedAppointmentDate,
      selectedCampaignCode || undefined,
    )
      .then((payload) => {
        if (isCancelled) {
          return;
        }

        setSlotOptions(payload.data.slots);
      })
      .catch(() => {
        if (isCancelled) {
          return;
        }

        setSlotOptions([]);
        setSlotsError(copy.slotLoadError);
      })
      .finally(() => {
        if (isCancelled) {
          return;
        }

        setSlotsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [form, isUnlocked, selectedAppointmentDate, selectedCampaignCode]);

  useEffect(() => {
    const subscription = form.watch((_values, info) => {
      if (info.type === "change") {
        setSubmitSuccess(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [form]);

  const onSubmit = form.handleSubmit(
    async (values) => {
      setSubmitError(null);
      setSubmitSuccess(null);
      form.clearErrors();

      try {
        await createAppointmentRequest({
          ...values,
          lastDonationDate:
            values.isExistingDonor && values.lastDonationDate
              ? values.lastDonationDate
              : undefined,
          locale,
          eligibilityChecklist: gate,
          wilayaLabel:
            safeMeta.wilayas.find((option) => option.code === values.wilayaCode)?.label ??
            values.wilayaCode,
        });

      setSubmitSuccess(copy.success);
      onSuccess?.({
        appointmentDate: values.appointmentDate,
        appointmentTime: values.appointmentTime,
        firstName: values.firstName,
        lastName: values.lastName,
      });
      } catch (error) {
        const payload = error as Partial<ApiErrorPayload>;
        const fieldErrors =
          payload.fieldErrors ??
          payload.errors ??
          (payload.details &&
          typeof payload.details === "object" &&
          !Array.isArray(payload.details)
            ? (payload.details as Record<string, string | string[]>)
            : undefined);

        if (payload.status === 422 && fieldErrors) {
          const invalidFields: Array<keyof AppointmentFormValues> = [];

          for (const [field, message] of Object.entries(fieldErrors)) {
            const normalizedMessage = Array.isArray(message) ? message[0] : message;

            if (typeof normalizedMessage !== "string") {
              continue;
            }

            if (field in form.getValues()) {
              const typedField = field as keyof AppointmentFormValues;

              form.setError(typedField, {
                message: normalizedMessage,
              });
              invalidFields.push(typedField);
            }
          }

          setSubmitError(copy.validationError);
          revealInvalidFields(invalidFields);
          return;
        }

        if (payload.status === 409) {
          const appointmentTimeMessage = fieldErrors?.appointmentTime;
          const normalizedMessage = Array.isArray(appointmentTimeMessage)
            ? appointmentTimeMessage[0]
            : appointmentTimeMessage;

          if (typeof normalizedMessage === "string") {
            form.setError("appointmentTime", {
              message: normalizedMessage,
            });
            revealInvalidFields(["appointmentTime"]);
          }

          setSubmitError(copy.conflictError);
          return;
        }

        if (payload.status === 500) {
          setSubmitError(copy.serverError);
          return;
        }

        setSubmitError(payload.message ?? copy.networkError);
      }
    },
    (errors) => {
      setSubmitSuccess(null);
      setSubmitError(copy.validationError);
      revealInvalidFields(
        Object.keys(errors) as Array<keyof AppointmentFormValues>,
      );
    },
  );

  if (!isUnlocked) {
    return (
      <EligibilityGate
        value={gate}
        onChange={setGate}
        onContinue={() => {
          setIsUnlocked(true);
        }}
      />
    );
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit} noValidate>
      <AppointmentFormSection step={1} title={copy.sections.personal}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={copy.fields.lastName}
            error={form.formState.errors.lastName?.message}
            fieldId={fieldIds.lastName}
          >
            <input
              {...form.register("lastName")}
              id={fieldIds.lastName}
              className={inputClassName}
              placeholder={copy.placeholders.lastName}
            />
          </Field>

          <Field
            label={copy.fields.firstName}
            error={form.formState.errors.firstName?.message}
            fieldId={fieldIds.firstName}
          >
            <input
              {...form.register("firstName")}
              id={fieldIds.firstName}
              className={inputClassName}
              placeholder={copy.placeholders.firstName}
            />
          </Field>

          <Field
            label={copy.fields.birthDate}
            error={form.formState.errors.birthDate?.message}
            fieldId={fieldIds.birthDate}
          >
            <input
              {...form.register("birthDate")}
              id={fieldIds.birthDate}
              type="date"
              className={inputClassName}
            />
          </Field>

          <Field
            label={copy.fields.gender}
            error={form.formState.errors.gender?.message}
            fieldId={fieldIds.gender}
          >
            <select
              {...form.register("gender")}
              id={fieldIds.gender}
              className={inputClassName}
            >
              {safeMeta.genders.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label={copy.fields.phone}
            error={form.formState.errors.phone?.message}
            fieldId={fieldIds.phone}
          >
            <input
              {...form.register("phone")}
              id={fieldIds.phone}
              type="tel"
              className={inputClassName}
              placeholder="+213 ..."
            />
          </Field>

          <Field
            label={copy.fields.email}
            error={form.formState.errors.email?.message}
            fieldId={fieldIds.email}
          >
            <input
              {...form.register("email")}
              id={fieldIds.email}
              type="email"
              className={inputClassName}
              placeholder={copy.placeholders.email}
            />
          </Field>

          <Field
            label={copy.fields.wilaya}
            error={form.formState.errors.wilayaCode?.message}
            fieldId={fieldIds.wilayaCode}
          >
            <select
              {...form.register("wilayaCode")}
              id={fieldIds.wilayaCode}
              className={inputClassName}
            >
              <option value="">{copy.placeholders.wilaya}</option>
              {safeMeta.wilayas.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label={copy.fields.commune}
            error={form.formState.errors.commune?.message}
            fieldId={fieldIds.commune}
          >
            <select
              {...form.register("commune")}
              id={fieldIds.commune}
              className={inputClassName}
              disabled={communeOptions.length === 0}
            >
              <option value="">
                {communeOptions.length === 0
                  ? copy.hints.selectWilayaFirst
                  : copy.hints.selectCommune}
              </option>
              {communeOptions.map((commune) => (
                <option key={commune} value={commune}>
                  {commune}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </AppointmentFormSection>

      <AppointmentFormSection step={2} title={copy.sections.appointment}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={copy.fields.campaign}
            hint={copy.hints.campaign}
            fieldId={fieldIds.campaignCode}
          >
            <select
              {...form.register("campaignCode")}
              id={fieldIds.campaignCode}
              className={inputClassName}
            >
              {campaignOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          <div className="hidden sm:block" />

          <Field
            label={copy.fields.appointmentDate}
            error={form.formState.errors.appointmentDate?.message}
            fieldId={fieldIds.appointmentDate}
          >
            <input
              {...form.register("appointmentDate")}
              id={fieldIds.appointmentDate}
              type="date"
              className={inputClassName}
            />
          </Field>

          <Field
            label={copy.fields.appointmentTime}
            error={form.formState.errors.appointmentTime?.message}
            fieldId={fieldIds.appointmentTime}
            hint={
              !selectedAppointmentDate
                ? copy.hints.dateFirst
                : slotsLoading
                  ? copy.hints.loadingSlots
                  : slotsError
                    ? slotsError
                    : availableSlotOptions.length === 0
                      ? copy.hints.noSlotsForDate
                      : undefined
            }
          >
            <select
              {...form.register("appointmentTime")}
              id={fieldIds.appointmentTime}
              className={inputClassName}
              disabled={
                !selectedAppointmentDate ||
                slotsLoading ||
                !!slotsError ||
                availableSlotOptions.length === 0
              }
            >
              <option value="">
                {!selectedAppointmentDate
                  ? copy.hints.dateFirst
                  : slotsLoading
                    ? copy.hints.loadingSlots
                    : slotsError
                      ? copy.hints.slotsUnavailable
                      : availableSlotOptions.length === 0
                        ? copy.hints.noSlotsForDate
                        : copy.hints.selectSlot}
              </option>
              {availableSlotOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </AppointmentFormSection>

      <AppointmentFormSection step={3} title={copy.sections.donationType}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={copy.fields.bloodGroup}
            error={form.formState.errors.bloodGroup?.message}
            fieldId={fieldIds.bloodGroup}
          >
            <select
              {...form.register("bloodGroup")}
              id={fieldIds.bloodGroup}
              className={inputClassName}
            >
              <option value="">{copy.placeholders.bloodGroup}</option>
              {safeMeta.bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label={copy.fields.donationType}
            error={form.formState.errors.donationType?.message}
            fieldId={fieldIds.donationType}
          >
            <select
              {...form.register("donationType")}
              id={fieldIds.donationType}
              className={inputClassName}
            >
              <option value="">{copy.placeholders.donationType}</option>
              {safeMeta.donationTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </AppointmentFormSection>

      <AppointmentFormSection step={4} title={copy.sections.existingDonor}>
        <div className="grid gap-6">
          <Field
            label={copy.fields.existingDonor}
            error={form.formState.errors.isExistingDonor?.message}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <input
                  type="radio"
                  checked={form.watch("isExistingDonor") === true}
                  onChange={() =>
                    form.setValue("isExistingDonor", true, {
                      shouldDirty: true,
                      shouldValidate: true,
                    })
                  }
                  className="h-4 w-4 text-brand-red focus:ring-brand-red"
                />
                <span className="font-medium text-slate-700">{copy.options.yes}</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <input
                  type="radio"
                  checked={form.watch("isExistingDonor") === false}
                  onChange={() => {
                    form.setValue("isExistingDonor", false, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                    form.setValue("lastDonationDate", "", {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                    form.clearErrors("lastDonationDate");
                  }}
                  className="h-4 w-4 text-brand-red focus:ring-brand-red"
                />
                <span className="font-medium text-slate-700">{copy.options.no}</span>
              </label>
            </div>
          </Field>

          {isExistingDonor ? (
            <Field
              label={copy.fields.lastDonationDate}
              error={form.formState.errors.lastDonationDate?.message}
              fieldId={fieldIds.lastDonationDate}
            >
              <input
                {...form.register("lastDonationDate")}
                id={fieldIds.lastDonationDate}
                type="date"
                className={inputClassName}
              />
            </Field>
          ) : null}
        </div>
      </AppointmentFormSection>

      <AppointmentFormSection
        step={5}
        title={copy.sections.remarks}
      >
        <Field
          label={copy.fields.remarks}
          hint={copy.hints.remarks}
          error={form.formState.errors.remarks?.message}
          fieldId={fieldIds.remarks}
        >
          <textarea
            {...form.register("remarks")}
            id={fieldIds.remarks}
            className={textareaClassName}
            placeholder={copy.placeholders.remarks}
          />
        </Field>
      </AppointmentFormSection>

      <div className="rounded-[1.75rem] bg-white px-8 py-8 text-center shadow-soft">
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="min-w-[15rem] rounded-2xl px-8 shadow-soft"
        >
          {form.formState.isSubmitting ? (
            <>
              <LoaderCircle data-icon="inline-start" className="animate-spin" />
              {copy.actions.submitting}
            </>
          ) : (
            <>
              {copy.actions.submit}
              <ArrowRight data-icon="inline-end" />
            </>
          )}
        </Button>

        {submitSuccess ? (
          <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 px-5 py-4 text-left text-sm leading-7 text-green-800">
            {submitSuccess}
          </div>
        ) : null}

        {submitError ? (
          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-left text-sm leading-7 text-red-700">
            {submitError}
            {invalidFieldNames.length > 0 ? (
              <div className="mt-3 border-t border-red-100 pt-3">
                <p className="text-sm font-semibold text-red-700">
                  {copy.invalidFieldsTitle}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {invalidFieldNames.map((field) => (
                    <button
                      key={field}
                      type="button"
                      onClick={() => scrollToField(field)}
                      className="rounded-full border border-red-200 bg-white px-3 py-1 text-sm font-medium text-red-700 transition hover:border-red-300 hover:bg-red-100"
                    >
                      {fieldLabels[field]}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </form>
  );
}
