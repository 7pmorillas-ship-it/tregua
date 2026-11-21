"use client";

import { useState } from "react";
import {
  AlertCircle,
  Check,
  CreditCard,
  Loader2,
  Lock,
  Package,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { INCLUDED_IN_BOX, MODES, type ModeId } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "demo" | "error";

export function Configurator() {
  const [mode, setMode] = useState<ModeId>("essential");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const selected = MODES.find((m) => m.id === mode) ?? MODES[0];

  async function checkout() {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode }),
      });
      const data = (await res.json()) as { url?: string; demo?: boolean; error?: string };
      if (res.ok && data.url) {
        window.location.assign(data.url);
        return;
      }
      if (res.ok && data.demo) {
        setStatus("demo");
        setMessage(
          "Checkout en modo demo: define STRIPE_SECRET_KEY en .env.local para redirigir a Stripe.",
        );
        return;
      }
      throw new Error(data.error ?? "No se pudo iniciar el pago.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Error inesperado.");
    }
  }

  return (
    <section id="comprar" className="relative border-t border-line/[0.06] py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,77,0,0.07),transparent_65%)] blur-2xl"
      />
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="05"
            kicker="Comprar"
            title={
              <>
                Elige tu nivel de <span className="text-accent">tregua</span>.
              </>
            }
            description="Mismo teléfono, dos listas blancas. Cámbialo cuando quieras escribiéndonos: no hay bloqueo de compra ni suscripción."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-6">
          {/* Modos */}
          <Reveal>
            <div role="radiogroup" aria-label="Modo de configuración" className="grid gap-3 sm:grid-cols-2">
              {MODES.map((m) => {
                const active = m.id === mode;
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => {
                      setMode(m.id);
                      setStatus("idle");
                    }}
                    className={cn(
                      "relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
                      active
                        ? "border-accent/60 bg-accent/[0.05] shadow-[0_0_60px_-30px_rgba(255,77,0,0.8)]"
                        : "border-line/[0.08] bg-card hover:border-line/20",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="mono-label">{m.tag}</div>
                        <div className="mt-1 text-[16px] font-medium tracking-tight">{m.name}</div>
                      </div>
                      <span
                        className={cn(
                          "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                          active ? "border-accent bg-accent" : "border-line/25",
                        )}
                      >
                        {active ? <span className="h-1.5 w-1.5 rounded-full bg-[#0A0A0B]" /> : null}
                      </span>
                    </div>

                    <p className="mt-2 text-[12px] leading-relaxed text-muted">{m.pitch}</p>
                    <div className="mt-4 font-mono text-[20px] tracking-tight text-fg">139 €</div>

                    <ul className="mt-4 space-y-1.5">
                      {m.includes.map((inc) => (
                        <li key={inc} className="flex gap-2 text-[11.5px] leading-snug text-fg/75">
                          <Check size={12} className="mt-0.5 shrink-0 text-signal" />
                          {inc}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 border-t border-line/[0.07] pt-3">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {m.excludes.map((exc) => (
                          <span
                            key={exc}
                            className="inline-flex items-center gap-1 font-mono text-[9px] text-muted/60"
                          >
                            <X size={9} className="text-accent/60" />
                            {exc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Truck, title: "Envío 24/48 h", body: "Desde España, con seguimiento." },
                { icon: ShieldCheck, title: "2 años de garantía", body: "Y 30 días para devolverlo." },
                { icon: Check, title: "Sin suscripción", body: "Pagas una vez. Fin." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-xl border border-line/[0.07] bg-card px-3.5 py-3"
                >
                  <item.icon size={13} className="mt-0.5 shrink-0 text-muted/70" />
                  <div>
                    <div className="text-[12px] font-medium text-fg/85">{item.title}</div>
                    <div className="mt-0.5 text-[10.5px] leading-snug text-muted">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Resumen */}
          <Reveal delay={0.08}>
            <div className="card-surface overflow-hidden lg:sticky lg:top-28">
              <div className="border-b border-line/[0.07] px-5 py-3">
                <span className="font-mono text-[9px] tracking-[0.16em] text-muted">
                  RESUMEN DEL PEDIDO
                </span>
              </div>

              <div className="px-5 py-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-[70px] w-[44px] shrink-0 rounded-[7px] border border-white/15 bg-[#0a0a0b] p-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)]">
                    <div className="h-[34px] rounded-[2px] bg-[#131317] ring-1 ring-white/5" />
                    <div className="mt-1 grid grid-cols-3 gap-[2px]">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <span key={i} className="h-[5px] rounded-[1px] bg-white/10" />
                      ))}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[14px] font-medium">TREGUA T1 · Negro mate</div>
                    <div className="mt-0.5 font-mono text-[9px] tracking-[0.08em] text-muted">
                      {selected.name.toUpperCase()}
                    </div>
                    <div className="mt-1 font-mono text-[9px] text-muted/50">
                      REF. T1-ES-{mode === "essential" ? "ESS" : "MNK"}
                    </div>
                  </div>
                  <div className="ml-auto font-mono text-[15px]">139 €</div>
                </div>

                <div className="mt-5 space-y-2 border-t border-line/[0.07] pt-4 text-[12px]">
                  <div className="flex justify-between text-muted">
                    <span>Envío península</span>
                    <span className="text-signal">Gratis</span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>IVA incluido</span>
                    <span>21 %</span>
                  </div>
                  <div className="flex items-baseline justify-between pt-2 text-fg">
                    <span className="text-[13px]">Total</span>
                    <span className="font-mono text-[20px] tracking-tight">139 €</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={checkout}
                  disabled={status === "loading"}
                  className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Conectando con Stripe…
                    </>
                  ) : (
                    <>
                      <CreditCard size={16} /> Pagar con Stripe
                    </>
                  )}
                </button>

                <p className="mt-2.5 flex items-center justify-center gap-1.5 font-mono text-[8.5px] tracking-[0.06em] text-muted/60">
                  <Lock size={9} /> PAGO SEGURO · TARJETA, BIZUM Y APPLE PAY
                </p>

                {status === "demo" ? (
                  <div className="mt-4 rounded-lg border border-accent/30 bg-accent/[0.06] px-3 py-2.5">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] text-accent">
                      <AlertCircle size={11} /> MODO DEMO
                    </div>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-muted">{message}</p>
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/[0.06] px-3 py-2.5">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] text-red-400">
                      <AlertCircle size={11} /> ERROR
                    </div>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-muted">{message}</p>
                  </div>
                ) : null}
              </div>

              <div className="border-t border-line/[0.07] bg-line/[0.025] px-5 py-4">
                <div className="mb-2.5 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] text-muted">
                  <Package size={11} /> EN LA CAJA
                </div>
                <ul className="space-y-1.5">
                  {INCLUDED_IN_BOX.map((item) => (
                    <li key={item} className="flex gap-2 text-[11px] text-muted">
                      <Check size={11} className="mt-0.5 shrink-0 text-signal/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
