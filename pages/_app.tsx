import { NotificationProvider } from '@/contexts/NotificationContext'
import Analytics from '@/scripts/analytics'
import '@/styles/app.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
      <Analytics />
    </NotificationProvider>
  )
}

export default MyApp
