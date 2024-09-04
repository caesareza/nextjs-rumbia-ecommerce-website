import { ReactNode, memo } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from '@/components/ui'

import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Roboto } from 'next/font/google'

const roboto: NextFontWithVariable = Roboto({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-roboto',
})

const MemoizedHeader = memo(Header)
const MemoizedFooter = memo(Footer)

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <MemoizedHeader />
            <main className={roboto.className + `main bg-white py-10`}>
                <Container>{children}</Container>
            </main>
            <MemoizedFooter />
        </>
    )
}
