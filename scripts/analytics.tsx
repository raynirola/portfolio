import Script from 'next/script'
import { Fragment } from 'react'

const Analytics = () => {
  const ga = process.env.NEXT_PUBLIC_GA_ID
  const env = process.env.NODE_ENV

  if (!ga || env === 'development') return null

  return (
    <Fragment>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} />
      <Script
        id="analytics"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ga}');
      `,
        }}
      />
    </Fragment>
  )
}

export default Analytics
