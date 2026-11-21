"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-line/[0.06] py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="06"
              kicker="Dudas reales"
              title={
                <>
                  Sin humo.
                  <br />
                  <span className="text-muted">Las respuestas de verdad.</span>
                </>
              }
              description="Si algo no está aquí, escríbenos por WhatsApp. Contesta una persona, no un chatbot."
            />

            <a
              href="https://wa.me/34600123456?text=Hola%2C%20tengo%20una%20duda%20sobre%20el%20TREGUA%20T1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-line/15 px-4 py-2.5 text-[12.5px] text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              Preguntar por WhatsApp
              <ArrowUpRight size={13} />
            </a>

            <p className="mt-3 font-mono text-[9px] tracking-[0.08em] text-muted/50">
              L-V · 10:00–19:00 (Madrid)
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-line/[0.07] border-y border-line/[0.07]">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-fg"
                  >
                    <span
                      className={cn(
                        "text-[14px] font-medium leading-snug tracking-tight transition-colors sm:text-[15px]",
                        isOpen ? "text-fg" : "text-fg/80",
                      )}
                    >
                      {faq.q}
                    </span>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line/15 text-muted">
                      {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[62ch] pb-5 pr-8 text-[13px] leading-relaxed text-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
