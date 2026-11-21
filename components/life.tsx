import { STATS, STATS_FOOTNOTE } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Life() {
  return (
    <section id="datos" className="shell scroll-mt-24 py-16 sm:py-24">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h2 className="max-w-[22ch] text-[clamp(28px,4.6vw,48px)] font-medium leading-[1] tracking-[-0.03em] text-fg">
            El móvil no te quita el tiempo. Te lo cambia por otra cosa.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-fg/75">
            Cuatro horas y doce minutos al día. Sesenta y un días al año. No es
            una cifra nuestra: es la media que se mide en España desde hace
            años, y casi nadie sabe decir en qué se le ha ido la tarde.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line/[0.12] pt-6 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="font-mono text-[24px] leading-none tracking-[-0.02em] text-fg">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-[12.5px] leading-snug text-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-5 max-w-[60ch] text-[11px] leading-relaxed text-muted/80">
            {STATS_FOOTNOTE}
          </p>
        </Reveal>

        <Reveal className="md:col-span-5" delay={0.06}>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/abuela-ventana.jpg"
              alt="Una mujer mayor mira la pantalla de su teléfono junto a una ventana"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="mt-2.5 text-[11px] text-muted">
              Foto: Shixart1985 · CC BY 2.0, vía Wikimedia Commons
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <figure className="mt-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/autobus.jpg"
            alt="Una mujer mira su teléfono sentada en el autobús"
            className="aspect-[21/9] w-full object-cover object-center"
            loading="lazy"
          />
          <figcaption className="mt-2.5 text-[11px] text-muted">
            Foto: W.carter · CC BY-SA 4.0, vía Wikimedia Commons
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-12 max-w-[46ch] text-[15px] leading-relaxed text-fg/75">
          No hace falta fuerza de voluntad. Hace falta que el móvil no esté
          diseñado para engancharte. Eso es todo lo que hace el T1.
        </p>
      </Reveal>
    </section>
  );
}
