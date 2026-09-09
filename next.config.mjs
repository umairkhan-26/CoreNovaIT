/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger runs this as a live Next.js/Node app (confirmed via its
  // response headers), not a static export served over FTP — the app
  // needs a real server anyway now that /api/contact is a live route.
};

export default nextConfig;
