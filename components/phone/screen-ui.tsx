import {
  Landmark,
  Camera,
  Download,
  Flashlight,
  Lock,
  MapPin,
  MessageCircle,
  Music2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type PhoneApp = {
  id: string;
  label: string;
  meta: string;
  icon: LucideIcon;
  blocked?: string;
  lines?: Array<{ left: string; right?: string }>;
  detail?: string;
};

export const PHONE_APPS: PhoneApp[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    meta: "3",
    icon: MessageCircle,
    lines: [
      { left: "Mamá", right: "19:42" },
      { left: "Pablo", right: "18:10" },
      { left: "Piso · 4", right: "12:02" },
    ],
    detail: "Mensajes y llamadas. Sin estados ni canales.",
  },
  {
    id: "maps",
    label: "Maps",
    meta: "12 min",
    icon: MapPin,
    lines: [
      { left: "Casa", right: "12 min" },
      { left: "Trabajo", right: "24 min" },
      { left: "Metro Urgel", right: "6 min" },
    ],
    detail: "Navegación y transporte. Sin reseñas.",
  },
  {
    id: "spotify",
    label: "Spotify",
    meta: "Mix 1",
    icon: Music2,
    lines: [
      { left: "Daily Mix 1", right: "—" },
      { left: "Favoritas", right: "82" },
      { left: "Podcasts", right: "12" },
    ],
    detail: "Reproduce. Sin inicio que te empuje a más.",
  },
  {
    id: "bank",
    label: "Banco",
    meta: "1.284 €",
    icon: Landmark,
    lines: [
      { left: "Cuenta", right: "1.284,30" },
      { left: "Bizum", right: "Enviar" },
      { left: "Tarjeta", right: "Activa" },
    ],
    detail: "Tu banco y Bizum. Sin anuncios.",
  },
  {
    id: "camera",
    label: "Cámara",
    meta: "2 MP",
    icon: Camera,
    detail: "Foto rápida, sin galería social.",
  },
  {
    id: "torch",
    label: "Linterna",
    meta: "OK",
    icon: Flashlight,
    detail: "La herramienta más usada de cualquier móvil.",
  },
  {
    id: "install",
    label: "Instalar app",
    meta: "APK",
    icon: Download,
    blocked: "MDM-04",
    detail: "La política Device Owner impide instalar apps fuera de la lista blanca.",
  },
];

export function StatusBar({ time, dial }: { time: string; dial?: string }) {
  return (
    <div className="flex items-center justify-between px-2.5 pt-1.5 font-mono text-[7.5px] tracking-[0.06em] text-[#8a8477]">
      <span className="truncate text-[#5f5a50]">{dial ? `▸ ${dial}` : "TREGUA"}</span>
      <span className="flex shrink-0 items-center gap-1.5">
        <span>4G</span>
        <span className="text-[#a8a294]">▮▮</span>
        <span>{time}</span>
        <span className="relative inline-block h-[7px] w-[13px] rounded-[2px] border border-[#8a8477]/70 p-[1px]">
          <span className="block h-full w-[62%] rounded-[1px] bg-[#5f5a50]" />
        </span>
      </span>
    </div>
  );
}

