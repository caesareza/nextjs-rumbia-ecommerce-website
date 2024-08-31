/** @type {import('next').NextConfig} */
const REACT_STRICT_MODE_ACTIVE_ON_DEVELOPMENT = process.env.NEXT_PUBLIC_APP_ENV === 'development'

const nextConfig = {
    reactStrictMode: REACT_STRICT_MODE_ACTIVE_ON_DEVELOPMENT,
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP']
    }
}

export default nextConfig
