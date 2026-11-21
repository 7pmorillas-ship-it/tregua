import { RealPhoto } from "@/components/photo";
import { ProductPhotoSlot } from "@/components/product-photo-slot";
import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

function Shot({
  caption,
  children,
  className,
  mediaClass,
}: {
  caption: string;
  children: ReactNode;
  className?: string;
  mediaClass?: string;
}) {
  return (
    <figure className={className}>
      <div
        className={`flex items-center justify-center ${mediaClass ?? "py-6"}`}
      >
        {children}
      </div>
      <figcaption className="mt-3 text-[12px] leading-snug text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className="shell scroll-mt-28 py-16 sm:py-24">
      <div className="grid gap-x-12 gap-y-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h2 className="max-w-[16ch] text-[clamp(30px,4.6vw,50px)] font-medium leading-[0.98] tracking-[-0.03em] text-fg">
            Míralo de cerca
          </h2>
          <p className="mt-5 max-w-[36ch] text-[14.5px] leading-relaxed text-muted">
            2,8 pulgadas, 118 gramos y un teclado de verdad. Nada de cristal
            curvado: algo que se puede dejar caer y seguir usando.
          </p>
          <ul className="mt-8 space-y-2.5 text-[13.5px] text-fg/80">
            <li>Cuerpo de plástico mate, sin funda.</li>
            <li>Teclas que se pulsan a ciegas.</li>
            <li>Batería extraíble de 1.800 mAh.</li>
          </ul>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.05}>
          <Shot
            caption="Tres cuartos. Negro mate, 118 g."
            mediaClass="py-2"
          >
            <RealPhoto
              name="hero"
                fallback={<ProductPhotoSlot label="Foto real en tres cuartos" filename="hero.jpg" />}
            />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.08}>
          <Shot caption="Tapa trasera con la cámara de 2 MP.">
            <RealPhoto
              name="back"
              fallback={<ProductPhotoSlot label="Foto real de la trasera" filename="back.jpg" />}
            />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.1}>
          <Shot caption="Teclado T9 retroiluminado.">
            <RealPhoto name="keypad" fallback={<ProductPhotoSlot label="Detalle real del teclado" filename="keypad.jpg" />} />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.12}>
          <Shot caption="Pantalla de 2,8 pulgadas, sin ruido.">
            <RealPhoto name="screen" fallback={<ProductPhotoSlot label="Foto real de la pantalla" filename="screen.jpg" />} />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.14}>
          <Shot caption="De frente, con el modo esencial.">
            <RealPhoto
              name="front"
              fallback={<ProductPhotoSlot label="Foto real de frente" filename="front.jpg" />}
            />
          </Shot>
        </Reveal>
      </div>
    </section>
  );
}
