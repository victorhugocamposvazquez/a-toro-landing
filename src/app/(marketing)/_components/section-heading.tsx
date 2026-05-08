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
      <h2 className="text-[28px] md:text-[40px] font-semibold text-brand-text tracking-[0.28px] md:tracking-[0.4px]">
        {title}
      </h2>
      {subtitle ? (
        <div className="max-w-[1100px] text-[16px] leading-normal tracking-[0.24px] text-brand-text-muted md:text-[24px]">
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}
