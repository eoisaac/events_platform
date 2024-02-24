/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['etwvavwtoqcdjsevadoq.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'etwvavwtoqcdjsevadoq.supabase.co',
        port: '',
      },
    ],
  },
}

export default nextConfig
