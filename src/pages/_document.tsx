import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-100 dark:bg-coolGray-900">
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument