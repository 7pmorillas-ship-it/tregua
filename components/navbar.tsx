"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#filosofia", label: "Filosofía" },
  { href: "#para-quien", label: "Para quién es" },
  { href: "#especificaciones", label: "Especificaciones" },
  { href: "#datos", label: "Los datos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Navegación principal"
        className={cn(
          "mx-auto flex max-w-shell items-center justify-between gap-4 rounded-2xl border px-3 py-2 transition-all duration-500 sm:rounded-full sm:px-4",
          scrolled
            ? "border-line/10 bg-bg/85 shadow-[0_18px_50px_-30px_rgba(40,32,24,0.35)] backdrop-blur-xl"
            : "border-transparent bg-bg/40 backdrop-blur-md",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5 pl-1" aria-label="TREGUA, inicio">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(255,77,0,0.6)]" />
          <span className="text-[13px] font-semibold tracking-[0.28em] text-fg">TREGUA</span>
          <span className="rounded border border-line/15 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.12em] text-muted">
            T1
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <a
            href="#comprar"
            className="group inline-flex items-center gap-1.5 rounded-full bg-cta px-3.5 py-2 text-[13px] font-semibold text-[#12110D] transition-all hover:brightness-105 sm:px-4"
          >
            Comprar<span className="hidden sm:inline">&nbsp;— desde 134 €</span>
            <ArrowUpRight
              size={14}
              strokeWidth={2.2}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line/10 text-fg lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-shell rounded-2xl border border-line/10 bg-bg/95 p-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line/[0.06] py-3 text-[15px] text-fg/90"
                  >
                    {link.label}
                    <span className="font-mono text-[10px] text-muted">↘</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between gap-3">
              <ThemeToggle />
              <a
                href="#comprar"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-cta px-4 py-3 text-center text-sm font-semibold text-[#12110D]"
              >
                Comprar T1 — desde 134 €
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
