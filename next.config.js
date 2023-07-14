/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://13.125.231.206:8080/:path*',
      },
    ];
  },
};
module.exports = nextConfig;
