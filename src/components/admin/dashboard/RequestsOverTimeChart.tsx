import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Dot,
  XAxis,
  YAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

function formatDayLabel(date: string) {
  return date.slice(5);
}

export function RequestsOverTimeChart({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Array<{ date: string; count: number }>;
}) {
  const values = items.map((item) => item.count);
  const total = values.reduce((sum, value) => sum + value, 0);
  const peak = Math.max(...values, 0);
  const average = values.length === 0 ? 0 : Math.round((total / values.length) * 10) / 10;
  const activeDays = values.filter((value) => value > 0).length;
  const lastObserved = items[items.length - 1];

  const chartData = React.useMemo(
    () =>
      items.map((item) => ({
        date: item.date,
        shortDate: formatDayLabel(item.date),
        requests: item.count,
        fill:
          item.date === lastObserved?.date ? "hsl(var(--chart-1))" : "hsl(var(--chart-3))",
      })),
    [items, lastObserved?.date],
  );

  const chartConfig = {
    requests: {
      label: "Demandes",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  const tickIndexes = [0, 10, 20, items.length - 1].filter(
    (index, position, source) =>
      index >= 0 && index < items.length && source.indexOf(index) === position,
  );

  return (
    <Card className="border-slate-200/80 bg-white shadow-sm">
      <CardHeader className="flex flex-col gap-4">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Total
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {total}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Pic
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {peak}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Moyenne / jour
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {average}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Jours actifs
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {activeDays}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)] p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Lecture journalière réelle
            </Badge>
            {lastObserved ? (
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Dernier point : {lastObserved.date}
              </Badge>
            ) : null}
          </div>

          <ChartContainer config={chartConfig} className="h-[180px] w-full sm:h-[220px]">
            <AreaChart data={chartData} margin={{ top: 8, right: 6, left: -18, bottom: 0 }}>
              <defs>
                <linearGradient id="requestsAreaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-requests)" stopOpacity={0.24} />
                  <stop offset="95%" stopColor="var(--color-requests)" stopOpacity={0.04} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(148, 163, 184, 0.18)" />
              <XAxis
                dataKey="shortDate"
                axisLine={false}
                tickLine={false}
                interval={0}
                ticks={tickIndexes.map((index) => chartData[index]?.shortDate).filter(Boolean)}
                tickMargin={10}
              />
              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                width={0}
                hide
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
              />
              <Area
                type="monotone"
                dataKey="requests"
                stroke="var(--color-requests)"
                strokeWidth={3}
                fill="url(#requestsAreaFill)"
                activeDot={{ r: 5, fill: "var(--color-requests)" }}
                dot={({ cx, cy, index, payload }) => {
                  if (typeof cx !== "number" || typeof cy !== "number") {
                    return null;
                  }

                  const isLastObserved = payload?.date === lastObserved?.date;

                  return (
                    <Dot
                      key={`requests-dot-${index}`}
                      cx={cx}
                      cy={cy}
                      r={isLastObserved ? 4.5 : 3.5}
                      fill={isLastObserved ? "var(--color-requests)" : "white"}
                      stroke="var(--color-requests)"
                      strokeWidth={2}
                    />
                  );
                }}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
