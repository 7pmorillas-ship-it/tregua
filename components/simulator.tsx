"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PhoneCall, RotateCcw, Terminal, Zap } from "lucide-react";
import { Device, type DeviceKey } from "@/components/device";
import {
  AppScreen,
  BlockedScreen,
  HomeScreen,
  PHONE_APPS,
} from "@/components/phone/screen-ui";
import { Reveal, SectionHeading } from "@/components/reveal";
import { cn } from "@/lib/utils";

type View =
  | { kind: "home" }
  | { kind: "app"; id: string }
  | { kind: "blocked"; app: string; code: string }
  | { kind: "call"; number: string };

type LogLine = { id: number; text: string; alert?: boolean };

let logId = 0;

const SHORTCUTS = [
  { label: "Abrir WhatsApp", action: "whatsapp" },
  { label: "Instalar Instagram", action: "instagram" },
  { label: "Abrir TikTok", action: "tiktok" },
  { label: "Abrir Chrome", action: "chrome" },
] as const;

export function Simulator() {
  const [view, setView] = useState<View>({ kind: "home" });
  const [selected, setSelected] = useState(0);
  const [time, setTime] = useState("--:--");
  const [dial, setDial] = useState("");
  const [log, setLog] = useState<LogLine[]>([
    { id: logId++, text: "SYSTEM READY · Android 13" },
    { id: logId++, text: "DEVICE OWNER ACTIVE · 6 apps" },
  ]);
  const reduce = useReducedMotion();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const timer = window.setInterval(tick, 20_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [log]);

  const pushLog = useCallback((text: string, alert = false) => {
    setLog((prev) => [...prev.slice(-7), { id: logId++, text, alert }]);
  }, []);

  const goHome = useCallback(() => {
    setView({ kind: "home" });
  }, []);

  const openApp = useCallback(
    (index: number) => {
      const app = PHONE_APPS[index];
      if (!app) return;
      if (app.blocked) {
        setView({ kind: "blocked", app: app.label, code: app.blocked });
        pushLog(`POLICY BLOCK · ${app.label} · ${app.blocked}`, true);
        return;
      }
      setView({ kind: "app", id: app.id });
      pushLog(`OPEN · ${app.label}`);
    },
    [pushLog],
  );

  const runShortcut = useCallback(
    (action: string) => {
      if (action === "whatsapp") {
        setSelected(0);
        setView({ kind: "app", id: "whatsapp" });
        pushLog("OPEN · WhatsApp");
        return;
      }
      const blockedMap: Record<string, { app: string; code: string }> = {
        instagram: { app: "Instagram", code: "MDM-04" },
        tiktok: { app: "TikTok", code: "MDM-05" },
        chrome: { app: "Chrome", code: "MDM-07" },
      };
      const target = blockedMap[action];
      if (target) {
        setView({ kind: "blocked", ...target });
        pushLog(`POLICY BLOCK · ${target.app} · ${target.code}`, true);
      }
    },
    [pushLog],
  );

  const handleKey = useCallback(
    (key: DeviceKey) => {
      if (/^[0-9]$/.test(key)) {
        setDial((d) => (d + key).slice(0, 12));
        pushLog(`DTMF · ${key}`);
        return;
      }
      if (key === "star") {
        setDial((d) => (d + "*").slice(0, 12));
        return;
      }
      if (key === "hash") {
        setDial((d) => (d + "#").slice(0, 12));
        return;
      }
      if (key === "call") {
        const number = dial || "600 00 00 00";
        setView({ kind: "call", number });
        pushLog(`CALL · ${number}`);
        return;
      }
      if (key === "end" || key === "back") {
        if (view.kind !== "home") {
          goHome();
          pushLog("BACK · home");
        }
        setDial("");
        return;
      }
      if (key === "up" || key === "left") {
        setSelected((s) => (s - 1 + PHONE_APPS.length) % PHONE_APPS.length);
        return;
      }
      if (key === "down" || key === "right") {
        setSelected((s) => (s + 1) % PHONE_APPS.length);
        return;
      }
      if (key === "ok") {
        if (view.kind === "home") {
          openApp(selected);
        } else if (view.kind === "blocked" || view.kind === "call") {
          goHome();
        }
      }
    },
    [dial, goHome, openApp, pushLog, selected, view.kind],
  );

  const content =
    view.kind === "home" ? (
      <HomeScreen
        time={time}
        selected={selected}
        dial={dial}
        onOpen={openApp}
        onHover={setSelected}
      />
    ) : view.kind === "app" ? (
      <AppScreen app={PHONE_APPS.find((a) => a.id === view.id) ?? PHONE_APPS[0]} time={time} dial={dial} onBack={goHome} />
    ) : view.kind === "blocked" ? (
      <BlockedScreen app={view.app} code={view.code} />
    ) : (
      <div className="flex h-full flex-col items-center justify-center bg-[#F2EFE6] px-4 text-center">
        <PhoneCall size={20} strokeWidth={1.5} className="text-[#0d8a60]" />
        <div className="mt-3 font-mono text-[8px] tracking-[0.22em] text-[#0d8a60]">
          LLAMANDO · 4G
        </div>
        <div className="mt-1 font-mono text-[17px] tracking-wider text-[#1b1a16]">{view.number}</div>
        <div className="mt-3 font-mono text-[8px] tracking-[0.18em] text-[#9a9384]">
          [ COLGAR PARA SALIR ]
        </div>
      </div>
    );

  const screenKey =
    view.kind === "app" ? `app-${view.id}` : view.kind === "blocked" ? `blocked-${view.app}` : view.kind;

  const screen = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={screenKey}
        className="h-full"
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -6 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="simulador" className="relative overflow-hidden border-t border-line/[0.06] py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,130,80,0.12),transparent_65%)] blur-3xl"
      />
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="order-2 flex justify-center lg:order-1">
          <div className="relative w-[280px] sm:w-[330px]">
            <Device screen={screen} onKey={handleKey} size="md" ariaLabel="Simulador del teléfono TREGUA T1" />
            <div className="absolute -right-3 -top-3 hidden rotate-6 rounded border border-accent/30 bg-card/85 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-accent backdrop-blur sm:block">
              TOCA LAS TECLAS
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            index="02"
            kicker="Simulador en vivo"
            title={
              <>
                Intenta instalar Instagram.
                <br />
                <span className="text-muted">En serio, inténtalo.</span>
              </>
            }
            description="Pulsa las teclas del render o toca la pantalla. Verás lo que ve el usuario: una interfaz limpia y una política MDM que bloquea de verdad."
          />

          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-2">
              {SHORTCUTS.map((s) => (
                <button
                  key={s.action}
                  type="button"
                  onClick={() => runShortcut(s.action)}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-line/12 px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-muted transition-colors hover:border-accent/50 hover:text-fg"
                >
                  <Zap size={11} className="text-accent/70" />
                  {s.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  goHome();
                  setDial("");
                  setSelected(0);
                  pushLog("SYSTEM RESET · policy intact");
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-line/12 px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-muted transition-colors hover:border-line/30 hover:text-fg"
              >
                <RotateCcw size={11} />
                Reiniciar
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="card-surface mt-6 overflow-hidden">
              <div className="flex items-center justify-between border-b border-line/[0.07] px-4 py-2.5">
                <span className="flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted">
                  <Terminal size={11} />
                  REGISTRO DEL SISTEMA
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] text-signal/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
                  LIVE
                </span>
              </div>
              <div
                ref={logRef}
                className="no-scrollbar h-[148px] space-y-1 overflow-y-auto px-4 py-3 font-mono text-[10px] leading-relaxed"
              >
                {log.map((line) => (
                  <div
                    key={line.id}
                    className={cn(
                      "flex gap-2",
                      line.alert ? "text-accent" : "text-muted",
                    )}
                  >
                    <span className="text-line/25">$</span>
                    <span className="truncate">{line.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
