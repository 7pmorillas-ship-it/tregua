import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductPhotoSlot({
  label,
  filename,
  className,
}: {
  label: string;
  filename: string;
  className?: string;
}) {
  return (
    <div className={cn("flex min-h-[260px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-line/20 bg-card/60 px-6 text-center", className)}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line/10 text-muted">
        <Camera size={18} strokeWidth={1.5} />
      </span>
      <p className="mt-4 text-sm font-medium text-fg/80">{label}</p>
      <p className="mt-1 max-w-[26ch] font-mono text-[10px] uppercase tracking-[0.12em] text-muted/65">
        Añadir {filename} en /public/render/
      </p>
    </div>
  );
}
