import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function ContactCta() {
  return (
    <section className="shell py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[26px] bg-accent px-6 py-10 text-[#17110d] sm:px-10 sm:py-14">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full border-[34px] border-[#ffb18c]/35" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#17110d]/55">[ HABLEMOS ]</p>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(30px,5vw,54px)] font-medium leading-[0.98] tracking-[-0.04em]">¿Te falta una app? Lo resolvemos contigo.</h2>
            <p className="mt-5 max-w-[48ch] text-[14px] leading-relaxed text-[#17110d]/75">Antes de enviarte el T1 podemos añadir una app de trabajo, banca, transporte o estudios a tu lista blanca. Cuéntanos qué necesitas y te respondemos personalmente.</p>
            <a href="https://wa.me/34600123456?text=Hola%20TREGUA%2C%20quiero%20consultar%20una%20app%20para%20mi%20T1" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#17110d] px-5 py-3 text-sm font-semibold text-[#fff8ef] transition-transform hover:-translate-y-0.5">
              <MessageCircle size={16} /> Escribir por WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
