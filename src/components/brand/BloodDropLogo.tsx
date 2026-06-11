import { cn } from "@/lib/utils";

type BloodDropLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BloodDropLogo({ className, compact = false }: BloodDropLogoProps) {
  return (
    <img
      src="/brand/logo-cts-transparent.png"
      alt=""
      aria-hidden="true"
      className={cn(
        "shrink-0 object-contain",
        compact ? "h-8 w-12" : "h-10 w-16",
        className,
      )}
      loading="eager"
      decoding="async"
    />
  );
}
