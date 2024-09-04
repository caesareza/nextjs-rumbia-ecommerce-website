import { useAtomValue } from 'jotai'
import { productDetailAtom } from '@/store/productAtom'

export default function ProductRelated() {
    const productID = useAtomValue(productDetailAtom)

    // eslint-disable-next-line no-console
    console.log('productID', productID)
    return <section>Product related</section>
}
