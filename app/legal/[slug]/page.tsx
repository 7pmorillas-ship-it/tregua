import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type LegalPage = {
  title: string;
  updated: string;
  intro: string;
  blocks: Array<{ h: string; p: string }>;
};

const PAGES: Record<string, LegalPage> = {
  privacidad: {
    title: "Política de privacidad",
    updated: "2026-01-15",
    intro:
      "TREGUA solo recoge los datos necesarios para enviarte el pedido y darte soporte. No hay perfiles publicitarios, ni píxeles de redes sociales, ni venta de datos a terceros.",
    blocks: [
      {
        h: "Qué datos tratamos",
        p: "Nombre, dirección de envío, email, teléfono y datos de facturación. Los datos de pago los procesa Stripe: nosotros nunca vemos el número de tu tarjeta.",
      },
      {
        h: "Para qué",
        p: "Gestionar el pedido, la garantía y el soporte. Si aceptas, enviarte como máximo un email cuando haya nuevas unidades o cambios de firmware.",
      },
      {
        h: "El teléfono",
        p: "El T1 no envía telemetría a TREGUA. La configuración MDM se aplica en local, en el dispositivo, y no incluye seguimiento remoto del uso.",
      },
      {
        h: "Tus derechos",
        p: "Puedes pedir acceso, rectificación o borrado escribiendo a hola@tregua.es. Respondemos en un máximo de 30 días.",
      },
    ],
  },
  terminos: {
    title: "Términos de venta",
    updated: "2026-01-15",
    intro:
      "Compra directa a TREGUA. Precios con IVA incluido. Al confirmar el pedido aceptas estas condiciones y renuncias a la instalación de software no autorizado.",
    blocks: [
      {
        h: "Precio y pago",
        p: "T1 Blindado: 144 €. T1 Abierto: 134 €. Pago único, sin suscripciones ni renovaciones. Envío gratuito en península. El cobro se realiza al confirmar el pedido mediante Stripe.",
      },
      {
        h: "Envío",
        p: "24/48 h laborables desde España, con seguimiento. Baleares, Canarias, Ceuta y Melilla pueden tener recargo de transportista.",
      },
      {
        h: "Desistimiento",
        p: "30 días desde la recepción, sin justificar el motivo. El teléfono debe volver con su caja y accesorios; lo restablecemos y verificamos.",
      },
      {
        h: "Garantía",
        p: "Dos años de garantía legal. No cubre daños físicos, agua ni la manipulación del firmware o de la política MDM.",
      },
    ],
  },
  envios: {
    title: "Envíos y plazos",
    updated: "2026-01-15",
    intro:
      "Todo sale desde Madrid. Si pides antes de las 14:00 en día laborable, entra en el camión esa misma tarde.",
    blocks: [
      { h: "Península", p: "24/48 h laborables. Gratis." },
      {
        h: "Baleares, Canarias, Ceuta y Melilla",
        p: "48/72 h laborables con recargo de transportista. El IVA y los aranceles se calculan al pagar según destino.",
      },
      {
        h: "Seguimiento",
        p: "Recibes un email con el número de seguimiento el mismo día en que sale el paquete.",
      },
    ],
  },
  devoluciones: {
    title: "Devoluciones y garantía",
    updated: "2026-01-15",
    intro:
      "Treinta días para devolverlo y dos años de garantía. Sin formularios eternos: escríbenos por WhatsApp y te mandamos la etiqueta.",
    blocks: [
      {
        h: "Cómo devolver",
        p: "Escríbenos con tu número de pedido. Te enviamos una etiqueta de devolución. Al recibirlo comprobamos que esté completo y te devolvemos el importe por el mismo método de pago en 5 días laborables.",
      },
      {
        h: "Qué no cubre la garantía",
        p: "Golpes, pantalla rota, agua, intentos de desbloqueo del firmware o manipulación del dispositivo.",
      },
      {
        h: "Desbloqueo definitivo",
        p: "Si vendes el teléfono, podemos liberar la política MDM con tu factura. Es un servicio manual, no un botón.",
      },
    ],
  },
  cookies: {
    title: "Cookies",
    updated: "2026-01-15",
    intro:
      "Esta web no usa cookies de publicidad ni de analítica de terceros. Solo guarda tu preferencia de tema (claro u oscuro) en el almacenamiento local del navegador.",
    blocks: [
      {
        h: "Almacenamiento local",
        p: "La clave tregua-theme conserva si prefieres modo claro u oscuro. Puedes borrarla desde los ajustes de tu navegador sin que afecte a la compra.",
      },
      { h: "Pagos", p: "Stripe gestiona su propia página de pago con sus cookies técnicas." },
    ],
  },
  "aviso-legal": {
    title: "Aviso legal",
    updated: "2026-01-15",
    intro:
      "TREGUA es una marca española de teléfonos de desconexión digital. Este sitio es una demostración de producto; sustituye los datos fiscales antes de publicar.",
    blocks: [
      {
        h: "Titular",
        p: "TREGUA · [Razón social], NIF [número], domicilio en [dirección], Madrid, España.",
      },
      { h: "Contacto", p: "hola@tregua.es · +34 600 123 456" },
      {
        h: "Propiedad intelectual",
        p: "La marca, los textos y el diseño de esta web son propiedad de TREGUA. Las marcas de terceros citadas (WhatsApp, Google Maps, Spotify) pertenecen a sus titulares.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return {};
  return { title: `${page.title} — TREGUA`, description: page.intro };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <main className="shell max-w-3xl py-16 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft size={12} /> VOLVER
      </Link>

      <div className="mt-8 flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-accent">
        <span className="h-1 w-1 rounded-full bg-accent" />
        TREGUA · DOCUMENTO LEGAL
      </div>
      <h1 className="mt-3 text-3xl font-semibold tracking-tightest sm:text-4xl">{page.title}</h1>
      <p className="mt-4 text-pretty text-[14px] leading-relaxed text-muted">{page.intro}</p>
      <p className="mt-2 font-mono text-[9px] tracking-[0.1em] text-muted/50">
        ACTUALIZADO {page.updated}
      </p>

      <div className="mt-10 border-t border-line/[0.08]">
        {page.blocks.map((block) => (
          <section key={block.h} className="border-b border-line/[0.08] py-6">
            <h2 className="text-[15px] font-medium tracking-tight">{block.h}</h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{block.p}</p>
          </section>
        ))}
      </div>

      <p className="mt-10 font-mono text-[9px] leading-relaxed tracking-[0.06em] text-muted/50">
        ¿Dudas? hola@tregua.es · Este documento es una plantilla y no sustituye la revisión de un
        abogado antes de operar.
      </p>
    </main>
  );
}