export function HomeScreen({
  time,
  selected = 0,
  dial,
  onOpen,
  onHover,
}: {
  time: string;
  selected?: number;
  dial?: string;
  onOpen?: (index: number) => void;
  onHover?: (index: number) => void;
}) {
  return (
    <div className="flex h-full flex-col bg-[#F2EFE6]">
      <StatusBar time={time} dial={dial} />

      <div className="px-3 pb-1.5 pt-2">
        <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#9a9384]">
          Jue 20 nov
        </div>
        <div className="mt-0.5 text-[26px] font-light leading-none tracking-tighter text-[#1b1a16]">
          {time}
        </div>
      </div>

      <div className="mx-3 h-px bg-[#1b1a16]/10" />

      <ul className="mt-1 flex-1 overflow-hidden px-1.5">
        {PHONE_APPS.map((app, i) => {
          const active = i === selected;
          const Icon = app.icon;
          return (
            <li key={app.id}>
              <button
                type="button"
                tabIndex={onOpen ? 0 : -1}
                onClick={onOpen ? () => onOpen(i) : undefined}
                onMouseEnter={onHover ? () => onHover(i) : undefined}
                className={cn(
                  "flex w-full items-center gap-2 rounded-[4px] px-2 py-[4.5px] text-left transition-colors duration-150",
                  active ? "bg-[#1b1a16] text-[#F6F3EA]" : "hover:bg-[#1b1a16]/[0.04]",
                )}
              >
                <Icon
                  size={11}
                  strokeWidth={1.6}
                  className={active ? "text-[#ff8a5c]" : "text-[#8b8578]"}
                />
                <span
                  className={cn(
                    "flex-1 truncate text-[10.5px]",
                    active ? "text-[#F6F3EA]" : "text-[#3e3a32]",
                  )}
                >
                  {app.label}
                </span>
                <span
                  className={cn(
                    "font-mono text-[7.5px]",
                    active ? "text-[#F6F3EA]/60" : "text-[#9a9384]",
                  )}
                >
                  {app.meta}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between px-3 pb-1.5 font-mono text-[6.5px] tracking-[0.12em] text-[#a8a294]">
        <span>▲▼ NAVEGAR</span>
        <span>OK ABRIR</span>
      </div>
    </div>
  );
}

export function AppScreen({
  app,
  time,
  dial,
  onBack,
}: {
  app: PhoneApp;
  time: string;
  dial?: string;
  onBack?: () => void;
}) {
  const Icon = app.icon;

  return (
    <div className="flex h-full flex-col bg-[#F2EFE6]">
      <StatusBar time={time} dial={dial} />

      <div className="flex items-center gap-2 px-3 pt-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#1b1a16]">
          <Icon size={13} strokeWidth={1.6} className="text-[#F6F3EA]" />
        </div>
        <div className="min-w-0">
          <div className="truncate text-[11px] font-medium text-[#1b1a16]">{app.label}</div>
          <div className="font-mono text-[6.5px] tracking-[0.14em] text-[#b4451a]">
            [ PERMITIDA ]
          </div>
        </div>
      </div>

      <div className="mx-3 mt-2 h-px bg-[#1b1a16]/10" />

      <div className="flex-1 px-3 pt-1.5">
        {app.lines?.length ? (
          <ul className="divide-y divide-[#1b1a16]/[0.07]">
            {app.lines.map((line) => (
              <li
                key={line.left}
                className="flex items-center justify-between py-[6px] text-[9.5px] text-[#3e3a32]"
              >
                <span className="truncate">{line.left}</span>
                <span className="font-mono text-[7.5px] text-[#9a9384]">{line.right}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex h-20 items-center justify-center rounded-[4px] border border-dashed border-[#1b1a16]/20 font-mono text-[7.5px] tracking-[0.12em] text-[#9a9384]">
            {app.id === "camera" ? "VISTA PREVIA · 2 MP" : "SIN MÁS OPCIONES"}
          </div>
        )}

        <p className="mt-2.5 text-[8.5px] leading-relaxed text-[#7d776a]">{app.detail}</p>
      </div>

      <button
        type="button"
        tabIndex={onBack ? 0 : -1}
        onClick={onBack}
        className="mx-3 mb-2 rounded-[4px] border border-[#1b1a16]/15 py-1.5 font-mono text-[7.5px] tracking-[0.14em] text-[#5f5a50]"
      >
        [ VOLVER ]
      </button>
    </div>
  );
}

export function BlockedScreen({ app, code }: { app: string; code: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#F2EFE6] px-4 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5400e]/30 bg-[#c5400e]/[0.08]">
        <Lock size={15} strokeWidth={1.7} className="text-[#c5400e]" />
      </div>
      <div className="mt-3 font-mono text-[7px] tracking-[0.18em] text-[#c5400e]">
        INSTALACIÓN BLOQUEADA
      </div>
      <div className="mt-1 text-[14px] font-medium text-[#1b1a16]">{app}</div>
      <p className="mt-2 max-w-[170px] text-[8.5px] leading-relaxed text-[#7d776a]">
        La política Device Owner impide instalar apps fuera de la lista blanca.
      </p>
      <div className="mt-3 rounded-[3px] border border-[#1b1a16]/15 bg-white/60 px-2 py-1 font-mono text-[7px] tracking-[0.12em] text-[#5f5a50]">
        POLÍTICA {code} · NO EVITABLE
      </div>
      <div className="mt-4 font-mono text-[6.5px] tracking-[0.18em] text-[#a8a294]">
        [ COLGAR PARA VOLVER ]
      </div>
    </div>
  );
}
