import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export interface HeadComponentProps {
  title?: string
  description?: string
  image?: string
}

const HeadComponent: FC<HeadComponentProps> = ({
  title = 'Ray Nirola',
  description = 'Ideas to execution, perfectly.',
  image = `${process.env.NEXT_PUBLIC_APP_URL}/images/me.png`,
}) => {
  const router = useRouter()
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href={'/apple-touch-icon.png'} />
      <link rel="icon" type="image/png" sizes="32x32" href={'/favicon-32x32.png'} />
      <link rel="icon" type="image/png" sizes="16x16" href={'/favicon-16x16.png'} />
      <link rel="manifest" href={'/site.webmanifest'} />

      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={description} name="description" />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ray Nirola" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_raynirola" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

export { HeadComponent }