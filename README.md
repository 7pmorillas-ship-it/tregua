# TREGUA T1 — landing y tienda

Landing + checkout de una marca española de teléfonos de teclas con Android blindado por MDM (Device Owner).
Next.js 15 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion · Lucide.

## Arrancar

```bash
npm install
cp .env.example .env.local   # opcional: STRIPE_SECRET_KEY
npm run dev                  # http://localhost:3000
npm run build && npm start   # producción
```

Sin `STRIPE_SECRET_KEY` el botón de compra responde en **modo demo** (no rompe la UI). Con clave real
crea una Checkout Session de Stripe con el precio del modelo elegido (134 € o 139 €) y redirige a `/gracias`.

Precios y márgenes: `docs/PRECIOS.md`. Fotos reales: deja los archivos en `public/render/`
y escribe la ruta en `lib/photos.ts`; mientras `src` sea `null` se dibuja el render 3D.

## Estructura

```
app/
  layout.tsx            fuentes, metadata, script de tema
  page.tsx              composición de secciones
  globals.css           tokens (--bg/--card/--fg/--muted/--line), utilidades key-cap/grid-lines
  api/checkout/route.ts Stripe Checkout (fetch directo, sin SDK)
  gracias/page.tsx      post-compra
  legal/[slug]/page.tsx privacidad, términos, envíos, devoluciones, cookies, aviso legal
components/
  navbar.tsx            flotante, menú móvil, toggle claro/oscuro
  hero.tsx              headline, CTAs, render del dispositivo, precio de lanzamiento
  stats.tsx             cinta de datos + panel oscuro con cifras de uso y coste real
  philosophy.tsx        bento "entra / se queda fuera"
  photo.tsx             wrapper: usa la foto real si existe en /public/render/
  phone/screen-ui.tsx   pantallas (interfaz clara, app, bloqueo MDM, llamada)
  device.tsx            cuerpo del T1 en 3D CSS (frontal y trasera, teclas interactivas)
  gallery.tsx           galería "Míralo de cerca": 5 vistas y 2 macros
  profiles.tsx          tabs 3 perfiles con transición
  specs.tsx             ficha técnica + comparativa de 3 columnas
  configurator.tsx      T1 Blindado / T1 Abierto, licencia, resumen, Stripe
  faq.tsx               acordeón
  footer.tsx            manifiesto, legales, contacto
  sticky-buy.tsx        barra de compra móvil
lib/content.ts          TODO el copy y los datos (un solo sitio para editar)
docs/BENCHMARKING.md    conclusiones de Light Phone, Punkt, Balance, Mudita, Unpluq
public/render/          renders reales del dispositivo
```

## Cambios habituales

- **Precio**: `lib/content.ts` (`PRICE`, `MODES`) y `app/api/checkout/route.ts` (`PRICE_CENTS`).
- **Apps permitidas / bloqueadas**: listas `ESSENTIALS` y `BLOCKED` + `PHONE_APPS` en `phone/screen-ui.tsx`.
- **Renders reales**: ver `public/render/README.md`.
- **WhatsApp de soporte**: buscar `34600123456` (Navbar no lo usa; FAQ, footer y configurador sí).
- **Datos fiscales**: `app/legal/[slug]/page.tsx` (aviso legal) y páginas de términos.
- **Analítica**: no hay ninguna instalada a propósito. Añade la que uses respetando la política de cookies.

## Decisiones de diseño

- Un único acento (`#FF4D00`); el verde (`#00E599`) se reserva para estados "permitido/activo".
- Etiquetas monoespaciadas en mayúsculas con corchetes para todo lo que suena a sistema.
- El dispositivo siempre es oscuro, incluso en modo papel: reproduce un objeto físico.
- Movimiento con `[0.16, 1, 0.3, 1]`, entradas de 0,7 s una sola vez, y `prefers-reduced-motion` respetado.
- Mobile-first: nav colapsable, tabs con scroll horizontal, tabla comparativa con scroll, barra de compra fija.
