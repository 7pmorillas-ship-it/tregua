import {
  Ban,
  Banknote,
  Camera,
  Car,
  Check,
  Contrast,
  Download,
  Flashlight,
  Globe,
  Instagram,
  Lock,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  ShieldOff,
  Video,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { ESSENTIALS, BLOCKED } from "@/lib/content";

const ESSENTIAL_ICONS: Record<string, LucideIcon> = {
  WhatsApp: MessageCircle,
  "Google Maps": MapPin,
  Spotify: Music2,
  "Banco + Bizum": Banknote,
  "Llamadas y SMS": Phone,
  "Cámara 2 MP": Camera,
  "Linterna y reloj": Flashlight,
  "Uber / Cabify": Car,
};

const BLOCKED_ICONS: Record<string, LucideIcon> = {
  Instagram: Instagram,
  TikTok: Video,
  YouTube: Youtube,
  "Chrome / navegador libre": Globe,
  "Play Store": Download,
  "Facebook, X, Twitch": ShieldOff,
};

const MINI = [
  {
    icon: Download,
    title: "Sin Play Store",
    body: "No hay tienda. No hay «instalar sólo un momento». La lista blanca se decide antes del envío.",
    tag: "MDM-01",
  },
  {
    icon: Globe,
    title: "Sin navegador libre",
    body: "Los enlaces de WhatsApp se abren sólo en dominios de confianza. Nada de scroll infinito.",
    tag: "MDM-07",
  },
  {
    icon: Contrast,
    title: "Escala de grises nativa",
    body: "Un interruptor que apaga el color de todo el sistema. Menos deseo de mirar la pantalla.",
    tag: "UX-03",
  },
];

export function Philosophy() {
  return (
    <section id="filosofia" className="relative border-t border-line/[0.06] py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="01"
            kicker="Filosofía"
            title={
              <>
                Lo que entra.
                <br />
                <span className="text-muted">Y lo que se queda fuera.</span>
              </>
            }
            description="No es un modo enfoque que se desactiva con dos toques. Es el sistema operativo: hay una lista blanca y, fuera de ella, el teléfono no instala, no abre y no deja."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {/* Herramientas activas */}
          <Reveal className="md:col-span-2" delay={0.05}>
            <div className="card-surface group relative h-full overflow-hidden p-5 transition-colors duration-500 hover:border-line/20 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_rgba(0,229,153,0.7)]" />
                    [ HABILITADO ]
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-tight">Herramientas esenciales</h3>
                </div>
                <span className="hidden rounded border border-line/10 px-2 py-1 font-mono text-[9px] tracking-[0.1em] text-muted sm:block">
                  8 APPS · NIVEL SISTEMA
                </span>
              </div>

              <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line/[0.07] bg-line/[0.06] sm:grid-cols-2">
                {ESSENTIALS.map((item) => {
                  const Icon = ESSENTIAL_ICONS[item.name] ?? Check;
                  return (
                    <li
                      key={item.name}
                      className="group/item flex items-start gap-3 bg-card p-3.5 transition-colors hover:bg-line/[0.02]"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line/10 bg-line/[0.03] text-fg/70 transition-colors group-hover/item:border-accent/40 group-hover/item:text-accent">
                        <Icon size={13} strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] font-medium text-fg/90">{item.name}</span>
                        <span className="mt-0.5 block text-[11px] leading-snug text-muted">
                          {item.detail}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-4 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.08em] text-muted/70">
                <Check size={11} className="text-signal" /> Todas funcionan con notificaciones y 4G real.
              </p>
            </div>
          </Reveal>

          {/* Bloqueado */}
          <Reveal delay={0.12}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-accent/20 bg-[linear-gradient(180deg,rgba(255,77,0,0.09),rgba(18,18,21,0)_55%)] p-5 sm:p-7">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-accent">
                <Lock size={11} />
                [ BLOQUEADO · MDM ]
              </div>
              <h3 className="mt-2 text-xl font-medium tracking-tight">Fuera del sistema</h3>

              <ul className="mt-6 space-y-0.5">
                {BLOCKED.map((item) => {
                  const Icon = BLOCKED_ICONS[item.name] ?? Ban;
                  return (
                    <li
                      key={item.name}
                      className="group/block flex items-center gap-3 rounded-lg px-0 py-2.5 transition-colors hover:bg-line/[0.03]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-line/10 text-muted/60">
                        <Icon size={11} strokeWidth={1.5} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13px] text-muted line-through decoration-accent/50 decoration-1">
                          {item.name}
                        </span>
                        <span className="block truncate font-mono text-[9px] tracking-[0.04em] text-muted/50">
                          {item.detail}
                        </span>
                      </span>
                      <Ban size={12} className="shrink-0 text-accent/50" />
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 rounded-lg border border-line/[0.07] bg-line/[0.025] px-3 py-2 font-mono text-[8px] leading-relaxed tracking-[0.1em] text-muted/60">
                POLICY · TREGUA-OWNER-v3
                <br />
                NO ELIMINABLE DESDE AJUSTES
              </div>
            </div>
          </Reveal>

          {/* Mini tarjetas */}
          <Reveal className="md:col-span-3" delay={0.16}>
            <div className="grid gap-3 sm:grid-cols-3">
              {MINI.map((mini) => (
                <div
                  key={mini.title}
                  className="card-surface group flex flex-col justify-between gap-6 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line/20"
                >
                  <div className="flex items-start justify-between">
                    <mini.icon size={16} strokeWidth={1.5} className="text-fg/60" />
                    <span className="font-mono text-[9px] tracking-[0.12em] text-muted/50">
                      {mini.tag}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium">{mini.title}</h4>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{mini.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
