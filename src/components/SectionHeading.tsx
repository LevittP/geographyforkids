import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ocean">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2 max-w-2xl text-ink/65",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
