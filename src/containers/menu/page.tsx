import { MetaHead } from '@/components/common'
import Link from 'next/link'
import { formatRupiah } from '@/utils/numberUtils'
import { fetchProduct } from '@/api/product/api'
import { useEffect, useState } from 'react'
import { ProductProps } from '@/api/product/types'
import MenuCategory from './components/MenuCategory'
import MenuLoader from './components/MenuLoader'

export default function Page() {
    const [product, setProduct] = useState<ProductProps[]>([])
    const fetchProductList = async () => {
        const response: ProductProps[] = await fetchProduct()
        setProduct(response)
    }

    useEffect(() => {
        fetchProductList()
    }, [])

    return (
        <>
            <MetaHead title="Our Menu" />
            <h1 className="text-green-800 font-bold md:mb-5 text-left text-3xl md:text-5xl md:text-center">
                Our Menu
            </h1>
            <section className="flex flex-col md:flex-row">
                <MenuCategory />
                <div className="w-full">
                    <h1 className="text-green-800 font-bold text-xl md:text-3xl mb-5">
                        Americano
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {product.length <= 0 ? (
                            <MenuLoader />
                        ) : (
                            <>
                                {product?.map((item) => (
                                    <Link
                                        href={`/product/${item.id}`}
                                        className="flex gap-5"
                                        key={item.id}
                                    >
                                        <div className="w-36 h-36">
                                            <img
                                                src="https://static.fore.coffee/product/Double%20Iced%20Shaken%20Latte%20(1).jpg"
                                                alt="Americano Iced"
                                                className="w-full object-cover rounded"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="font-bold">
                                                {item.title}
                                            </h3>
                                            <div className="pt-1 pb-3">
                                                {formatRupiah(21000)}
                                            </div>
                                            <p className="font-light break-all">
                                                Espresso shot dalam segelas air
                                                dengan menjaga ketebalan rasa
                                                kopinya
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
