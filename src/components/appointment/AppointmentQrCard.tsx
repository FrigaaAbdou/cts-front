import { useEffect, useState } from "react";
import * as QRCode from "qrcode";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

type AppointmentQrCardProps = {
  confirmationCode: string;
  qrCodeDataUrl?: string | null;
  qrTargetUrl?: string | null;
  title: string;
  description: string;
  fallbackMessage: string;
};

export function AppointmentQrCard({
  confirmationCode,
  qrCodeDataUrl,
  qrTargetUrl,
  title,
  description,
  fallbackMessage,
}: AppointmentQrCardProps) {
  const [resolvedQrDataUrl, setResolvedQrDataUrl] = useState<string | null>(
    qrCodeDataUrl ?? null,
  );

  useEffect(() => {
    if (qrCodeDataUrl) {
      setResolvedQrDataUrl(qrCodeDataUrl);
      return;
    }

    if (!qrTargetUrl) {
      setResolvedQrDataUrl(null);
      return;
    }

    let cancelled = false;

    QRCode.toDataURL(qrTargetUrl, {
      margin: 1,
      errorCorrectionLevel: "M",
      width: 320,
    })
      .then((dataUrl) => {
        if (!cancelled) {
          setResolvedQrDataUrl(dataUrl);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setResolvedQrDataUrl(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [qrCodeDataUrl, qrTargetUrl]);

  return (
    <Card className="rounded-[1.75rem] border border-red-100 bg-white shadow-soft">
      <CardHeader className="px-6 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
          {title}
        </p>
        <CardDescription className="text-base leading-7 text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full max-w-sm items-center justify-center rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4">
            {resolvedQrDataUrl ? (
              <img
                src={resolvedQrDataUrl}
                alt={`QR code de confirmation ${confirmationCode}`}
                className="h-auto w-full max-w-[18rem] rounded-2xl bg-white p-3 shadow-sm"
              />
            ) : (
              <div className="flex min-h-[18rem] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-8 text-center">
                <p className="text-sm font-semibold text-slate-600">
                  Génération du QR code en cours.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {fallbackMessage}
                </p>
              </div>
            )}
          </div>

          <div className="w-full rounded-2xl bg-red-50 px-4 py-4 text-center">
            <p className="text-sm font-semibold text-slate-500">Code de confirmation</p>
            <p className="mt-1 text-lg font-black tracking-[0.2em] text-brand-red">
              {confirmationCode}
            </p>
          </div>

          <p className="text-sm leading-7 text-slate-600">{fallbackMessage}</p>
        </div>
      </CardContent>
    </Card>
  );
}
