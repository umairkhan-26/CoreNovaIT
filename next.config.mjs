/** @type {import('next').NextConfig} */
const nextConfig = {
  // The deploy workflow builds to ./out and FTPs it as static files —
  // keep this in sync with .github/workflows/deploy.yml.
  output: "export",
};

export default nextConfig;
