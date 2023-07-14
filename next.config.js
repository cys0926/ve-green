/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  images: {
    domains: [
      'vegreen-s3.s3.ap-northeast-2.amazonaws.com',
      'www.foodsafetykorea.go.kr',
    ],
  },
};

module.exports = nextConfig;
