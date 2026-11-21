"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function StickyBuy() {
  const [show, setShow] = useState(false);
  const [atCheckout, setAtCheckout] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("comprar");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtCheckout(entry.isIntersecting),
      { rootMargin: "-15% 0px -35% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && !atCheckout ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 md:hidden"
        >
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-line/12 bg-bg/92 p-2.5 pl-4 shadow-[0_18px_40px_-24px_rgba(40,32,24,0.5)] backdrop-blur-xl">
            <div>
              <div className="text-[12px] font-medium">TREGUA T1</div>
              <div className="font-mono text-[10px] text-muted">139 € · envío gratis</div>
            </div>
            <a
              href="#comprar"
              className="inline-flex items-center gap-1.5 rounded-xl bg-cta px-4 py-2.5 text-[12.5px] font-semibold text-[#12110D]"
            >
              Comprar
              <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
