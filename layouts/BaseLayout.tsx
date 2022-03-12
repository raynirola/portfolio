import { FC, ReactElement } from 'react'

import { Footer, HeadComponent, HeadComponentProps, Header, UkraineBanner } from '@/components'

interface BaseLayoutProps {
  children: ReactElement | ReactElement[]
  meta?: HeadComponentProps
}

export const BaseLayout: FC<BaseLayoutProps> = props => {
  return (
    <>
      <HeadComponent
        title={props.meta?.title}
        image={props.meta?.image}
        description={props.meta?.description}
      />
      <UkraineBanner />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
