/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    /**
     * When `true`, `next build` will successfully complete even if ESLint
     * errors are present. Local `next dev` still shows errors so you can fix
     * them later.
     */
    ignoreDuringBuilds: true,
  },
}

export default nextConfig