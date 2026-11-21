import type { ReactNode } from "react";
import { PHOTOS, type Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

/**
 * Muestra la foto real si existe en /public/render/; si no, dibuja el render CSS.
 */
export function RealPhoto({
  name,
  fallback,
  className,
  imgClassName,
}: {
  name: keyof typeof PHOTOS;
  fallback: ReactNode;
  className?: string;
  imgClassName?: string;
}) {
  const photo: Photo = PHOTOS[name] ?? { src: null, alt: "" };

  if (!photo.src) return <>{fallback}</>;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
