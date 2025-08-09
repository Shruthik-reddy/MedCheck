/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation for API routes that need database connections
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  // Ensure API routes are not statically generated
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;