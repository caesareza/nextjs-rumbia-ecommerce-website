import '@/styles/globals.css'
import MainLayout from '@/components/layouts/MainLayout'
import type { AppProps } from 'next/app'
import AppContextProvider from '@/contexts/AppContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppContextProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </AppContextProvider>
    )
}
