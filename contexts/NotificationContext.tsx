import { Transition } from '@headlessui/react'
import dynamic from 'next/dynamic'
import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'

import Notification from '@/components/Notification'
import { INotificationContext, NotificationProps } from '@/types'

const NotificationContext = createContext<INotificationContext>({} as INotificationContext)

const Portal = dynamic(() => import('@/components/Portal'), { ssr: false })

const NotificationProvider: FC<PropsWithChildren<unknown>> = props => {
  const [notification, setNotification] = useState<NotificationProps | null>(null)

  const notify = (n: NotificationProps) => {
    setNotification(n)
    setTimeout(() => setNotification(null), 4000)
  }

  return (
    <NotificationContext.Provider value={{ notify }}>
      {props.children}
      <Portal>
        <div className="pointer-events-none fixed top-0 right-0 left-0 z-20 sm:top-4 sm:right-4 sm:left-auto sm:w-full sm:max-w-xs">
          <Transition
            show={!!notification}
            enter="transition duration-300 transform ease-in"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition duration-300 transform ease-out"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full">
            <Notification title={notification?.title} message={notification?.message} type={notification?.type} />
          </Transition>
        </div>
      </Portal>
    </NotificationContext.Provider>
  )
}

export default NotificationProvider

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('useNotification must be used within a NotificationProvider')
  return context
}
