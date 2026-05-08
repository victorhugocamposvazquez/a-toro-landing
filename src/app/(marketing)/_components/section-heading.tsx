import { cn } from "@/lib/utils";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <h2 className="text-[28px] md:text-[40px] font-semibold text-brand-text tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-[16px] md:text-[24px] text-brand-text-muted max-w-[1100px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
