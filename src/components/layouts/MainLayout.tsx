import { ReactNode, memo } from 'react'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { Container } from '@/components/ui'

interface LayoutProps {
    children: ReactNode
}

const MemoizedHeader = memo(Header)
const MemoizedFooter = memo(Footer)

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <MemoizedHeader />
            <Container>{children}</Container>
            <MemoizedFooter />
        </>
    )
}
