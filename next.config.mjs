/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    // Cuando tengas los renders reales, deja los archivos en /public/render/
    // y pásalos a <DeviceShell imageSrc="/render/t1-front.png" />.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
