import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 忽略构建时的 ESLint 错误
  },
};

export default nextConfig;
