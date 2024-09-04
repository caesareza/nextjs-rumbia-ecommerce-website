import { GetServerSidePropsContext } from 'next'
// import { useHydrateAtoms } from 'jotai/utils'
import { productDetailAtom } from '@/store/productAtom'

import ProductDetail from '@/containers/product/product-detail'
import { MetaHead } from '@/components/common'
import { fetchSingleProduct } from '@/api/product/api'
import { ProductProps } from '@/api/product/types'
import { useEffect } from 'react'

import { useAtom } from 'jotai'

interface ProductDetailProps {
    data: ProductProps
}

const ProductDetailPage = ({ data }: ProductDetailProps) => {
    // useHydrateAtoms([
    //     [productDetailAtom, data]
    // ])

    const [, setProduct] = useAtom(productDetailAtom)

    useEffect(() => {
        setProduct(data)
    }, [data.id])

    return (
        <>
            <MetaHead title={data.title} description={data.description} />
            <ProductDetail />
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query

    const data = await fetchSingleProduct(Number(id))
    return {
        props: { data },
    }
}

export default ProductDetailPage
