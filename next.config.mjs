/**
 * Next.js configuration file.
 *
 * This configuration enables static export of the site (similar to `next export`),
 * ensures that URLs include a trailing slash (important when hosting on Vercel or
 * other static hosting providers), specifies a custom output directory, and
 * disables the built‑in image optimization so that images are served as‑is.  
 *
 * See https://nextjs.org/docs/pages/api-reference/next-config-js for details.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable static HTML export. When running `next build`, Next.js will
  // automatically generate a fully static site in the `out` directory.
  output: 'export',

  // Append a trailing slash to all routes. Without this setting, navigating to
  // `/about` would produce `about/index.html` but the generated link might be
  // `/about` without the slash, which can lead to 404s on some hosts.
  trailingSlash: true,

  // Disable image optimization. This avoids bundling server‑side sharp or
  // other native modules and is recommended for purely static deployments.
  images: {
    unoptimized: true,
  },

  // Place the build output in a custom directory. Vercel will use this
  // directory when deploying the static site.
  distDir: 'out',

  // When trailingSlash is true, tell Next not to automatically create
  // redirects without the slash. Otherwise Vercel may generate redundant
  // redirects that conflict with static routes.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
