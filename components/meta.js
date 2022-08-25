import Head from "next/head"

import {siteMeta} from "lib/constants"
const {siteTitle, siteDesc, siteUrl, siteLocate, siteType, siteIcon} = siteMeta

export default function Meta({pageTitle}) {
    return (
        <Head>
            <title>{pageTitle} | {siteTitle}</title>
            <meta property="og:title" content={`${pageTitle} | ${siteTitle}`} />
        </Head>
    )
}