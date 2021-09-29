import Head from "next/head"
import { FC, ReactElement } from "react"
import { useRouter } from "next/router"

import { Footer, Header } from "@/components"

export interface Meta {
  title?: string,
  description?: string,
  type?: string
  image?: string
}

interface BaseLayoutProps {
  meta?: Meta
  children: ReactElement[]
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children, meta }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta?.description} name="description" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`} />
        <meta property="og:type" content={meta?.type} />
        <meta property="og:site_name" content="Ray Nirola" />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:image" content={meta?.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_raynirola" />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content={meta?.image} />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
