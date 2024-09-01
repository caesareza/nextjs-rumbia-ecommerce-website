import { FC } from 'react'
import { Container } from '@/components/ui'

const YEAR = new Date().getFullYear()
const MENU_SOSMED = [
    {
        id: 1,
        label: 'X',
        href: process.env.NEXT_PUBLIC_X_URL,
    },
    {
        id: 2,
        label: 'FB',
        href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    },
    {
        id: 3,
        label: 'LinkedIn',
        href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    },
]

const Footer: FC = () => {
    return (
        <footer className="bg-slate-100 py-5">
            <Container className="flex flex-col md:flex-row">
                <div>&copy; {YEAR} FORE COFFEE, All Rights Reserved</div>
                <ul className="md:ml-auto flex space-x-3">
                    {MENU_SOSMED.map((value) => (
                        <li key={value.id}>
                            <a href={value.href}>{value.label}</a>
                        </li>
                    ))}
                </ul>
            </Container>
        </footer>
    )
}

export default Footer
