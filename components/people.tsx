import { PHOTOS } from "@/lib/photos";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Banda de fotos de gente real usando el T1.
 * Las fotos pueden ser imágenes editoriales remotas o archivos propios en /public/render/.
 */
const SLOTS = [
  {
    name: "hand",
    caption: "La vida real sigue cuando el móvil deja de pedirte atención.",
    span: "md:col-span-5",
  },
  {
    name: "street",
    caption: "Un teléfono puede acompañarte sin ocupar toda la escena.",
    span: "md:col-span-4",
  },
  {
    name: "cafe",
    caption: "En la mesa, boca abajo. Y ahí se queda.",
    span: "md:col-span-3",
  },
] as const;

export function People() {
  const available = SLOTS.filter((slot) => PHOTOS[slot.name]?.src);
  if (available.length === 0) return null;

  return (
    <section className="shell py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label text-fg/50">En la calle</p>
            <h2 className="mt-4 max-w-[18ch] text-[clamp(28px,4.4vw,46px)] font-medium leading-[0.99] tracking-[-0.03em] text-fg">
              El teléfono vuelve a su sitio
            </h2>
          </div>
          <p className="max-w-[32ch] text-[14px] leading-relaxed text-muted">
            En la mano cuando hace falta. En la mesa cuando estás con los tuyos. Y fuera de tu cabeza el resto del tiempo.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {available.map((slot, i) => (
          <Reveal key={slot.name} delay={i * 0.06} className={slot.span}>
            <figure className="group h-full overflow-hidden rounded-2xl border border-line/[0.07] bg-card">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS[slot.name].src as string}
                  alt={PHOTOS[slot.name].alt}
                  loading="lazy"
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.03]",
                  )}
                />
              </div>
              <figcaption className="border-t border-line/[0.07] px-4 py-3 text-[12.5px] text-muted">
                {slot.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
