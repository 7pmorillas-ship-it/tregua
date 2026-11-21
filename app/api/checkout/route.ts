import { NextResponse } from "next/server";
import { MODES } from "@/lib/content";

const PRICE_CENTS = 13900;

export async function POST(request: Request) {
  let mode = "essential";

  try {
    const body = (await request.json()) as { mode?: string };
    if (body.mode === "monk") mode = "monk";
  } catch {
    /* cuerpo vacío: modo por defecto */
  }

  const modeData = MODES.find((m) => m.id === mode) ?? MODES[0];
  const secret = process.env.STRIPE_SECRET_KEY;

  // Sin clave configurada: la UI muestra el aviso de modo demo en lugar de romperse.
  if (!secret) {
    return NextResponse.json({
      demo: true,
      mode,
      message: "Checkout listo. Falta STRIPE_SECRET_KEY en .env.local.",
    });
  }

  const origin =
    request.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  const body = new URLSearchParams();
  body.set("mode", "payment");
  body.set("success_url", `${origin}/gracias?session_id={CHECKOUT_SESSION_ID}`);
  body.set("cancel_url", `${origin}/#comprar`);
  body.set("locale", "es");
  body.set("customer_creation", "always");
  body.set("billing_address_collection", "auto");
  body.set("metadata[mode]", mode);
  body.set("line_items[0][quantity]", "1");
  body.set("line_items[0][price_data][currency]", "eur");
  body.set("line_items[0][price_data][unit_amount]", String(PRICE_CENTS));
  body.set("line_items[0][price_data][product_data][name]", `TREGUA T1 · ${modeData.name}`);
  body.set(
    "line_items[0][price_data][product_data][description]",
    "Teléfono detox con Android 13 blindado. Envío 24/48h desde España.",
  );

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("[stripe]", response.status, detail);
    return NextResponse.json(
      { error: "No se pudo crear la sesión de pago. Prueba de nuevo en un minuto." },
      { status: 502 },
    );
  }

  const session = (await response.json()) as { url?: string };
  if (!session.url) {
    return NextResponse.json({ error: "Stripe no devolvió una URL de pago." }, { status: 502 });
  }

  return NextResponse.json({ url: session.url, mode });
}
