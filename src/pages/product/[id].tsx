import { useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import { productDetailAtom } from '@/store/productAtom'
import { MetaHead } from '@/components/common'
import { fetchSingleProduct } from '@/api/product/api'
import { ProductDetailProps } from '@/api/product/types'
import { useAtom } from 'jotai'
import ProductDetail from '@/containers/product/product-detail'

// imageURL function
// import {imageURL} from "@/utils/stringUtils";

const ProductDetailPage = ({ data }: ProductDetailProps) => {
    const [, setProduct] = useAtom(productDetailAtom)

    // You'll need this imageURL function
    // to concat your domain image + your image string
    // const productImageURL = imageURL(data.image)
    // console.log('productImageURL', productImageURL)
    // then data.image can be replaced using productImageURL value

    useEffect(() => {
        setProduct(data)
    }, [data.id])

    return (
        <>
            <MetaHead
                title={data.title}
                description={data.description}
                image={data.image}
            />
            <ProductDetail data={data} />
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
