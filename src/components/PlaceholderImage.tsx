import { cn } from "@/lib/cn";

const GRADIENTS: Record<string, string> = {
  ink: "from-ink to-ink-light",
  ocean: "from-ocean-dark to-ocean-light",
  compass: "from-compass to-compass-light",
  leaf: "from-leaf to-leaf-light",
};

interface PlaceholderImageProps {
  colorKey?: string;
  icon?: string;
  label?: string;
  className?: string;
  compact?: boolean;
}

export default function PlaceholderImage({
  colorKey = "ocean",
  icon = "🗺️",
  label,
  className,
  compact = false,
}: PlaceholderImageProps) {
  const gradient = GRADIENTS[colorKey] ?? GRADIENTS.ocean;
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
      role="img"
      aria-label={label ?? "Decorative illustration"}
    >
      <div className="absolute inset-0 bg-graticule bg-[length:36px_36px] opacity-30" />
      <span
        className={cn(
          "relative drop-shadow-sm",
          compact ? "text-3xl" : "text-5xl sm:text-6xl"
        )}
      >
        {icon}
      </span>
    </div>
  );
}
