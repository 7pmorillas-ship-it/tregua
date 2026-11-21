import { ArrowRight, Check, Lock, Minus, X } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { COMPARISON, SPECS } from "@/lib/content";
import { cn } from "@/lib/utils";

function Mark({ value, ours }: { value: string; ours?: boolean }) {
  const isYes = value.startsWith("Sí");
  const isNo = value.startsWith("No");
  const isDash = value === "—";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.02em]",
        isYes && "text-signal",
        isNo && !ours && "text-muted/70",
        isNo && ours && "text-accent",
        isDash && "text-muted/40",
        !isYes && !isNo && !isDash && "text-fg/80",
      )}
    >
      {isYes ? <Check size={11} /> : null}
      {isNo ? <X size={11} className={ours ? "text-accent" : "text-muted/50"} /> : null}
      {isDash ? <Minus size={11} /> : null}
      {value}
    </span>
  );
}

export function Specs() {
  return (
    <section id="especificaciones" className="relative border-t border-line/[0.06] py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="04"
            kicker="Especificaciones"
            title={
              <>
                Hardware honesto.
                <br />
                <span className="text-muted">Cero letra pequeña.</span>
              </>
            }
            description="No es un ladrillo de gama alta ni lo necesitas. Es un teléfono que hace cuatro cosas bien y las hace durante días."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Ficha industrial */}
          <Reveal delay={0.05}>
            <div className="card-surface h-full overflow-hidden">
              <div className="flex items-center justify-between border-b border-line/[0.07] px-5 py-3.5">
                <span className="font-mono text-[10px] tracking-[0.16em] text-fg/80">
                  FICHA TÉCNICA · T1
                </span>
                <span className="rounded border border-line/10 px-1.5 py-0.5 font-mono text-[8px] tracking-[0.12em] text-muted">
                  REV. 2026.1
                </span>
              </div>

              <dl className="divide-y divide-line/[0.06]">
                {SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="group flex items-baseline justify-between gap-4 px-5 py-2.5 transition-colors hover:bg-line/[0.02]"
                  >
                    <dt className="w-24 shrink-0 text-[11px] uppercase tracking-[0.08em] text-muted">
                      {spec.label}
                    </dt>
                    <dd className="flex flex-1 flex-wrap items-baseline justify-end gap-x-2 gap-y-0.5 text-right">
                      <span className="font-mono text-[11.5px] text-fg/90">{spec.value}</span>
                      <span className="font-mono text-[9px] text-muted/50">{spec.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="flex items-center gap-2.5 border-t border-accent/15 bg-accent/[0.05] px-5 py-3">
                <Lock size={12} className="text-accent" />
                <p className="font-mono text-[9px] leading-relaxed tracking-[0.08em] text-accent/90">
                  BLOQUEO DEVICE OWNER INABILABLE · SE APLICA AL ARRANCAR
                </p>
              </div>
            </div>
          </Reveal>

          {/* Comparativa */}
          <Reveal delay={0.1}>
            <div className="card-surface flex h-full flex-col overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-line/[0.07] px-5 py-3.5">
                <span className="font-mono text-[10px] tracking-[0.16em] text-fg/80">
                  COMPARATIVA
                </span>
                <span className="hidden font-mono text-[8px] tracking-[0.12em] text-muted sm:block">
                  DESLIZA EN MÓVIL →
                </span>
              </div>

              <div className="no-scrollbar flex-1 overflow-x-auto px-2 py-2 sm:px-4">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr>
                      <th className="w-[34%] px-2 py-2 font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-muted/60">
                        Función
                      </th>
                      {COMPARISON.columns.map((col, i) => (
                        <th
                          key={col}
                          className={cn(
                            "px-2 py-2 text-center font-mono text-[9px] font-normal uppercase tracking-[0.08em]",
                            i === 2
                              ? "rounded-t-md bg-accent/[0.07] text-accent"
                              : "text-muted/70",
                          )}
                        >
                          {i === 2 ? "TREGUA T1" : col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.rows.map((row) => (
                      <tr key={row.label} className="border-t border-line/[0.05]">
                        <td className="px-2 py-2.5 text-[11.5px] text-fg/75">{row.label}</td>
                        {row.values.map((value, i) => (
                          <td
                            key={`${row.label}-${i}`}
                            className={cn(
                              "px-2 py-2.5 text-center",
                              i === 2 && "bg-accent/[0.07]",
                            )}
                          >
                            <Mark value={value} ours={i === 2} />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-t border-line/[0.05]">
                      <td />
                      <td className="px-2 pb-1" />
                      <td className="px-2 pb-1" />
                      <td className="rounded-b-md bg-accent/[0.07] px-2 pb-2 pt-1 text-center">
                        <a
                          href="#comprar"
                          className="inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.08em] text-accent hover:underline"
                        >
                          ELEGIR T1 <ArrowRight size={10} />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="border-t border-line/[0.06] px-5 py-3 font-mono text-[8.5px] leading-relaxed tracking-[0.04em] text-muted/50">
                Autonomía medida con cobertura 4G estable y uso ligero. Datos de hardware
                verificados en producción. El bloqueo no se puede desactivar desde el usuario.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
