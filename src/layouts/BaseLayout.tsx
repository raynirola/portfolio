import { FC, ReactElement } from "react"

import { Footer, HeadComponent, HeadComponentProps, Header } from "@/components"

interface BaseLayoutProps {
  children: ReactElement[]
  meta?: HeadComponentProps
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children , meta}) => {
  return (
    <>
      <HeadComponent
        title={meta?.title}
        image={meta?.image}
        description={meta?.description}
      />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
