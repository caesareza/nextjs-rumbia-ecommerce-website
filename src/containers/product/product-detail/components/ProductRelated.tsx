import { memo, useEffect, useState } from 'react'
import { getProductCategory } from '@/api/product/api'
import { ProductProps } from '@/api/product/types'
import Link from 'next/link'
import { formatRupiah } from '@/utils/numberUtils'

interface ProductRelatedProps {
    category: string | undefined
}

function ProductRelatedLoader() {
    return (
        <section className="border-t mt-10 pt-5">
            <h2 className="font-bold text-2xl mb-5 bg-slate-100 h-7 w-72"></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {Array.from(Array(4).keys()).map((_, i) => (
                    <div className="bg-slate-100 rounded h-60" key={i}></div>
                ))}
            </div>
        </section>
    )
}

function ProductRelated({ category }: ProductRelatedProps) {
    const [productRelated, setProductRelated] = useState<ProductProps[]>([])
    const [isError, setIsError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getProductRelated = async () => {
        if (!category) return null
        if (category === '') return null

        const data = await getProductCategory(category)
        const products = data.slice(0, 4)

        setIsLoading(false)

        if (!products) {
            setIsError(true)
            setIsLoading(false)
            return
        }

        setProductRelated(products)
        setIsLoading(false)
    }

    useEffect(() => {
        getProductRelated()
    }, [category])

    if (!category) return null
    if (category === '') return null
    if (isError) return null
    if (isLoading) return <ProductRelatedLoader />

    return (
        <section className="border-t mt-10 pt-5">
            <h2 className="font-bold text-2xl mb-5">
                Try our best seller menu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {productRelated?.map((item) => (
                    <Link
                        href={`/product/${item.id}`}
                        className="flex flex-col border p-5 rounded"
                        key={item.id}
                    >
                        <div className="mb-3">
                            <img
                                src="https://static.fore.coffee/product/Double%20Iced%20Shaken%20Latte%20(1).jpg"
                                alt="Americano Iced"
                                className="w-full object-cover rounded"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold">{item.title}</h3>
                            <div>{formatRupiah(21000)}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default memo(ProductRelated)
