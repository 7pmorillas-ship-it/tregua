import { PRICE_LOGIC, STATS, STATS_FOOTNOTE } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const TICKER = [
  "4 h 12 min al día",
  "≈ 110 desbloqueos",
  "2 h 05 min en redes",
  "61 días al año mirando una pantalla",
  "6 de 10 quieren parar",
  "0 apps adictivas en el T1",
];

export function Stats() {
  return (
    <section id="datos" className="scroll-mt-24 py-6">
      {/* Cinta de datos: el gancho de urgencia, sin adornos */}
      <div className="overflow-hidden border-y border-line/[0.08] bg-fg py-3 text-bg">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap will-change-transform motion-reduce:animate-none">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]"
            >
              {item}
              <span className="text-bg/35">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="shell mt-16 sm:mt-20">
        <Reveal>
          <div className="overflow-hidden rounded-[26px] bg-fg px-6 py-12 text-bg sm:px-10 sm:py-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mono-label text-bg/45">[ LO QUE PASA AHORA ]</p>
                <h2 className="mt-4 max-w-[20ch] text-[clamp(28px,4.4vw,46px)] font-medium leading-[1] tracking-[-0.03em]">
                  El móvil te está cobrando en horas.
                </h2>
              </div>
              <p className="max-w-[32ch] text-[14px] leading-relaxed text-bg/60">
                Un smartphone de 900 € te cuesta, en realidad, más de 60 días
                al año de tu vida. Nadie te lo factura, pero se paga igual.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-t border-bg/15 pt-4">
                  <dd className="font-mono text-[clamp(24px,3.6vw,38px)] font-medium leading-none tracking-[-0.03em]">
                    {stat.value}
                  </dd>
                  <dt className="mt-3 text-[13px] font-medium leading-snug text-bg/85">
                    {stat.label}
                  </dt>
                  <p className="mt-2 text-[12px] leading-relaxed text-bg/45">
                    {stat.note}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <p className="mt-4 max-w-[70ch] text-[11.5px] leading-relaxed text-muted/80">
          {STATS_FOOTNOTE}
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PRICE_LOGIC.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className={
                  i === 2
                    ? "h-full rounded-2xl border border-cta/25 bg-cta/[0.06] p-6"
                    : "h-full rounded-2xl border border-line/[0.08] bg-card p-6"
                }
              >
                <p className="mono-label text-fg/45">{item.title}</p>
                <p className="mt-4 font-mono text-[22px] font-medium tracking-tight text-fg">
                  {item.value}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
