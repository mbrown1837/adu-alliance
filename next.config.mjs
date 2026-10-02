/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.evoadu.com' },
      { protocol: 'https', hostname: 'evoadu.com' },
      { protocol: 'https', hostname: 'www.adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'aduresourcecenter.com' },
      { protocol: 'https', hostname: 'www.ladu.co' },
      { protocol: 'https', hostname: 'ladu.co' },
      { protocol: 'https', hostname: 'adualliance.com' },
      { protocol: 'https', hostname: 'cms.adualliance.com' },
      { protocol: 'https', hostname: 'cdn.marblism.com' },
    ],
  },
};

export default nextConfig;
