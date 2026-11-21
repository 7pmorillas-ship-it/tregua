export type AppStatus = "permitida" | "bloqueada" | "consulta";

export type AppEntry = {
  name: string;
  status: AppStatus;
  note: string;
  aliases?: string[];
};

/**
 * Lista viva de apps. Es la misma política que se aplica en el móvil:
 * utilidad sí, feed infinito no.
 */
export const APPS: AppEntry[] = [
  // Mensajería
  { name: "WhatsApp", status: "permitida", note: "Mensajes, llamadas y vídeo." },
  { name: "WhatsApp Business", status: "permitida", note: "Para autónomos y tiendas." },
  { name: "SMS y llamadas", status: "permitida", note: "Lo de siempre, sin datos." },
  { name: "Telegram", status: "bloqueada", note: "Se usa como red social y no entra." },
  { name: "Signal", status: "consulta", note: "Lo estudiamos según el caso." },

  // Música y audio
  { name: "Spotify", status: "permitida", note: "Música y podcasts." },
  { name: "Amazon Music", status: "permitida", note: "Sin problema." },
  { name: "Deezer", status: "permitida", note: "Sin problema." },
  { name: "Tidal", status: "permitida", note: "Sin problema." },
  { name: "Podimo", status: "permitida", note: "Podcasts." },
  { name: "iVoox", status: "permitida", note: "Radio y podcasts en español." },
  { name: "YouTube Music", status: "bloqueada", note: "Va con la cuenta de YouTube: feed y vídeo." },

  // Mapas y transporte
  { name: "Google Maps", status: "permitida", note: "Navegación, transporte público y tráfico." },
  { name: "Waze", status: "permitida", note: "Alternativa con radares y tráfico." },
  { name: "Moovit", status: "permitida", note: "Bus y metro." },
  { name: "Citymapper", status: "permitida", note: "Transporte urbano." },
  { name: "Renfe Cercanías", status: "permitida", note: "Billetes y horarios." },
  { name: "Cabify", status: "permitida", note: "Pedir coche." },
  { name: "Uber", status: "permitida", note: "Pedir coche." },
  { name: "Bolt", status: "permitida", note: "Pedir coche." },

  // Pagos y banca
  { name: "Google Wallet", status: "permitida", note: "Tarjetas y entradas." },
  { name: "CaixaBank", status: "permitida", note: "App y Bizum." },
  { name: "BBVA", status: "permitida", note: "App y Bizum." },
  { name: "Santander", status: "permitida", note: "App y Bizum." },
  { name: "Sabadell", status: "permitida", note: "App y Bizum." },
  { name: "Bankinter", status: "permitida", note: "App y Bizum." },
  { name: "ING", status: "permitida", note: "App y Bizum." },
  { name: "Openbank", status: "permitida", note: "App y Bizum." },
  { name: "Abanca", status: "permitida", note: "App y Bizum." },
  { name: "Unicaja", status: "permitida", note: "App y Bizum." },
  { name: "Kutxabank", status: "permitida", note: "App y Bizum." },
  { name: "imaginBank", status: "permitida", note: "App y Bizum." },
  { name: "Revolut", status: "permitida", note: "Cambio de divisa y tarjeta." },
  { name: "N26", status: "permitida", note: "Banco digital." },
  { name: "Wise", status: "permitida", note: "Transferencias al extranjero." },
  { name: "PayPal", status: "permitida", note: "Pagos online." },

  // Trabajo y estudio
  { name: "Gmail", status: "consulta", note: "Se añade si la necesitas para el banco o el trabajo." },
  { name: "Outlook", status: "consulta", note: "Igual que el correo: a consultar." },
  { name: "Slack", status: "consulta", note: "Si curras con él, entra." },
  { name: "Microsoft Teams", status: "consulta", note: "Si curras con él, entra." },
  { name: "Zoom", status: "consulta", note: "Videollamadas de trabajo." },
  { name: "Google Drive", status: "consulta", note: "Solo para abrir archivos, sin navegador." },
  { name: "Notion", status: "consulta", note: "Notas y listas." },
  { name: "Duolingo", status: "consulta", note: "Idiomas: entra sin rachas ni notificaciones." },

  // Redes sociales: fuera
  { name: "Instagram", status: "bloqueada", note: "Red social.", aliases: ["insta"] },
  { name: "TikTok", status: "bloqueada", note: "Vídeo corto en bucle." },
  { name: "Facebook", status: "bloqueada", note: "Red social." },
  { name: "X", status: "bloqueada", note: "Antes Twitter.", aliases: ["twitter"] },
  { name: "Threads", status: "bloqueada", note: "Red social de Meta." },
  { name: "Snapchat", status: "bloqueada", note: "Red social." },
  { name: "BeReal", status: "bloqueada", note: "Red social." },
  { name: "Reddit", status: "bloqueada", note: "Feed infinito." },
  { name: "LinkedIn", status: "bloqueada", note: "Feed y notificaciones." },
  { name: "Discord", status: "bloqueada", note: "Comunidades y chats." },
  { name: "Twitch", status: "bloqueada", note: "Directos." },
  { name: "Pinterest", status: "bloqueada", note: "Feed visual." },
  { name: "Tumblr", status: "bloqueada", note: "Red social." },

  // Vídeo
  { name: "YouTube", status: "bloqueada", note: "El vídeo que se come la tarde." },
  { name: "Netflix", status: "bloqueada", note: "Vídeo en el bolsillo." },
  { name: "Prime Video", status: "bloqueada", note: "Vídeo en el bolsillo." },
  { name: "Disney+", status: "bloqueada", note: "Vídeo en el bolsillo." },
  { name: "Max", status: "bloqueada", note: "Antes HBO.", aliases: ["hbo"] },
  { name: "DAZN", status: "bloqueada", note: "Deporte en directo." },

  // Navegador y tiendas
  { name: "Chrome", status: "bloqueada", note: "Navegador libre: es la puerta a todo.", aliases: ["google chrome"] },
  { name: "Firefox", status: "bloqueada", note: "Igual que Chrome." },
  { name: "DuckDuckGo", status: "bloqueada", note: "Aunque sea privado, es navegador." },
  { name: "Play Store", status: "bloqueada", note: "La tienda de apps.", aliases: ["google play"] },
  { name: "Amazon Shopping", status: "bloqueada", note: "Comprar desde el móvil, fuera." },
  { name: "Shein", status: "bloqueada", note: "Compra compulsiva." },
  { name: "Temu", status: "bloqueada", note: "Compra compulsiva." },

  // Juegos
  { name: "Juegos", status: "bloqueada", note: "Ni los instalados ni los de Play Store." },
];

export const TOP_APPS = [
  "WhatsApp",
  "Google Maps",
  "Spotify",
  "Waze",
  "Google Wallet",
  "CaixaBank",
  "BBVA",
  "Revolut",
  "Instagram",
  "TikTok",
  "YouTube",
  "Chrome",
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();

export function findApps(query: string): AppEntry[] {
  const q = normalize(query);
  if (!q) return [];

  return APPS.filter((app) => {
    const haystack = [app.name, ...(app.aliases ?? [])].map(normalize);
    return haystack.some((name) => name.includes(q) || q.includes(name));
  }).slice(0, 8);
}

export function getApp(name: string): AppEntry | undefined {
  const q = normalize(name);
  return APPS.find((app) => normalize(app.name) === q);
}
