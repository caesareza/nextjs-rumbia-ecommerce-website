import { Container } from '@/components/ui'
import Link from 'next/link'

function LanguageChooser() {
    return (
        <ul className="flex space-x-1 items-center">
            <li>
                <Link href="/">English</Link>
            </li>
            <li>/</li>
            <li>
                <Link href="/">Bahasa Indonesia</Link>
            </li>
        </ul>
    )
}

export default function Ribbon() {
    return (
        <div className="bg-slate-100 py-2">
            <Container className="space-x-5 text-sm flex items-center justify-end">
                <Link href="/">Bantuan</Link>
                <Link href="/">Lokasi Toko</Link>
                <LanguageChooser />
            </Container>
        </div>
    )
}
