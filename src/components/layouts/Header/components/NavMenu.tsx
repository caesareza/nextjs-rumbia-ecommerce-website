import Link from 'next/link'
import { MENU, MenuProps } from '@/components/layouts/Header/constants/menu'

export default function NavMenu() {
    return (
        <nav className="space-x-3 font-semibold">
            {MENU.map((value: MenuProps) => (
                <Link
                    href={value.href}
                    key={value.id}
                    className="hover:text-green-700"
                >
                    {value.label}
                </Link>
            ))}
        </nav>
    )
}
