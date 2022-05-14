import '@/styles/app.css'
import type { AppProps } from 'next/app'
import { NotificationProvider } from '@/contexts/NotificationContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
    </NotificationProvider>
  )
}

export default MyApp
