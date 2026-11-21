import type { ReactNode } from "react";
import { Device } from "@/components/device";
import { Reveal } from "@/components/reveal";

function Frame({
  children,
  caption,
  index,
  className,
}: {
  children: ReactNode;
  caption: string;
  index: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-line/[0.08] bg-[linear-gradient(160deg,#F0EDE4_0%,#E7E3D8_100%)] transition-all duration-500 hover:border-line/20 ${className ?? ""}`}
    >
      <div className="flex h-full items-center justify-center p-5 sm:p-7">
        {children}
      </div>
      <div className="flex items-center justify-between border-t border-line/[0.07] px-4 py-2.5">
        <span className="font-mono text-[9px] tracking-[0.14em] text-muted">{caption}</span>
        <span className="font-mono text-[9px] tracking-[0.14em] text-muted/50">{index}</span>
      </div>
    </div>
  );
}

function CompactScreen() {
  return (
    <div className="flex h-full flex-col justify-between bg-[#F2EFE6] px-3 py-2">
      <div>
        <div className="flex items-center justify-between font-mono text-[7px] tracking-[0.08em] text-[#8a8477]">
          <span>TREGUA</span>
          <span>4G · 07:42</span>
        </div>
        <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.2em] text-[#9a9384]">
          Jue 20 nov
        </div>
        <div className="text-[30px] font-light leading-none tracking-tighter text-[#1b1a16]">
          07:42
        </div>
        <div className="mt-2 h-px bg-[#1b1a16]/10" />
      </div>

      <ul className="space-y-[3px]">
        {["WhatsApp", "Maps", "Spotify", "Banco"].map((name, i) => (
          <li
            key={name}
            className={`flex items-center justify-between rounded-[3px] px-1.5 py-[4px] text-[10px] ${
              i === 0 ? "bg-[#1b1a16] text-[#F6F3EA]" : "text-[#3e3a32]"
            }`}
          >
            <span>{name}</span>
            <span className={`font-mono text-[7px] ${i === 0 ? "text-[#F6F3EA]/60" : "text-[#9a9384]"}`}>
              {i === 0 ? "3" : i === 1 ? "12 min" : ""}
            </span>
          </li>
        ))}
      </ul>

      <div className="font-mono text-[6.5px] tracking-[0.16em] text-[#a8a294]">
        MODO ESENCIAL
      </div>
    </div>
  );
}

export function Gallery() {  return (
    <section id="galeria" className="relative border-t border-line/[0.06] py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-line/25" />
                <span className="mono-label">El objeto</span>
              </div>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-tightest sm:text-4xl">
                Míralo de cerca.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted">
              Plástico mate, teclas que se pulsan sin mirar y una pantalla que no pide nada.
              Nada de cristal brillante que se rompa.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <Reveal className="md:col-span-2" delay={0.04}>
            <Frame caption="VISTA TRES CUARTOS · NEGRO MATE" index="01" className="h-full">
              <div className="w-[180px] sm:w-[200px]">
                <Device
                  view="front"
                  tilt
                  size="md"
                  screen={<CompactScreen />}
                  ariaLabel="TREGUA T1 de tres cuartos"
                />
              </div>
            </Frame>
          </Reveal>

          <Reveal delay={0.08}>
            <Frame caption="TAPA TRASERA · CÁMARA 2 MP" index="02" className="h-full">
              <div className="w-[145px] sm:w-[160px]">
                <Device view="back" size="md" ariaLabel="Tapa trasera del TREGUA T1" />
              </div>
            </Frame>
          </Reveal>

          <Reveal delay={0.1}>
            <Frame caption="TECLADO T9 · RETROILUMINADO" index="03" className="h-full">
              <div className="relative flex h-[200px] items-center justify-center">
                <div
                  aria-hidden
                  className="absolute h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,150,100,0.35),transparent_65%)] blur-2xl"
                />
                <div className="relative flex h-[132px] w-[104px] -rotate-3 flex-col items-center justify-center gap-1 rounded-[16px] border border-white/[0.1] bg-[linear-gradient(170deg,#2f2f33,#141416_60%,#0b0b0d)] shadow-[0_24px_50px_-20px_rgba(30,24,18,0.6),inset_0_1px_0_rgba(255,255,255,0.16)]">
                  <span className="font-mono text-[46px] leading-none text-[#f5efe1]">5</span>
                  <span className="font-mono text-[9px] tracking-[0.18em] text-[#a29c8d]">JKL</span>
                </div>
              </div>
            </Frame>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.12}>
            <Frame caption='PANTALLA 2,8" · INTERFAZ LIMPIA' index="04" className="h-full">
              <div className="w-full max-w-[420px] overflow-hidden rounded-[10px] border border-[#1b1a16]/15 bg-[#F2EFE6] shadow-[0_30px_60px_-35px_rgba(40,32,24,0.55)]">
                <div className="flex items-center justify-between px-4 pt-3 font-mono text-[9px] tracking-[0.08em] text-[#8a8477]">
                  <span>TREGUA</span>
                  <span className="flex gap-2">
                    <span>4G</span>
                    <span>07:42</span>
                  </span>
                </div>
                <div className="flex items-end justify-between px-4 pb-3 pt-2">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9a9384]">
                      Jue 20 nov
                    </div>
                    <div className="text-[46px] font-light leading-none tracking-tighter text-[#1b1a16]">
                      07:42
                    </div>
                  </div>
                  <div className="pb-1 text-right">
                    <div className="font-mono text-[9px] text-[#7d776a]">BUENOS DÍAS</div>
                    <div className="font-mono text-[9px] text-[#b4451a]">MODO ESENCIAL</div>
                  </div>
                </div>
                <div className="mx-4 h-px bg-[#1b1a16]/10" />
                <ul className="grid grid-cols-2 gap-x-6 px-4 py-3">
                  {["WhatsApp", "Maps", "Spotify", "Banco"].map((name, i) => (
                    <li
                      key={name}
                      className="flex items-center justify-between border-b border-[#1b1a16]/[0.06] py-2 text-[11px] text-[#3e3a32] last:border-0"
                    >
                      <span>{name}</span>
                      <span className="font-mono text-[8px] text-[#9a9384]">
                        {i === 0 ? "3" : i === 1 ? "12 min" : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Frame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
