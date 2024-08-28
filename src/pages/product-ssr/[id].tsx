import { GetServerSidePropsContext } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

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

const ProductSSRPage = (data: ProductProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [productRelated, setProductRelated] = useState<ProductProps[]>()

    const fetchProductRelated = async (category: string) => {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
        )
        const dataProductRelated = await response.json()

        setProductRelated(dataProductRelated)
        setIsLoading(false)
    }

    useEffect(() => {
        const { category } = data

        fetchProductRelated(category)
    }, [])

    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <section>
                <h1>{data.title}</h1>
                <p>{data.description}</p>

                {isLoading ? (
                    'loading product related ...'
                ) : (
                    <div className="mt-10">
                        <h2 className="font-bold">Product Related</h2>
                        <ul>
                            {productRelated?.map((value: ProductProps) => (
                                <li key={value.id}>
                                    <Link
                                        href={`/product-ssr/${value.id}`}
                                        className="text-blue-500 hover:text-orange-600"
                                    >
                                        {value.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()

    return {
        props: data,
    }
}

export default ProductSSRPage
