import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CategoryListPage() {
    const router: NextRouter = useRouter()

    useEffect(() => {
        // destructure and get the slug
        const category = router.query.category
        console.log('category = ', category)
    }, [router.query])

    return (
        <article className="blog-detail">
            <h1 className="blog-detail__title">Product category</h1>
        </article>
    )
}
