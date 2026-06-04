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

export function CampaignShareCard({
  title,
  description,
  withCampaign,
  withoutCampaign,
  percentageWithCampaign,
}: {
  title: string;
  description: string;
  withCampaign: number;
  withoutCampaign: number;
  percentageWithCampaign: number;
}) {
  const total = withCampaign + withoutCampaign;

  const chartData = React.useMemo(
    () => [
      {
        key: "withCampaign",
        label: "Avec campagne",
        value: withCampaign,
        fill: "var(--color-withCampaign)",
      },
      {
        key: "withoutCampaign",
        label: "Sans campagne",
        value: withoutCampaign,
        fill: "var(--color-withoutCampaign)",
      },
    ],
    [withCampaign, withoutCampaign],
  );

  const chartConfig = {
    withCampaign: {
      label: "Avec campagne",
      color: "hsl(var(--chart-1))",
    },
    withoutCampaign: {
      label: "Sans campagne",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="border-slate-200/80 bg-white shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-center">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[220px]"
          >
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="key"
                innerRadius={58}
                outerRadius={86}
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
                          {percentageWithCampaign}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground text-sm"
                        >
                          avec campagne
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
                {total} demandes analysées
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Acquisition campagne
              </Badge>
            </div>

            {chartData.map((item) => {
              const percentage = total > 0 ? Math.round((item.value / total) * 100) : 0;

              return (
                <div
                  key={item.key}
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
                      <p className="text-xs text-slate-500">{percentage}% du total</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-base font-semibold text-slate-950">{item.value}</p>
                    <p className="text-xs text-slate-500">demandes</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
