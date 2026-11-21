/**
 * Fotos reales del producto.
 *
 * Deja los archivos en /public/render/ (frente.jpg, trasera.jpg, angulo.jpg…)
 * y escribe aquí la ruta pública, por ejemplo: "/render/frente.jpg".
 * Mientras `src` sea null, la web muestra un hueco etiquetado para no enseñar una recreación del producto.
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
    src: "/photos/abuela-ventana.jpg",
    alt: "Mujer mayor junto a una ventana con un teléfono en la mano",
  },
  street: {
    src: "/photos/autobus.jpg",
    alt: "Mujer sentada en un autobús mirando su teléfono",
  },
  cafe: {
    src: null,
    alt: "TREGUA T1 sobre una mesa de cafetería",
  },
};
