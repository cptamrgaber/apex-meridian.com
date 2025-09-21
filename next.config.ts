import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // تسكيت تحذير Turbopack (اختياري)
  turbopack: { root: __dirname },
  // احذف/علّق السطور دي لو كانت موجودة:
  // output: "export",
  // trailingSlash: true,
  // images: { unoptimized: true }
};

export default nextConfig;
