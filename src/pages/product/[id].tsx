import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type ProductIDProps = string | string[] | undefined

interface Rating {
    rate: number
    count: number
}

interface ProductProps {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

const ProductDetailPage: NextPage = () => {
    const [product, setProduct] = useState<ProductProps>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const router: NextRouter = useRouter()

    const fetchProductDetail = async (id: ProductIDProps) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()

        if (data) {
            setProduct(data)
        }

        setIsLoading(false)
    }

    const fetchProductRelated = async (productDetail: ProductProps) => {
        const { category } = productDetail

        const response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
        )
        const dataProductRelated = await response.json()

        // eslint-disable-next-line no-console
        console.log('dataProductRelated', dataProductRelated)
    }

    useEffect(() => {
        const id: ProductIDProps = router.query.id

        if (!id) return
        fetchProductDetail(id)
    }, [router.query])

    useEffect(() => {
        if (!product) return

        fetchProductRelated(product)
    }, [product])

    if (isLoading) return 'loading ...'

    return (
        <section>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
        </section>
    )
}

export default ProductDetailPage
