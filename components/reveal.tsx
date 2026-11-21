"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  kicker,
  title,
  description,
  className,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.18em] text-accent">{index}</span>
        <span className="h-px w-8 bg-line/20" />
        <span className="mono-label">{kicker}</span>
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.05] tracking-tightest sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
