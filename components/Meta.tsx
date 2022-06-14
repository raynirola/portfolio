import Head from 'next/head'
import { FC } from 'react'

const Meta: FC = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href={'/apple-touch-icon.png'} />
      <link rel="icon" type="image/png" sizes="32x32" href={'/favicon-32x32.png'} />
      <link rel="icon" type="image/png" sizes="16x16" href={'/favicon-16x16.png'} />
      <link rel="manifest" href={'/site.webmanifest'} />

      <title>Ray Nirola | Full Stack Developer</title>
      <meta name="robots" content="follow, index" />
      <meta
        content="Ideas to execution, perfectly. Ethereum Blockchain, Web3, React, Next.js, Tailwind Css, GraphQL, Node.js, MySQL, PostgresSQL, Express, AWS, and more."
        name="description"
      />
      <meta
        name="keywords"
        content="raynirola, sikkim, full stack developer, developer, India, gangtok, crypto, blockchain, laravel, vuejs, python, flutter, git, tailwindcss, tailwind, tailwind css, frontend, front-end, ethereum, web3, react, next.js, graphql, node.js, mysql, postgresql, express, aws, javascript, typescript, node, nodejs, javascript, typescript"
      />
      <link rel="canonical" href="https://www.nirola.tech" />
      <meta name="theme-color" content="#f2f4f6" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ray Nirola" />
      <meta
        property="og:description"
        content="Ideas to execution, perfectly. Ethereum Blockchain, Web3, React, Next.js, Tailwind Css, GraphQL, Node.js, MySQL, PostgresSQL, Express, AWS, and more."
      />
      <meta property="og:title" content="Ray Nirola | Full Stack Developer" />
      <meta property="og:image" content="https://www.nirola.tech/images/me.png" />
      <meta property="og:url" content="https://www.nirola.tech" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_raynirola" />
      <meta name="twitter:title" content="Ray Nirola | Full Stack Developer" />
      <meta
        name="twitter:description"
        content="Ideas to execution, perfectly. Ethereum Blockchain, Web3, React, Next.js, Tailwind Css, GraphQL, Node.js, MySQL, PostgresSQL, Express, AWS, and more."
      />
      <meta name="twitter:image" content="https://www.nirola.tech/images/me.png" />
    </Head>
  )
}

export default Meta
