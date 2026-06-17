const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isProd ? { basePath: "/Eco-South-Website" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

