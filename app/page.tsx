import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Philosophy } from "@/components/philosophy";
import { Stats } from "@/components/stats";
import { Profiles } from "@/components/profiles";
import { Specs } from "@/components/specs";
import { Configurator } from "@/components/configurator";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { StickyBuy } from "@/components/sticky-buy";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TREGUA T1",
  description:
    "Teléfono de teclas con pantalla táctil y Android 13 blindado por MDM. WhatsApp, Google Maps, Spotify y banca funcionan; redes sociales, navegador libre y Play Store están bloqueados a nivel de sistema.",
  brand: { "@type": "Brand", name: "TREGUA" },
  category: "Teléfonos móviles",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "134.00",
    highPrice: "139.00",
    priceCurrency: "EUR",
    offerCount: "2",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: "https://tregua.es/#comprar",
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "EUR" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
      },
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Gallery />
        <Philosophy />
        <Profiles />
        <Specs />
        <Configurator />
        <Faq />
      </main>
      <Footer />
      <StickyBuy />
    </>
  );
}
