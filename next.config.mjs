/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/resumos", destination: "/sumulas", permanent: true },
      { source: "/resumos/:path*", destination: "/sumulas", permanent: true },
      { source: "/teses-temas", destination: "/sumulas", permanent: true },
      { source: "/teses-temas/:path*", destination: "/sumulas", permanent: true },
    ];
  },
};

export default nextConfig;
