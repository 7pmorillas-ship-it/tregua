import { ArrowDownRight, Truck } from "lucide-react";
import { Device } from "@/components/device";
import { RealPhoto } from "@/components/photo";
import { HomeScreen } from "@/components/phone/screen-ui";

const STATS = [
  { value: "−3 h 12 min", label: "de pantalla al día" },
  { value: "3–5 días", label: "de batería real" },
  { value: "0", label: "apps adictivas" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-32">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-8%] -z-10 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,150,100,0.18),transparent_62%)] blur-3xl"
      />

      <div className="shell">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted">
          <span className="h-1 w-1 rounded-full bg-accent" />
          TELÉFONO DETOX · HECHO EN ESPAÑA
        </div>

        <h1 className="mt-6 animate-fade-up text-balance text-[40px] font-semibold leading-[0.98] tracking-tightest sm:text-[54px] lg:text-[70px] xl:text-[80px]">
          Todo lo que necesitas.
          <br />
          Nada que te robe <span className="text-accent">el tiempo.</span>
        </h1>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-8">
          <div>
            <p
              className="max-w-md animate-fade-up text-pretty text-[15px] leading-relaxed text-muted sm:text-base"
              style={{ animationDelay: "90ms" }}
            >
              Un teléfono de teclas con Android 13 blindado de fábrica. WhatsApp, Maps, Spotify y tu
              banco funcionan; las redes sociales y el navegador libre no existen.{" "}
              <span className="text-fg">No es una app: es otro móvil.</span>
            </p>

            <div
              className="mt-7 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "150ms" }}
            >
              <a href="#comprar" className="btn-primary group">
                Comprar desde 134 €
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a href="#galeria" className="btn-ghost">
                Ver cómo es
              </a>
            </div>

            <p
              className="mt-4 animate-fade-up font-mono text-[10px] uppercase tracking-[0.14em] text-accent"
              style={{ animationDelay: "180ms" }}
            >
              Precio de lanzamiento · después del primer lote, 159 €
            </p>

            <p
              className="mt-6 flex animate-fade-up items-center gap-2 font-mono text-[10px] tracking-[0.06em] text-muted"
              style={{ animationDelay: "210ms" }}
            >
              <Truck size={12} className="text-muted/70" />
              Envío 24/48 h desde España · Llega listo para tu SIM
            </p>
          </div>

          {/* Dispositivo */}
          <div className="relative mx-auto w-full max-w-[400px] lg:justify-self-end">
            <div className="relative mx-auto w-[252px] animate-fade-up sm:w-[288px]">
              <span className="absolute -left-3 top-14 z-20 hidden -translate-x-full whitespace-nowrap rounded-full border border-line/15 bg-card/85 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] text-muted backdrop-blur xl:inline-flex">
                [ SYSTEM: LOCKED ]
              </span>
              <span className="absolute -right-3 bottom-28 z-20 hidden translate-x-full whitespace-nowrap rounded-full border border-accent/30 bg-card/85 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] text-accent backdrop-blur xl:inline-flex">
                [ WHATSAPP READY ]
              </span>

              <RealPhoto
                name="hero"
                fallback={
                  <Device
                    tilt
                    size="md"
                    screen={<HomeScreen time="07:42" selected={0} dial="" />}
                    ariaLabel="Teléfono TREGUA T1 en negro mate"
                    className="animate-fade-up"
                  />
                }
              />
            </div>
          </div>
        </div>

        {/* Datos rápidos */}
        <dl className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line/[0.08] bg-line/[0.07]">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-bg px-4 py-4 sm:px-5">
              <dt className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-1 font-mono text-lg tracking-tight text-fg sm:text-xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
