import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Rutas antiguas del grupo (auth) antes de mover a /auth/* */
  async redirects() {
    return [
      { source: "/login", destination: "/auth/login", permanent: false },
      { source: "/register", destination: "/auth/register", permanent: false },
      {
        source: "/check-email",
        destination: "/auth/check-email",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
