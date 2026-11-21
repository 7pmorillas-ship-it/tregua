/** @type {import('next').NextConfig} */
// NEXT_STATIC_EXPORT=1 genera un sitio estático (GitHub Pages).
// En Vercel/local se ignora y se usa el servidor de Next con /api/checkout.
const isStatic = process.env.NEXT_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  ...(isStatic
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: {
          // Cuando tengas los renders reales, deja los archivos en /public/render/
          formats: ["image/avif", "image/webp"],
        },
      }),
};

export default nextConfig;
