import { Device } from "@/components/device";
import { RealPhoto } from "@/components/photo";
import { HomeScreen } from "@/components/phone/screen-ui";
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

function KeyMacro() {
  return (
    <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl bg-[linear-gradient(180deg,#43434a,#26262b_55%,#151518)] text-[#F5F2EA] shadow-[0_2px_0_rgba(255,255,255,0.14)_inset,0_-8px_14px_rgba(0,0,0,0.45)_inset,0_18px_28px_-16px_rgba(20,18,16,0.55)]">
      <span className="font-mono text-3xl font-medium leading-none">5</span>
      <span className="mt-1 font-mono text-[9px] tracking-[0.3em] text-[#F5F2EA]/55">
        JKL
      </span>
    </div>
  );
}

function ScreenMacro() {
  return (
    <div className="h-[170px] w-[128px] overflow-hidden rounded-[10px] border border-fg/10 bg-[#F2EFE6] shadow-[0_16px_30px_-18px_rgba(30,24,18,0.5)]">
      <HomeScreen time="07:42" selected={0} />
    </div>
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
              fallback={
                <Device
                  tilt
                  className="w-[210px] sm:w-[250px]"
                  screen={<HomeScreen time="07:42" selected={0} />}
                />
              }
            />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.08}>
          <Shot caption="Tapa trasera con la cámara de 2 MP.">
            <RealPhoto
              name="back"
              fallback={<Device view="back" className="w-[120px]" />}
            />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.1}>
          <Shot caption="Teclado T9 retroiluminado.">
            <RealPhoto name="keypad" fallback={<KeyMacro />} />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.12}>
          <Shot caption="Pantalla de 2,8 pulgadas, sin ruido.">
            <RealPhoto name="screen" fallback={<ScreenMacro />} />
          </Shot>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.14}>
          <Shot caption="De frente, con el modo esencial.">
            <RealPhoto
              name="front"
              fallback={
                <Device
                  className="w-[120px]"
                  screen={<HomeScreen time="07:42" selected={2} />}
                />
              }
            />
          </Shot>
        </Reveal>
      </div>
    </section>
  );
}
