export interface GlobalMetaHeadProps {
    title?: string
    description?: string
    url?: string
    keywords?: string
    image?: string
}

const globalMetaHead: GlobalMetaHeadProps = {
    title: 'Your Best Coffee at Fore Coffee',
    description: 'Default site description.',
    url: 'https://fore.coffee',
    keywords: 'coffee, jakarta, indonesia',
    image: `${process.env.NEXT_PUBLIC_APP_URL}/logo/fore.png`,
}

export default globalMetaHead
