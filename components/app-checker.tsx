"use client";

import { useMemo, useState } from "react";
import { Search, Check, X, MessageCircle, HelpCircle } from "lucide-react";
import { findApps, TOP_APPS, type AppStatus } from "@/lib/apps";
import { cn } from "@/lib/utils";

const STATUS_META: Record<
  AppStatus,
  { label: string; icon: typeof Check; tone: string }
> = {
  permitida: {
    label: "Permitida",
    icon: Check,
    tone: "border-signal/30 bg-signal/10 text-signal",
  },
  bloqueada: {
    label: "Bloqueada",
    icon: X,
    tone: "border-line/15 bg-line/[0.05] text-muted",
  },
  consulta: {
    label: "Según el caso",
    icon: HelpCircle,
    tone: "border-accent/30 bg-accent/10 text-accent",
  },
};

export function AppChecker() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const term = active ?? query;
  const results = useMemo(() => findApps(term), [term]);
  const searching = term.trim().length > 0;

  return (
    <div className="rounded-2xl border border-line/[0.09] bg-card p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mono-label text-fg/45">Lista de apps</p>
          <h3 className="mt-2.5 text-[19px] font-medium tracking-[-0.01em] text-fg">
            ¿Tu app está permitida?
          </h3>
        </div>
        <p className="max-w-[30ch] text-[12.5px] leading-snug text-muted">
          Busca por nombre. Si no aparece, escríbenos y lo miramos antes de
          enviarte el móvil.
        </p>
      </div>

      <div className="relative mt-5">
        <Search
          size={15}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(null);
          }}
          placeholder="Instagram, Waze, CaixaBank, Spotify…"
          aria-label="Buscar una app en la lista de permitidas"
          className="h-11 w-full rounded-xl border border-line/[0.12] bg-bg pl-10 pr-3 text-[14px] text-fg placeholder:text-muted/70 focus:border-fg/30 focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      {!searching && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {TOP_APPS.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActive(name)}
              className="rounded-full border border-line/[0.12] px-2.5 py-1 text-[11.5px] text-muted transition-colors hover:border-fg/25 hover:text-fg"
            >
              {name}
            </button>
          ))}
        </div>
      )}

      <div aria-live="polite" className="mt-4">
        {searching && results.length === 0 && (
          <div className="flex flex-col gap-2 border-t border-line/[0.1] pt-4 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>No la tenemos listada todavía.</span>
            <a
              href="https://wa.me/34600123456?text=Hola%2C%20%C2%BFest%C3%A1%20permitida%20mi%20app%3F"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-fg underline decoration-fg/25 underline-offset-4 hover:decoration-fg"
            >
              <MessageCircle size={13} />
              Pregúntanos
            </a>
          </div>
        )}

        {results.length > 0 && (
          <ul className="divide-y divide-line/[0.07] overflow-hidden rounded-xl border border-line/[0.09]">
            {results.map((app) => {
              const meta = STATUS_META[app.status];
              const Icon = meta.icon;
              return (
                <li
                  key={app.name}
                  className="flex items-center gap-3 bg-bg/40 px-3.5 py-2.5"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[13.5px] font-medium leading-tight text-fg">
                      {app.name}
                    </p>
                    <p className="mt-0.5 truncate text-[11.5px] text-muted">
                      {app.note}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.1em]",
                      meta.tone,
                    )}
                  >
                    <Icon size={10} />
                    {meta.label}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
