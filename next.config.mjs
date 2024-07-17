/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: 'build',
  //basePath: "/pemberton-landscaping",
  images: { unoptimized: true }
};

export default nextConfig;
