import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tregua.es";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/gracias", "/api/"] }],
    sitemap: `${base}/sitemap.xml`,
  };
}
