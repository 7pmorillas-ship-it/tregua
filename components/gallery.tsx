import { Device } from "@/components/device";
import { RealPhoto } from "@/components/photo";
import { HomeScreen } from "@/components/phone/screen-ui";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function Frame({
  index,
  label,
  caption,
  children,
  className,
  tall,
}: {
  index: string;
  label: string;
  caption: string;
  children: ReactNode;
  className?: string;
  tall?: boolean;
}) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line/[0.07] bg-[linear-gradient(158deg,#F3F0E8,#E6E2D6)]",
        "shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_24px_60px_-40px_rgba(38,30,22,0.55)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex w-full items-center justify-center overflow-hidden",
          tall ? "h-[420px] sm:h-[520px] lg:h-[600px]" : "h-[300px] sm:h-[360px]",
        )}
      >
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.4]" />
        <div className="relative flex h-full w-full items-center justify-center p-6 transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]">
          {children}
        </div>
        <span className="mono-label absolute left-5 top-5 text-fg/45">
          {index}
        </span>
      </div>
      <figcaption className="flex items-baseline justify-between gap-4 border-t border-line/[0.07] bg-card/60 px-5 py-3.5">
        <span className="mono-label text-fg/60">{label}</span>
        <span className="text-right text-[12px] leading-tight text-muted">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

/** Macro de pantalla: se escala el HomeScreen para que se lea como una foto de detalle. */
function ScreenMacro() {
  return (
    <div className="relative h-full max-h-[300px] w-full max-w-[220px] overflow-hidden rounded-[22px] border border-fg/10 shadow-[0_30px_60px_-30px_rgba(30,24,18,0.6)]">
      <div className="absolute inset-0 origin-center scale-[1.55]">
        <HomeScreen time="07:42" selected={0} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.55)_0%,transparent_38%)]" />
    </div>
  );
}

/** Macro de teclado: una sola tecla, a tamaño de foto de producto. */
function KeyMacro() {
  return (
    <div className="relative flex h-full w-full max-w-[240px] items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.9),transparent_62%)]" />
      <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#43434a,#26262b_55%,#151518)] text-[#F5F2EA] shadow-[0_2px_0_rgba(255,255,255,0.14)_inset,0_-10px_18px_rgba(0,0,0,0.5)_inset,0_26px_40px_-18px_rgba(20,18,16,0.65)] sm:h-32 sm:w-32">
        <span className="font-mono text-4xl font-medium leading-none sm:text-5xl">5</span>
        <span className="mt-1.5 font-mono text-[10px] tracking-[0.32em] text-[#F5F2EA]/55">
          JKL
        </span>
        <span className="absolute inset-x-4 bottom-2 h-[1px] bg-white/10" />
      </div>
      <div className="absolute bottom-4 left-1/2 h-6 w-32 -translate-x-1/2 rounded-full bg-fg/10 blur-md" />
    </div>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className="shell scroll-mt-28 py-20 sm:py-28">
      <Reveal>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label text-fg/50">[ CÓMO ES DE VERDAD ]</p>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(30px,5vw,54px)] font-medium leading-[0.98] tracking-[-0.03em] text-fg">
              Míralo de cerca
            </h2>
          </div>
          <p className="max-w-[34ch] text-[14.5px] leading-relaxed text-muted">
            2,8 pulgadas, 118 gramos y un teclado de verdad. Nada de cristal
            curvado: algo que se puede dejar caer y seguir usando.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-7" delay={0.04}>
          <Frame
            index="01"
            label="VISTA TRES CUARTOS"
            caption="Negro mate, 118 g"
            tall
            className="h-full"
          >
            <RealPhoto
              name="hero"
              fallback={
                <Device
                  tilt
                  className="w-[190px] sm:w-[230px] lg:w-[270px]"
                  screen={<HomeScreen time="07:42" selected={0} />}
                />
              }
            />
          </Frame>
        </Reveal>

        <div className="md:col-span-5">
          <Reveal delay={0.08}>
            <Frame
              index="02"
              label="TAPA TRASERA"
              caption="Cámara 2 MP · altavoz"
              tall
            >
              <RealPhoto
                name="back"
                fallback={
                  <Device view="back" className="w-[130px] sm:w-[150px]" />
                }
              />
            </Frame>
          </Reveal>
        </div>

        <Reveal className="md:col-span-4" delay={0.06}>
          <Frame
            index="03"
            label="TECLADO T9"
            caption="Retroiluminado, pulsación firme"
          >
            <RealPhoto name="keypad" fallback={<KeyMacro />} />
          </Frame>
        </Reveal>

        <Reveal className="md:col-span-4" delay={0.1}>
          <Frame index="04" label='PANTALLA 2,8"' caption="Interfaz sin ruido">
            <RealPhoto name="screen" fallback={<ScreenMacro />} />
          </Frame>
        </Reveal>

        <Reveal className="md:col-span-4" delay={0.14}>
          <Frame index="05" label="DE FRENTE" caption="Todo lo demás, fuera">
            <RealPhoto
              name="front"
              fallback={
                <Device
                  className="w-[140px] sm:w-[160px]"
                  screen={<HomeScreen time="07:42" selected={2} />}
                />
              }
            />
          </Frame>
        </Reveal>
      </div>
    </section>
  );
}
