/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://cafe-hub-backend-production.up.railway.app/api/:path*`,
      },
    ];
  },
};
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:8000/:path*', // Proxy to Backend
//       },
//     ];
//   },
// };

export default nextConfig;
