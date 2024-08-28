import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'

export default function BlogDetailKumparanNewsPage() {
    const router: NextRouter = useRouter()

    useEffect(() => {
        // return if the slug undefined
        if (!router.query.slug) return
        if (typeof router.query.slug !== 'string') return

        // destructure and get the slug
        const { slug } = router.query
        console.log('slug = ', slug)

        // get id from slug
        const getIDFromSLug: string | undefined = slug.split('-').at(-1)
        console.log('getIDFromSLug', getIDFromSLug)
    }, [router.query])

    return (
        <article className="blog-detail">
            <h1 className="blog-detail__title">
                Article Detail {router.query.slug}
            </h1>
        </article>
    )
}
