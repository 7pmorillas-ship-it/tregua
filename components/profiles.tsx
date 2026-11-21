"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Accessibility, BatteryCharging, Check, Users, type LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { PROFILES } from "@/lib/content";
import { publicPath } from "@/lib/photos";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  users: Users,
  accessibility: Accessibility,
  "battery-charging": BatteryCharging,
};

const PROFILE_IMAGES: Record<string, { src: string; alt: string }> = {
  familias: {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85",
    alt: "Adolescente al aire libre con un teléfono en la mano",
  },
  mayores: {
    src: publicPath("/photos/abuela-ventana.jpg"),
    alt: "Mujer mayor junto a una ventana con un teléfono en la mano",
  },
  detox: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    alt: "Persona joven conversando en una mesa sin mirar una pantalla",
  },
};

export function Profiles() {
  const [active, setActive] = useState(0);
  const profile = PROFILES[active];
  const Icon = ICONS[profile.icon] ?? Users;

  return (
    <section id="para-quien" className="relative border-t border-line/[0.06] py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="03"
            kicker="Para quién es"
            title={
              <>
                Tres personas.
                <br />
                <span className="text-muted">Un mismo teléfono.</span>
              </>
            }
            description="El mismo hardware, tres configuraciones. Elige por lo que necesitas proteger, no por la edad que tengas."
          />
        </Reveal>

        {/* Tabs */}
        <div className="mt-10">
          <div
            role="tablist"
            aria-label="Perfiles de usuario"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
          >
            {PROFILES.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "relative shrink-0 rounded-full border px-4 py-2.5 text-left transition-colors",
                  i === active
                    ? "border-transparent text-bg"
                    : "border-line/10 text-muted hover:border-line/25 hover:text-fg",
                )}
              >
                {i === active ? (
                  <motion.span
                    layoutId="profile-pill"
                    className="absolute inset-0 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                ) : null}
                <span className="relative flex items-baseline gap-2">
                  <span className="font-mono text-[9px] tracking-[0.12em] opacity-60">
                    {p.kicker}
                  </span>
                  <span className="text-[13px] font-medium">{p.title}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface relative overflow-hidden p-6 sm:p-9"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,77,0,0.08),transparent_65%)]"
                />
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line/10 bg-line/[0.03] text-accent">
                        <Icon size={17} strokeWidth={1.6} />
                      </span>
                      <div>
                        <div className="mono-label">{profile.kicker}</div>
                        <h3 className="text-xl font-medium tracking-tight">{profile.title}</h3>
                      </div>
                    </div>

                    <p className="mt-5 text-[17px] font-medium leading-snug tracking-tight text-fg sm:text-lg">
                      {profile.subtitle}
                    </p>
                    <p className="mt-3 max-w-lg text-pretty text-[14px] leading-relaxed text-muted">
                      {profile.body}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/[0.06] px-3 py-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                        {profile.stat}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {PROFILE_IMAGES[profile.id] ? (
                      <figure className="overflow-hidden rounded-xl border border-line/[0.07] bg-line/[0.025]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={PROFILE_IMAGES[profile.id].src}
                          alt={PROFILE_IMAGES[profile.id].alt}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover"
                        />
                        <figcaption className="px-4 py-2.5 text-[11px] text-muted">
                          Un primer móvil para estar conectado sin estar enganchado.
                        </figcaption>
                      </figure>
                    ) : null}
                    <div className="rounded-xl border border-line/[0.07] bg-line/[0.025] p-4 sm:p-5">
                      <div className="mono-label mb-3">EN LA PRÁCTICA</div>
                    <ul className="space-y-2.5">
                      {profile.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-[12.5px] leading-relaxed text-fg/75">
                          <Check size={13} className="mt-0.5 shrink-0 text-signal" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#comprar"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-line/15 py-2.5 text-[12px] font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      Ver configuración recomendada
                    </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
