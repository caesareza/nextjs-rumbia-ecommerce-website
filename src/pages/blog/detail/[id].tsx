import { NextRouter, useRouter } from "next/router";

export default function BlogDetail() {
    const router:NextRouter = useRouter();

    console.log('id = ', router.query.id);

    return (
        <article className="blog-detail">
            <h1 className="blog-detail__title">Article Detail {router.query.id}</h1>
        </article>
    )
}