/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //   },
    // ],
    unoptimized: true,
  },
  // experimental: {
  //   serverActions: true,
  // },
  output: 'export',
};

module.exports = nextConfig;
