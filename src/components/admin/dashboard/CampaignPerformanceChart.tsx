import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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

export function CampaignPerformanceChart({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Array<{ campaignId: string; label: string; count: number }>;
}) {
  const chartItems = React.useMemo(
    () =>
      items.slice(0, 5).map((item, index) => ({
        ...item,
        key: `campaign-${index + 1}`,
        fill: `var(--color-campaign-${index + 1})`,
      })),
    [items],
  );

  const totalRequests = React.useMemo(
    () => chartItems.reduce((sum, item) => sum + item.count, 0),
    [chartItems],
  );

  const chartConfig = React.useMemo(
    () =>
      chartItems.reduce<ChartConfig>(
        (config, item, index) => ({
          ...config,
          [item.key]: {
            label: item.label,
            color: `hsl(var(--chart-${Math.min(index + 1, 5)}))`,
          },
        }),
        {
          requests: {
            label: "Demandes",
          },
        },
      ),
    [chartItems],
  );

  return (
    <Card className="border-slate-200/80 bg-white shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
            Aucune campagne n’a généré de demandes sur la période.
          </div>
        ) : (
          <>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-center">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[280px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartItems}
                    dataKey="count"
                    nameKey="key"
                    innerRadius={72}
                    outerRadius={104}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                          return null;
                        }

                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-semibold"
                            >
                              {totalRequests.toLocaleString("fr-FR")}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground text-sm"
                            >
                              Demandes
                            </tspan>
                          </text>
                        );
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    {chartItems.length} campagnes suivies
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-3 py-1">
                    {totalRequests.toLocaleString("fr-FR")} demandes attribuées
                  </Badge>
                </div>

                <div className="flex flex-col gap-3">
                  {chartItems.map((item) => {
                    const percentage =
                      totalRequests > 0 ? Math.round((item.count / totalRequests) * 100) : 0;

                    return (
                      <div
                        key={item.campaignId}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span
                            className="size-3 shrink-0 rounded-full"
                            style={{ backgroundColor: item.fill }}
                          />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-900">
                              {item.label}
                            </p>
                            <p className="text-xs text-slate-500">
                              {percentage}% de la demande campagne
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-base font-semibold text-slate-950">{item.count}</p>
                          <p className="text-xs text-slate-500">demandes</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
