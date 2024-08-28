import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { BlogProps } from '@/types/blogTypes'

const BlogLoader = () => (
    <div className="animate-pulse space-y-1">
        {Array.from(Array(30).keys()).map((_, i) => (
            <div key={i} className="h-5 bg-slate-300 rounded"></div>
        ))}
    </div>
)

const Blog: NextPage = () => {
    const [blog, setBlog] = useState<BlogProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchBlogs = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        )
        const data: BlogProps[] = await response.json()

        setBlog(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <article className="blog">
            <h1 className="blog__title">Blog</h1>
            {isLoading ? (
                <BlogLoader />
            ) : (
                <section className="blog__list">
                    {blog?.map((post: BlogProps) => (
                        <div key={post.id}>title: {post.title}</div>
                    ))}
                </section>
            )}
        </article>
    )
}

export default Blog
