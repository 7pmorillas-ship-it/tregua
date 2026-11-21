import { ArrowDownRight, MessageCircle, Truck } from "lucide-react";
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
      <div className="shell">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted">
          <span className="h-1 w-1 rounded-full bg-accent" />
          TELÉFONO DETOX · HECHO EN ESPAÑA
        </div>

        <h1 className="mt-6 animate-fade-up text-balance text-[40px] font-semibold leading-[0.98] tracking-tightest sm:text-[54px] lg:text-[70px] xl:text-[80px]">
          Recupera tu
          <br />
          tiempo<span className="text-accent">.</span>
        </h1>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-8">
          <div>
            <p
              className="max-w-md animate-fade-up text-pretty text-[15px] leading-relaxed text-muted sm:text-base"
              style={{ animationDelay: "90ms" }}
            >
              Hay una vida entera fuera del scroll. TREGUA te deja estar localizable, escuchar música,
              llegar a cualquier sitio y pagar lo que necesites, sin llevarte internet entero en el bolsillo.{" "}
              <span className="text-fg">Un móvil que te devuelve la atención.</span>
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

            <a href="https://wa.me/34600123456?text=Hola%20TREGUA%2C%20quiero%20saber%20si%20pod%C3%A9is%20a%C3%B1adir%20una%20app" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-[12px] text-muted transition-colors hover:text-accent">
              <MessageCircle size={14} /> ¿Necesitas otra app? Escríbenos y lo vemos juntos ↗
            </a>

            <p
              className="mt-4 animate-fade-up font-mono text-[10px] uppercase tracking-[0.14em] text-accent"
              style={{ animationDelay: "180ms" }}
            >
              Pago único · 134 € sin bloqueo, 144 € blindado
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
      </div>
    </section>
  );
}
