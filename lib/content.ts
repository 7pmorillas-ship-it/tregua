export const PRICE = 139;

export const MODES = [
  {
    id: "essential",
    name: "Modo Esencial",
    tag: "Recomendado",
    price: PRICE,
    pitch: "Vida moderna, sin el ruido. Para el 90 % de la gente.",
    includes: [
      "WhatsApp (mensajes, llamadas, vídeo)",
      "Google Maps con navegación",
      "Spotify",
      "App de tu banco + Bizum",
      "Cámara, linterna, reloj, calculadora",
    ],
    excludes: ["Redes sociales", "YouTube", "Navegador libre", "Play Store"],
  },
  {
    id: "monk",
    name: "Modo Monje / Junior",
    tag: "Ultra-estricto",
    price: PRICE,
    pitch: "Para un primer móvil o para cortar el scroll de raíz.",
    includes: [
      "Llamadas y SMS",
      "WhatsApp (mensajes y llamadas)",
      "Google Maps",
      "Ubicación compartida con un tutor",
      "Cámara y linterna",
    ],
    excludes: [
      "Spotify",
      "Banca",
      "Navegador",
      "Play Store",
      "Cualquier instalación",
    ],
  },
] as const;

export type ModeId = (typeof MODES)[number]["id"];

export const ESSENTIALS = [
  { name: "WhatsApp", detail: "Mensajes, llamadas y vídeo" },
  { name: "Google Maps", detail: "Navegación y transporte" },
  { name: "Spotify", detail: "Música y podcasts sin feed" },
  { name: "Banco + Bizum", detail: "CaixaBank, BBVA, Santander, Revolut…" },
  { name: "Llamadas y SMS", detail: "Cobertura 4G real" },
  { name: "Cámara 2 MP", detail: "Fotos sin galería infinita" },
  { name: "Linterna y reloj", detail: "Lo que de verdad usas a diario" },
  { name: "Uber / Cabify", detail: "Pide coche, no abras el feed" },
];

export const BLOCKED = [
  { name: "Instagram", detail: "Bloqueo por política MDM" },
  { name: "TikTok", detail: "Bloqueo por política MDM" },
  { name: "YouTube", detail: "Sin app y sin navegador" },
  { name: "Chrome / navegador libre", detail: "Solo enlaces de confianza" },
  { name: "Play Store", detail: "No se puede instalar nada" },
  { name: "Facebook, X, Twitch", detail: "Fuera de la lista blanca" },
];

export const PROFILES = [
  {
    id: "familias",
    kicker: "Perfil 01",
    title: "Padres e hijos",
    subtitle: "El primer móvil que no da miedo.",
    body: "Tu hijo tiene 12 años y necesita estar localizable, no tener un casino en el bolsillo. Con T1 habla por WhatsApp y llama, pero no hay redes sociales, ni contenido adulto, ni forma de saltarse el bloqueo. La configuración se aplica desde el sistema, no desde una app que se pueda desactivar.",
    bullets: [
      "Bloqueo Device Owner: no se puede desinstalar ni eludir desde Ajustes",
      "GPS y ubicación compartida con el tutor",
      "Sin navegador libre ni instalación de APKs",
      "Llamadas y WhatsApp con contactos autorizados",
    ],
    stat: "0 apps adictivas instalables",
    icon: "users",
  },
  {
    id: "mayores",
    kicker: "Perfil 02",
    title: "Personas mayores",
    subtitle: "Teclas de verdad. Letra grande. Cero líos.",
    body: "Pantalla táctil clara con iconos grandes en alto contraste, teclado físico retroiluminado que se pulsa sin mirar y volumen alto. Sin menús escondidos, sin anuncios, sin actualizaciones que cambian todo de sitio. WhatsApp y las llamadas funcionan como siempre.",
    bullets: [
      "Teclas físicas grandes, con respuesta clara al pulsar",
      "Escala de grises y alto contraste nativos",
      "Volumen alto y timbre potente",
      "Sin publicidad, sin notificaciones basura",
    ],
    stat: "Iconos de 64 px · contraste 7:1",
    icon: "accessibility",
  },
  {
    id: "detox",
    kicker: "Perfil 03",
    title: "Detox y foco",
    subtitle: "Recupera tus tardes. Sin renunciar a tu vida.",
    body: "Sigues pagando con Bizum, pidiendo un Uber y escuchando Spotify en el metro. Lo que desaparece es el scroll infinito, las notificaciones y las tres horas de pantalla que no sabes de dónde salieron. El móvil vuelve a ser una herramienta, no un pasatiempo.",
    bullets: [
      "3 h 12 min menos de pantalla al día (media declarada por usuarios)",
      "Modo escala de grises para bajar el impulso de mirar",
      "Batería que aguanta días, no horas",
      "Sin Play Store: la tentación no está a un toque",
    ],
    stat: "−3 h 12 min / día de media",
    icon: "battery-charging",
  },
] as const;

