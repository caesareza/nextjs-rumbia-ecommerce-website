import '@/styles/globals.css'
import MainLayout from '@/components/layouts/MainLayout'
import type { AppProps } from 'next/app'
import AppContextProvider from '@/contexts/AppContext'
import { Provider } from 'jotai'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <AppContextProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </AppContextProvider>
        </Provider>
    )
}
