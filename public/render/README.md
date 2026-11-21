# Fotos reales del dispositivo

El frontal, la trasera y la galería están renderizados en CSS (`components/device.tsx`), así que la
web funciona sin imágenes. Si consigues fotos de estudio, sustitúyelas por:

- `t1-front.png` — frontal, fondo transparente, 1080 × 2280, sin sombra dura.
- `t1-back.png` — trasera, misma proporción.
- `t1-angle.png` — tres cuartos sobre fondo neutro claro.
- `t1-keypad.png` — macro del teclado.
- `t1-screen.png` — macro de la pantalla encendida.

Uso en la galería o el hero:

```tsx
import Image from "next/image";

<div className="relative aspect-[9/20] w-[260px]">
  <Image src="/render/t1-front.png" alt="TREGUA T1" fill className="object-contain" priority />
</div>
```

Mantén el fondo claro (papel) y una sombra suave propia: la dirección de arte actual es luminosa,
no un mockup flotante sobre negro.
