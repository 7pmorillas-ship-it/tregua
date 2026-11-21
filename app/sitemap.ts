import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tregua.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/legal/privacidad`, lastModified: now, priority: 0.2 },
    { url: `${base}/legal/terminos`, lastModified: now, priority: 0.2 },
    { url: `${base}/legal/envios`, lastModified: now, priority: 0.3 },
    { url: `${base}/legal/devoluciones`, lastModified: now, priority: 0.3 },
  ];
}
