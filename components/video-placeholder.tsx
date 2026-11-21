import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function VideoPlaceholder() {
  return (
    <section id="video" className="shell scroll-mt-24 py-16 sm:py-24">
      <Reveal>
        <div className="overflow-hidden rounded-[26px] border border-line/10 bg-[#191817] text-[#fff8ef]">
          <div className="grid min-h-[360px] items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.75fr] lg:p-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">[ VÍDEO DEL T1 ]</p>
              <h2 className="mt-4 max-w-[15ch] text-[clamp(30px,4.6vw,52px)] font-medium leading-[0.98] tracking-[-0.04em]">
                Así se siente usarlo.
              </h2>
              <p className="mt-5 max-w-[40ch] text-[14px] leading-relaxed text-white/60">
                Aquí irá un vídeo real del teléfono: cómo se enciende, cómo se pulsan las teclas y cómo funciona el modo esencial.
              </p>
            </div>
            <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-white/25 bg-white/[0.04]">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-[#17110d] shadow-[0_12px_35px_-12px_rgba(255,77,0,0.8)]">
                <Play size={22} fill="currentColor" className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
