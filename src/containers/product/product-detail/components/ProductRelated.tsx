import { memo } from 'react'

interface ProductRelatedProps {
    productId: number
}

function ProductRelated({ productId }: ProductRelatedProps) {
    // eslint-disable-next-line no-console
    console.log('productId', productId)
    return <section>Product related</section>
}

export default memo(ProductRelated)
