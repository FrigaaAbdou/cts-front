import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ConversionFunnelCard({
  title,
  description,
  received,
  confirmed,
  completed,
}: {
  title: string;
  description: string;
  received: number;
  confirmed: number;
  completed: number;
}) {
  return (
    <Card className="border-slate-200/80 bg-white shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-3">
        {[
          { label: "Reçues", value: received, tone: "bg-slate-50" },
          { label: "Confirmées", value: confirmed, tone: "bg-emerald-50" },
          { label: "Finalisées", value: completed, tone: "bg-sky-50" },
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-3xl border border-slate-200 p-4 ${item.tone}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {item.label}
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {item.value}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
