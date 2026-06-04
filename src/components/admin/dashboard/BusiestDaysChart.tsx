import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BusiestDaysChart({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Array<{ date: string; count: number }>;
}) {
  const max = Math.max(...items.map((item) => item.count), 1);

  return (
    <Card className="border-slate-200/80 bg-white shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
            Aucun jour chargé à afficher sur la période.
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.date} className="grid grid-cols-[84px_1fr_auto] items-center gap-3">
                <span className="text-sm font-medium text-slate-600">{item.date.slice(5)}</span>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{
                      width: `${Math.max((item.count / max) * 100, item.count > 0 ? 12 : 0)}%`,
                    }}
                    aria-label={`${item.date}: ${item.count}`}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-950">{item.count}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
