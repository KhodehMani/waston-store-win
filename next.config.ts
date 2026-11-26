import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Vue is used through its runtime-only build with render functions (no SFC compiler needed).
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias, vue$: "vue/dist/vue.runtime.esm-bundler.js" };
    return config;
  },
};

export default nextConfig;
