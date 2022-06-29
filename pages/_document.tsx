import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className="bg-neutral-100">
          <Main />
          <NextScript />
        </body>
        <div id="portal" />
      </Html>
    )
  }
}

export default MyDocument
