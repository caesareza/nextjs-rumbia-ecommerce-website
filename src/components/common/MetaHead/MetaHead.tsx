import Head from 'next/head'
import globalMetaHead, { GlobalMetaHeadProps } from '@/constants/globalMetaHead'

const MetaHead = (props: GlobalMetaHeadProps) => {
    const {
        title = globalMetaHead.title,
        description = globalMetaHead.description,
        keywords = globalMetaHead.keywords,
        url = globalMetaHead.url,
        image = globalMetaHead.image,
    } = props

    const webTitle = 'fore.coffee'
    const mergeTitle = title + ' | ' + webTitle

    // Structured data for JSON+LD (https://json-ld.org)
    // this is an optional meta head info, you'll use this for e-com website or site that needs SEO.
    const structuredLd = JSON.stringify({
        '@context': 'http://schema.org',
        description:
            "NextJs Head, a reliable guide for how to use it and what it's really for.",
    })

    return (
        <Head>
            <title>{mergeTitle}</title>
            <meta name="description" content={description} />
            <meta name="keyword" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={url} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@forecoffee" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/*
        	Structured data.
        	https://json-ld.org
        	https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
        	https://schema.org/docs/schemas.html
            */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: structuredLd }}
                key="item-jsonld"
            />
        </Head>
    )
}

export default MetaHead
