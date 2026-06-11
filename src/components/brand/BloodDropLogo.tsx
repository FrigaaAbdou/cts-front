import { cn } from "@/lib/utils";

type BloodDropLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BloodDropLogo({ className, compact = false }: BloodDropLogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("shrink-0", compact ? "size-8" : "size-10", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4.5C24 4.5 12 17 12 27.5C12 35.6 17.4 41.5 24 41.5C30.6 41.5 36 35.6 36 27.5C36 17 24 4.5 24 4.5Z"
        className="fill-brand-red"
      />
      <path
        d="M17.5 28.5C18.7 31.4 21.1 33 24 33C26.9 33 29.3 31.4 30.5 28.5"
        className="stroke-white/80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 10.5C24 10.5 17 18.5 17 25.5C17 30.4 20.1 34 24 34C27.9 34 31 30.4 31 25.5C31 18.5 24 10.5 24 10.5Z"
        className="fill-white/20"
      />
    </svg>
  );
}
