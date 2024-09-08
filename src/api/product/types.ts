export interface ProductProps {
    id: number
    title: string
    price?: number
    category?: string
    description?: string
    image?: string
}

export interface ProductDetailProps {
    data: ProductProps
}
