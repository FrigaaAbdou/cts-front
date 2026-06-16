import { Check } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

type AppointmentConfirmationChecklistProps = {
  title: string;
  description: string;
  items: string[];
};

export function AppointmentConfirmationChecklist({
  title,
  description,
  items,
}: AppointmentConfirmationChecklistProps) {
  return (
    <Card className="rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-soft">
      <CardHeader className="px-6 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
          {title}
        </p>
        <CardDescription className="text-base leading-7 text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="grid gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white bg-white px-4 py-4 shadow-sm"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-brand-red">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
