import Head from "next/head"
import {useRouter} from "next/router"

import {siteMeta} from "lib/constants"
const {siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon} = siteMeta

export default function Meta({pageTitle, pageDesc}) {
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    const desc = pageDesc ?? siteDesc
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`
    
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
            <link rel="cannonical" href={url} />
            <meta priority="og:url" content={url} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:local" content={siteLocale} />
            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />
                
        </Head>
    )
}