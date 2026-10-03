import type { NextConfig } from "next";

const allowedDevOrigins = [
  "127.0.0.1",
  "localhost",
  ...(process.env.REPLIT_DEV_DOMAIN ? [process.env.REPLIT_DEV_DOMAIN] : []),
];

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins,
  agentRules: false,
};

export default nextConfig;