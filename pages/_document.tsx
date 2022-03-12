import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-100 dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
        <div id="portal" />
      </Html>
    )
  }
}

export default MyDocument
