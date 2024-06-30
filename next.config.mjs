/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {protocol:"https",
        hostname:"pokeapi.co"
      }
    ],
  },
  env: {
    POKEMON_URL: process.env.POKEMON_URL,
  },
}

export default nextConfig
