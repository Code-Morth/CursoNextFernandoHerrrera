/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com'
      },
      { protocol: 'https', hostname: 'pokeapi.co' },
      { protocol: 'https', hostname: 'www.shareicon.net' },
      { protocol: 'https', hostname: 'images7.alphacoders.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'giphy.com' }
    ]
  },
  env: {
    POKEMON_URL: process.env.POKEMON_URL
  }
}

export default nextConfig
