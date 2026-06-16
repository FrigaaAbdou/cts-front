import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AlertTriangle, ArrowRight, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdminAuth, isUnauthorizedAdminError } from "@/features/admin-auth/AdminAuthProvider";
import { resolveAdminAppointmentScan } from "@/lib/api/adminAppointmentsApi";
import type { ApiErrorPayload } from "@/lib/api/client";

const copy = {
  loadingTitle: "Résolution du scan en cours",
  loadingDescription:
    "Connexion au dossier du rendez-vous et redirection vers la fiche admin.",
  errorTitle: "Impossible de résoudre ce QR code.",
  invalidTokenTitle: "QR code introuvable",
  invalidTokenDescription:
    "Le jeton de confirmation est invalide ou n'existe plus.",
  retry: "Réessayer",
  backToList: "Retour à la liste",
  unauthorizedTitle: "Session admin expirée",
  unauthorizedDescription:
    "Reconnectez-vous pour reprendre la résolution du QR code.",
} as const;

function isNotFoundError(error: unknown) {
  const apiError = error as ApiErrorPayload | undefined;

  return apiError?.status === 404 || apiError?.code === "NOT_FOUND";
}

export function AdminAppointmentScanResolverPage() {
  const { token: adminToken, status, logout } = useAdminAuth();
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!adminToken || !token) {
      setIsLoading(false);
      setErrorMessage(copy.invalidTokenTitle);
      return;
    }

    let cancelled = false;

    setIsLoading(true);
    setErrorMessage(null);
    setIsUnauthorized(false);

    resolveAdminAppointmentScan(adminToken, token)
      .then((payload) => {
        if (cancelled) {
          return;
        }

        navigate(payload.redirectTo, { replace: true });
      })
      .catch(async (error) => {
        if (cancelled) {
          return;
        }

        if (isUnauthorizedAdminError(error)) {
          setIsUnauthorized(true);
          await logout();
          navigate("/admin/login", {
            replace: true,
            state: {
              from: {
                pathname: `/admin/appointments/scan/${token}`,
              },
            },
          });
          return;
        }

        setErrorMessage(isNotFoundError(error) ? copy.invalidTokenTitle : copy.errorTitle);
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [adminToken, logout, navigate, status, token]);

  if (isLoading && !errorMessage && !isUnauthorized) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <Card className="w-full max-w-lg rounded-[2rem] border border-slate-200 bg-white shadow-soft">
          <CardContent className="flex flex-col items-center gap-4 px-6 py-10 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-red text-white">
              <LoaderCircle className="size-6 animate-spin" />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-950">{copy.loadingTitle}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {copy.loadingDescription}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-lg rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <CardContent className="flex flex-col gap-5 px-6 py-10">
          <div className="flex items-start gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <AlertTriangle className="size-6" />
            </div>
            <div className="min-w-0">
              <p className="text-lg font-semibold text-slate-950">
                {isUnauthorized ? copy.unauthorizedTitle : errorMessage ?? copy.errorTitle}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {isUnauthorized ? copy.unauthorizedDescription : copy.invalidTokenDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              className="rounded-2xl"
              onClick={() => {
                if (!token || !adminToken) {
                  navigate("/admin/appointments", { replace: true });
                  return;
                }

                setErrorMessage(null);
                setIsLoading(true);
                void resolveAdminAppointmentScan(adminToken, token)
                  .then((payload) => navigate(payload.redirectTo, { replace: true }))
                  .catch(async (error) => {
                    if (isUnauthorizedAdminError(error)) {
                      await logout();
                      navigate("/admin/login", {
                        replace: true,
                        state: {
                          from: {
                            pathname: `/admin/appointments/scan/${token}`,
                          },
                        },
                      });
                      return;
                    }

                    setErrorMessage(
                      isNotFoundError(error) ? copy.invalidTokenTitle : copy.errorTitle,
                    );
                  })
                  .finally(() => setIsLoading(false));
              }}
            >
              <ArrowRight className="size-4" />
              {copy.retry}
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <Link to="/admin/appointments">{copy.backToList}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
