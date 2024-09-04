import { Container } from '@/components/ui'
import Link from 'next/link'

function LanguageChooser() {
    return (
        <div className="language-chooser space-x-2">
            <Link href="/">English</Link>
            <span>|</span>
            <Link href="/">Bahasa Indonesia</Link>
        </div>
    )
}

function RibbonLinks() {
    return (
        <>
            <Link href="/">Bantuan</Link>
            <Link href="/">Lokasi Toko</Link>
        </>
    )
}

export default function Ribbon() {
    return (
        <div className="bg-slate-100 py-2 text-xs">
            <Container className="space-x-5 text-sm flex items-center justify-end">
                <RibbonLinks />
                <LanguageChooser />
            </Container>
        </div>
    )
}
