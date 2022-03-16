import '@/styles/app.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { NotificationProvider } from '@/contexts/NotificationContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default MyApp
