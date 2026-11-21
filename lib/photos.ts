/**
 * Fotos reales del producto.
 *
 * Deja los archivos en /public/render/ (frente.jpg, trasera.jpg, angulo.jpg…)
 * y escribe aquí la ruta pública, por ejemplo: "/render/frente.jpg".
 * Mientras `src` sea null, la web dibuja el render 3D en CSS de components/device.tsx.
 *
 * Recomendado: 1600 × 2000 px, fondo claro neutro, luz suave lateral.
 */
export type Photo = {
  src: string | null;
  alt: string;
};

export const PHOTOS: Record<string, Photo> = {
  hero: {
    src: null,
    alt: "TREGUA T1 visto de tres cuartos sobre fondo claro",
  },
  front: {
    src: null,
    alt: "TREGUA T1 de frente, pantalla encendida y teclado T9",
  },
  back: {
    src: null,
    alt: "Tapa trasera de TREGUA T1 con cámara de 2 MP y altavoz",
  },
  keypad: {
    src: null,
    alt: "Detalle del teclado T9 retroiluminado de TREGUA T1",
  },
  screen: {
    src: null,
    alt: "Detalle de la pantalla de 2,8 pulgadas de TREGUA T1",
  },
  hand: {
    src: null,
    alt: "TREGUA T1 sostenido con una mano",
  },
  street: {
    src: null,
    alt: "Persona usando TREGUA T1 en la calle",
  },
  cafe: {
    src: null,
    alt: "TREGUA T1 sobre la mesa de una cafetería, junto a un café",
  },
};
