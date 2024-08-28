import { NextRouter, useRouter } from 'next/router'

export default function BlogDetailLagi() {
    const router: NextRouter = useRouter()

    console.log('slug = ', router.query.slug)

    return (
        <article className="blog-detail">
            <h1 className="blog-detail__title">
                Article Detail {router.query.slug}
            </h1>
        </article>
    )
}
