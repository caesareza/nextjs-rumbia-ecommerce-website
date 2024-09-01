export interface MenuProps {
    id: number
    label: string
    href: string
}

export const MENU: Array<MenuProps> = [
    {
        id: 1,
        label: 'Home',
        href: '/',
    },
    {
        id: 2,
        label: 'About',
        href: '/about',
    },
    {
        id: 3,
        label: 'Contact',
        href: '/contact',
    },
]
