import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "primary" | "dark";
type Size = "sm" | "md" | "lg";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const VARIANT: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand/90",
  dark: "bg-brand-dark text-white hover:bg-brand-dark/90",
};

const SIZE: Record<Size, string> = {
  sm: "px-8 py-2.5 text-sm",
  md: "px-10 py-3 text-base",
  lg: "px-10 py-4 text-base md:text-lg",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] font-medium transition-colors whitespace-nowrap",
        VARIANT[variant],
        SIZE[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
