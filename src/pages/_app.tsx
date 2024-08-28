import '@/styles/globals.css'
import MainLayout from '@/components/layouts/MainLayout'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
