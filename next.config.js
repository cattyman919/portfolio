/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/#profile-section',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
