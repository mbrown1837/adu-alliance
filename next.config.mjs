/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.evoadu.com' },
      { protocol: 'https', hostname: 'evoadu.com' },
      { protocol: 'https', hostname: 'www.adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'aduresourcecenter.com' },
      { protocol: 'https', hostname: 'www.ladu.co' },
      { protocol: 'https', hostname: 'ladu.co' },
      { protocol: 'https', hostname: 'adualliance.com' },
    ],
  },
};

export default nextConfig;
