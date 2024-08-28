import { PropsWithChildren } from 'react'
import Link from 'next/link'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/blog">Blog</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer>ini main layout footer</footer>
        </>
    )
}