export const SPECS = [
  { label: "Pantalla", value: 'IPS 2.8" táctil · 480 × 640', note: "Alto contraste" },
  { label: "Teclado", value: "T9 físico retroiluminado", note: "Pulsación real" },
  { label: "Sistema", value: "Android 13 · MDM Device Owner", note: "Capa TREGUA" },
  { label: "Red", value: "4G LTE · Dual SIM", note: "Nano-SIM" },
  { label: "Batería", value: "1.800 mAh extraíble", note: "Hasta 5 días en uso ligero" },
  { label: "Carga", value: "USB-C", note: "Cable incluido" },
  { label: "Cámara", value: "2 MP trasera", note: "Con flash / linterna" },
  { label: "Memoria", value: "2 GB RAM · 16 GB + microSD", note: "Hasta 128 GB" },
  { label: "Extras", value: "Jack 3,5 mm · Bluetooth 4.2 · GPS", note: "FM y manos libres" },
  { label: "Peso", value: "118 g", note: "Cuerpo negro mate" },
];

export const COMPARISON = {
  columns: ["Smartphone normal", "Dumbphone antiguo", "TREGUA T1"],
  rows: [
    { label: "WhatsApp", values: ["Sí", "No o fatal", "Sí, nativo"] },
    { label: "Google Maps", values: ["Sí", "No", "Sí, con navegación"] },
    { label: "Spotify", values: ["Sí", "No", "Sí"] },
    { label: "Banca / Bizum", values: ["Sí", "No", "Sí"] },
    { label: "Redes sociales", values: ["Sí (el problema)", "No", "Bloqueadas de raíz"] },
    { label: "Navegador libre", values: ["Sí", "No", "Restringido"] },
    { label: "Instalar apps", values: ["Todo", "Nada", "Solo lista blanca"] },
    { label: "Batería real", values: ["1 día", "5-7 días", "3-5 días"] },
    { label: "Se puede saltar el bloqueo", values: ["—", "—", "No, es Device Owner"] },
  ],
};

export const FAQS = [
  {
    q: "¿Funciona WhatsApp y WhatsApp Web?",
    a: "Sí. WhatsApp está preinstalado y verificado, con notificaciones, llamadas y vídeo. WhatsApp Web y Escritorio funcionan sin problema: el teléfono se vincula como cualquier otro Android. Lo que no podrás hacer es abrir enlaces externos desde el navegador integrado más allá de la lista de dominios permitidos.",
  },
  {
    q: "¿Puedo pagar con Bizum y ver mi banco?",
    a: "Sí. En el Modo Esencial están permitidas las apps de banca españolas más habituales (CaixaBank, BBVA, Santander, Sabadell, Bankinter, Revolut, N26…) y Bizum funciona dentro de ellas. Nos escribes antes de enviar el pedido y añadimos tu app a la lista blanca sin coste.",
  },
  {
    q: "¿Se puede desactivar el bloqueo fácilmente?",
    a: "No, y eso es el producto. El bloqueo se aplica como Device Owner: no aparece en Ajustes, no se puede desinstalar y un restablecimiento de fábrica no lo elimina (vuelve a aplicarse al arrancar). Si algún día decides venderlo o desbloquearlo, lo hacemos nosotros con un código de liberación y tu factura de compra.",
  },
  {
    q: "¿Y si necesito instalar una app puntual del trabajo o la universidad?",
    a: "Tienes dos vías: la app entra en la lista blanca de fábrica si la pides antes del envío, o pides una ventana temporal de instalación (24 h, con contraseña) para instalar y configurar lo que necesites. Pasado ese tiempo, la política vuelve a bloquear todo.",
  },
  {
    q: "¿Cuánto tarda el envío y desde dónde?",
    a: "Enviamos desde España en 24/48 h laborables con seguimiento. Envío gratuito en península; Baleares, Canarias, Ceuta y Melilla según tarifa de transportista. Llega listo para meter tu SIM: si la pides con el kit, lo configuramos nosotros antes de salir.",
  },
  {
    q: "¿Qué garantía tengo?",
    a: "Dos años de garantía legal en España y 30 días de devolución sin preguntas (el teléfono se restablece y se vuelve a bloquear en fábrica). El soporte lo lleva una persona real por WhatsApp, en horario de Madrid.",
  },
  {
    q: "¿La batería aguanta de verdad?",
    a: "Con uso normal (WhatsApp, algo de Maps y música) aguanta 3-5 días. Es extraíble: puedes llevar una segunda y cambiarla en 10 segundos. La carga es USB-C y tarda unas 2 h.",
  },
  {
    q: "¿Puedo usar mi número y mi tarifa actual?",
    a: "Sí. Es dual SIM, compatible con Movistar, Vodafone, Orange, Yoigo, Digi, Lowi y cualquier OMV en 4G. No hay bloqueo de operador. Si vienes de un iPhone, tu WhatsApp se migra con el traslado de cuenta normal.",
  },
];

export const INCLUDED_IN_BOX = [
  "T1 en negro mate",
  "Cable USB-C",
  "Guía de 4 pasos (en papel, no un PDF)",
  "PIN de configuración y contacto directo de soporte",
];
