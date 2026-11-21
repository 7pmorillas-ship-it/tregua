import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DeviceKey =
  | "up"
  | "down"
  | "left"
  | "right"
  | "ok"
  | "back"
  | "call"
  | "end"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "star"
  | "0"
  | "hash";

const DIGITS: Array<{ key: DeviceKey; label: string; sub: string }> = [
  { key: "1", label: "1", sub: ".,?" },
  { key: "2", label: "2", sub: "ABC" },
  { key: "3", label: "3", sub: "DEF" },
  { key: "4", label: "4", sub: "GHI" },
  { key: "5", label: "5", sub: "JKL" },
  { key: "6", label: "6", sub: "MNO" },
  { key: "7", label: "7", sub: "PQRS" },
  { key: "8", label: "8", sub: "TUV" },
  { key: "9", label: "9", sub: "WXYZ" },
  { key: "star", label: "✱", sub: "+" },
  { key: "0", label: "0", sub: "␣" },
  { key: "hash", label: "#", sub: "⇧" },
];

type DeviceProps = {
  screen?: ReactNode;
  view?: "front" | "back";
  onKey?: (key: DeviceKey) => void;
  size?: "sm" | "md";
  tilt?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Cuerpo del teléfono: candybar de 2,8" con teclado T9.
 * Reproduce el hardware real (negro mate, teclas retroiluminadas) sin logos de fabricante.
 * El frontal admite un `screen` interactivo; la trasera sirve para galería.
 */
export function Device({
  screen,
  view = "front",
  onKey,
  size = "md",
  tilt = false,
  className,
  ariaLabel = "Teléfono TREGUA T1",
}: DeviceProps) {
  const isMd = size === "md";

  function Cap({
    id,
    children,
    className: extra,
    label,
    round,
    height = "11.2cqw",
  }: {
    id: DeviceKey;
    children: ReactNode;
    className?: string;
    label?: string;
    round?: boolean;
    height?: string;
  }) {
    const base = cn(
      "relative flex select-none items-center justify-center border border-white/[0.07]",
      "bg-[linear-gradient(180deg,#3a3a40_0%,#26262b_55%,#17171a_100%)]",
      "text-[#ded9cb] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(0,0,0,0.7)]",
      "transition-colors duration-150",
      onKey && "hover:border-white/20 hover:text-white active:translate-y-px active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]",
      round ? "rounded-full" : "rounded-[7px]",
      extra,
    );
    const shape = round ? { height, width: height } : { height };

    if (!onKey) {
      return (
        <div aria-hidden className={base} style={shape}>
          {children}
        </div>
      );
    }

    return (
      <button type="button" aria-label={label} onClick={() => onKey(id)} className={base} style={shape}>
        {children}
      </button>
    );
  }

  const shell = (
    <div
      className={cn(
        "relative rounded-[26px] border border-white/[0.14] p-[7px] [container-type:inline-size]",
        "bg-[linear-gradient(148deg,#414146_0%,#1a1a1d_16%,#0b0b0d_52%,#111114_84%,#34343a_100%)]",
        "shadow-[0_50px_90px_-40px_rgba(38,30,22,0.55),0_18px_40px_-24px_rgba(0,0,0,0.6)]",
      )}
      style={
        tilt
          ? {
              transform: "rotateY(-17deg) rotateX(4deg) rotateZ(-1.2deg)",
              transformStyle: "preserve-3d",
            }
          : undefined
      }
    >
      {/* Canto derecho: grosor del cuerpo */}
      <div
        aria-hidden
        className="absolute -right-[5px] bottom-6 top-6 w-[6px] rounded-r-[16px] bg-[linear-gradient(90deg,#26262a,#0d0d0f_55%,#2a2a2f)]"
      />
      {/* Botón de volumen (izquierda) */}
      <div
        aria-hidden
        className="absolute -left-[3px] top-[22%] h-12 w-[3px] rounded-l-full bg-gradient-to-b from-[#3b3b40] to-[#101013]"
      />
      {/* Tecla de encendido (derecha) */}
      <div
        aria-hidden
        className="absolute -right-[4px] top-[16%] h-8 w-[3px] rounded-r-full bg-gradient-to-b from-[#3b3b40] to-[#101013]"
      />

      <div className="relative rounded-[20px] bg-[linear-gradient(180deg,#0a0a0c,#070709)] p-[9px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.035),inset_0_2px_12px_rgba(0,0,0,0.9)]">
        {view === "back" ? (
          <BackPanel />
        ) : (
          <>
            <div className="flex items-center justify-center gap-2 pb-[7px] pt-[1px]">
              <span className="h-[3px] w-9 rounded-full bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]" />
              <span className="h-[4px] w-[4px] rounded-full bg-[#0e0e12] ring-1 ring-white/10" />
            </div>

            {/* Pantalla */}
            <div className="relative overflow-hidden rounded-[3px] bg-[#F2EFE6] shadow-[0_0_0_1px_rgba(0,0,0,0.9),0_0_0_2px_rgba(255,255,255,0.04)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden">{screen}</div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.08)_14%,transparent_30%,transparent_76%,rgba(255,255,255,0.14)_100%)] opacity-60"
              />
            </div>

            {/* Placa de marca grabada */}
            <div className="flex items-center justify-center gap-1.5 py-[6px]">
              <span className="font-mono text-[6.5px] tracking-[0.34em] text-[#cfc9b9]/45">
                TREGUA
              </span>
              <span className="h-[2px] w-[2px] rounded-full bg-[#cfc9b9]/30" />
            </div>

            {/* Clúster de navegación */}
            <div className={cn("space-y-[5px]", isMd ? "px-1" : "px-0.5")}>
              <div className="grid grid-cols-3 gap-[5px]">
                <Cap id="back" label="Tecla atrás" className="text-[3.6cqw] text-[#a9a496]">
                  ↩
                </Cap>
                <Cap id="up" label="Arriba">
                  <Arrow />
                </Cap>
                <Cap id="end" label="Colgar" className="text-[3.2cqw] text-[#e6a69b]">
                  ✕
                </Cap>
              </div>
              <div className="grid grid-cols-3 gap-[5px]">
                <Cap id="left" label="Izquierda">
                  <Arrow dir="left" />
                </Cap>
                <Cap
                  id="ok"
                  label="Aceptar"
                  round
                  className="border-white/25 bg-[linear-gradient(180deg,#3a3a3f,#1d1d21)] font-mono text-[3.3cqw] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_2px_5px_rgba(0,0,0,0.8)]"
                >
                  OK
                </Cap>
                <Cap id="right" label="Derecha">
                  <Arrow dir="right" />
                </Cap>
              </div>
              <div className="grid grid-cols-3 gap-[5px]">
                <Cap
                  id="call"
                  label="Llamar"
                  className="border-[#2c5a3f]/60 bg-[linear-gradient(180deg,#1b3324,#132018)] text-[3.8cqw] text-[#9fd8b4]"
                >
                  ✆
                </Cap>
                <Cap id="down" label="Abajo">
                  <Arrow dir="down" />
                </Cap>
                <Cap
                  id="end"
                  label="Colgar"
                  className="border-[#5a2c26]/60 bg-[linear-gradient(180deg,#33201c,#1e1311)] text-[3.4cqw] text-[#e0a096]"
                >
                  ✕
                </Cap>
              </div>
            </div>

            {/* Teclado T9 */}
            <div className="mt-[7px] rounded-[9px] border border-white/[0.05] bg-[linear-gradient(180deg,#0c0c0e,#08080a)] p-[6px]">
              <div className="grid grid-cols-3 gap-[5px]">
                {DIGITS.map((d) => (
                  <Cap
                    key={d.key}
                    id={d.key}
                    label={`Tecla ${d.label}`}
                    height="9.4cqw"
                    className="flex-col gap-0 leading-none"
                  >
                    <span className="font-mono text-[3.7cqw] text-[#f0ebdd]/90">
                      {d.label}
                    </span>
                    <span className="mt-[2px] font-mono text-[2cqw] tracking-[0.08em] text-[#8b867a]">
                      {d.sub}
                    </span>
                  </Cap>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center pt-[7px]">
              <span className="h-[3px] w-8 rounded-full bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className={cn("relative select-none", className)} aria-label={ariaLabel}>
      <div style={{ perspective: tilt ? "1600px" : undefined }} className="relative">
        {shell}
      </div>
      <div
        aria-hidden
        className="mx-auto mt-4 h-3 w-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(40,32,24,0.18),transparent_72%)] blur-md"
      />
    </div>
  );
}

function Arrow({ dir = "up" }: { dir?: "up" | "down" | "left" | "right" }) {
  const rotation = { up: 0, right: 90, down: 180, left: 270 }[dir];
  return (
    <span className="text-[3.1cqw] text-[#b9b3a5]" style={{ transform: `rotate(${rotation}deg)` }}>
      ▲
    </span>
  );
}

function BackPanel() {
  return (
    <div className="relative flex aspect-[10/26] flex-col justify-between overflow-hidden rounded-[14px] bg-[radial-gradient(120%_80%_at_20%_0%,#2c2c31_0%,#19191c_45%,#101012_100%)] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.10)_0%,transparent_32%,transparent_68%,rgba(255,255,255,0.04)_100%)]"
      />
      <div className="flex items-start justify-between">
        <div className="relative mt-1 w-[74px] rounded-[14px] border border-white/[0.08] bg-[linear-gradient(160deg,#1b1b1f,#0a0a0c)] p-2 shadow-[0_10px_25px_-12px_rgba(0,0,0,0.9)]">
          <div className="flex h-[42px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a3f4a,#0a0a0d_62%)] ring-1 ring-white/10">
            <span className="h-3 w-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#6f7a8d,#05050a_70%)] ring-1 ring-black/60" />
          </div>
          <div className="mt-2 flex items-center justify-between px-0.5">
            <span className="h-[6px] w-[6px] rounded-full bg-[#e9e2ce]/80 shadow-[0_0_6px_rgba(255,235,190,0.5)]" />
            <span className="font-mono text-[5px] tracking-[0.18em] text-white/20">2 MP</span>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <span className="h-[2px] w-6 rounded bg-white/10" />
          <span className="h-[2px] w-4 rounded bg-white/5" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 opacity-60">
        <span className="font-mono text-[7px] tracking-[0.36em] text-[#d4cdbd]/60">TREGUA</span>
        <span className="font-mono text-[5px] tracking-[0.24em] text-white/20">T1</span>
      </div>

      <div>
        <div className="grid grid-cols-6 gap-[5px] px-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="h-[3px] rounded-full bg-black/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[5px] tracking-[0.16em] text-white/15">
          <span>4G LTE</span>
          <span>·</span>
          <span>DUAL SIM</span>
          <span>·</span>
          <span>USB-C</span>
        </div>
      </div>
    </div>
  );
}
