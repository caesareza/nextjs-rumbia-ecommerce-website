import Link from 'next/link'
import { MENU, MenuProps } from '../constants/menu'

export default function NavMenu() {
    return (
        <nav className="hidden md:block ml-10 font-bold text-green-800 space-x-10">
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
