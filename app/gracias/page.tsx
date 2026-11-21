import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pedido confirmado — TREGUA",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-20">
      <div className="w-full max-w-md">
        <div className="card-surface p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-signal/40 bg-signal/10">
            <Check size={18} className="text-signal" />
          </div>
          <div className="mt-5 font-mono text-[9px] tracking-[0.2em] text-signal">
            PAGO CONFIRMADO
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Tu T1 está en camino.</h1>
          <p className="mt-3 text-[13px] leading-relaxed text-muted">
            Te hemos enviado la factura por email. Sale de nuestro almacén de Madrid en 24/48 h
            laborables con seguimiento. Lo configuramos con el modo que elegiste antes de precintar
            la caja.
          </p>

          <div className="mt-6 rounded-lg border border-line/[0.08] bg-line/[0.025] p-4 text-left font-mono text-[9px] leading-relaxed tracking-[0.06em] text-muted">
            <p>[1] Recibes el T1 listo para meter tu SIM.</p>
            <p className="mt-1">[2] Enciendes. La política MDM se aplica sola.</p>
            <p className="mt-1">[3] Si algo no va, WhatsApp directo.</p>
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-line/15 px-4 py-2.5 text-[12.5px] text-fg transition-colors hover:border-accent/50"
          >
            <ArrowLeft size={13} /> Volver a la web
          </Link>
        </div>
      </div>
    </main>
  );
}
