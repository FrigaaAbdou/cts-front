import * as React from "react";
import { ResponsiveContainer, Tooltip } from "recharts";

import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    color?: string;
  }
>;

type ChartContextValue = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextValue | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("Chart components must be used inside ChartContainer.");
  }

  return context;
}

function ChartStyle({
  id,
  config,
}: {
  id: string;
  config: ChartConfig;
}) {
  const colorEntries = Object.entries(config).filter(
    ([, value]) => typeof value.color === "string" && value.color.length > 0,
  );

  if (colorEntries.length === 0) {
    return null;
  }

  const cssVariables = colorEntries
    .map(([key, value]) => `  --color-${key}: ${value.color};`)
    .join("\n");

  return (
    <style>
      {`
        [data-chart="${id}"] {
${cssVariables}
        }
      `}
    </style>
  );
}

export function ChartContainer({
  id,
  className,
  children,
  config,
}: React.HTMLAttributes<HTMLDivElement> & {
  config: ChartConfig;
}) {
  const reactId = React.useId();
  const chartId = id ?? reactId.replace(/:/g, "");

  return (
    <ChartContext.Provider value={{ config }}>
      <ChartStyle id={chartId} config={config} />
      <div
        data-chart={chartId}
        className={cn(
          "flex justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-pie-sector:focus]:outline-none [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector:focus]:outline-none [&_.recharts-tooltip-cursor]:stroke-border [&_.recharts-text]:fill-foreground",
          className,
        )}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children as React.ReactElement}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

export const ChartTooltip = Tooltip;

export function ChartTooltipContent({
  active,
  payload,
  hideLabel = false,
  hideIndicator = false,
  className,
}: React.ComponentProps<"div"> & {
  active?: boolean;
  payload?: Array<{
    name?: string | number;
    value?: string | number;
    dataKey?: string | number;
    payload?: { fill?: string };
  }>;
  hideLabel?: boolean;
  hideIndicator?: boolean;
}) {
  const { config } = useChart();

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid min-w-[180px] gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-xl",
        className,
      )}
    >
      {payload.map((entry, index) => {
        const configKey =
          typeof entry.name === "string" ? entry.name : String(entry.dataKey ?? index);
        const itemConfig = config[configKey];
        const indicatorColor =
          typeof entry.payload?.fill === "string"
            ? entry.payload.fill
            : itemConfig?.color ?? "hsl(var(--muted-foreground))";

        return (
          <div key={`${configKey}-${index}`} className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              {hideIndicator ? null : (
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: indicatorColor }}
                />
              )}
              <span className="truncate text-slate-600">
                {hideLabel ? itemConfig?.label ?? entry.name : entry.name}
              </span>
            </div>
            <span className="shrink-0 font-semibold text-slate-950">
              {typeof entry.value === "number" ? entry.value.toLocaleString("fr-FR") : entry.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
