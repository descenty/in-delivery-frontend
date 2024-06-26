/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.yandexcloud.net',
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true // To avoid "Linting and checking validity of types" errors
    }
}

module.exports = nextConfig
