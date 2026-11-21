import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const COLUMNS = [
  {
    title: "Producto",
    links: [
      { label: "Filosofía", href: "#filosofia" },
      { label: "Galería", href: "#galeria" },
      { label: "Para quién es", href: "#para-quien" },
      { label: "Especificaciones", href: "#especificaciones" },
      { label: "Simulador", href: "#simulador" },
      { label: "Comprar T1", href: "#comprar" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Envíos y plazos", href: "/legal/envios" },
      { label: "Garantía y devoluciones", href: "/legal/devoluciones" },
      { label: "Soporte por WhatsApp", href: "https://wa.me/34600123456" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/legal/privacidad" },
      { label: "Términos de venta", href: "/legal/terminos" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Aviso legal", href: "/legal/aviso-legal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/[0.08] pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[320px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,77,0,0.07),transparent_65%)] blur-2xl"
      />
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(255,77,0,0.6)]" />
              <span className="text-[13px] font-semibold tracking-[0.28em]">TREGUA</span>
              <span className="rounded border border-line/15 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.12em] text-muted">
                T1
              </span>
            </div>

            <p className="mt-5 max-w-sm text-pretty text-[13px] leading-relaxed text-muted">
              No vendemos nostalgia ni una cura milagrosa. Vendemos un móvil que hace lo justo,
              para que el tiempo vuelva a ser tuyo. Diseñado y soportado desde España.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[12.5px] text-fg/80 transition-colors hover:text-accent"
              >
                <MessageCircle size={13} />
                WhatsApp · +34 600 123 456
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
              <a
                href="mailto:hola@tregua.es"
                className="group inline-flex items-center gap-2 text-[12.5px] text-fg/80 transition-colors hover:text-accent"
              >
                <Mail size={13} />
                hola@tregua.es
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="mono-label">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[12.5px] text-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line/[0.07] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] tracking-[0.1em] text-muted/50">
            © 2026 TREGUA · HECHO EN ESPAÑA · PRECIOS CON IVA
          </p>
          <p className="font-mono text-[9px] tracking-[0.1em] text-muted/40">
            [ BUILD 2026.11 · SYSTEM LOCKED ]
          </p>
        </div>
      </div>

      {/* Marca de agua tipográfica */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden pb-2 text-center"
      >
        <span className="block translate-y-[24%] bg-gradient-to-b from-line/[0.07] to-transparent bg-clip-text text-[18vw] font-semibold leading-none tracking-tighter text-transparent">
          TREGUA
        </span>
      </div>
    </footer>
  );
}
