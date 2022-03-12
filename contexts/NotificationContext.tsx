import React, { createContext, FC, useContext, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Notification } from '@/components/Notification'
import dynamic from 'next/dynamic'

interface NotificationContextProps {
  notify: Notify
}

type Notify = (notification: NotificationType) => void

export const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps
)

export type NotificationType = {
  message: string
  title?: string
  type: 'success' | 'error' | 'warning' | 'info' | string
}

const Portal = dynamic(() => import('@/components/Portal'), { ssr: false })

export const NotificationProvider: FC = props => {
  const [notification, setNotification] = useState<NotificationType>({} as NotificationType)

  const notify: Notify = n => {
    setNotification(n)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification({} as NotificationType)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [notification])

  return (
    <NotificationContext.Provider value={{ notify }}>
      {props.children}
      <Portal>
        <div className="pointer-events-none fixed top-0 right-0 left-0 z-20 sm:top-4 sm:right-4 sm:left-auto sm:w-full sm:max-w-xs">
          <Transition
            show={Object.keys(notification).length > 0}
            enter="transition duration-300 transform ease-in"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition duration-300 transform ease-out"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full">
            <Notification
              title={notification.title}
              message={notification.message}
              type={notification.type}
            />
          </Transition>
        </div>
      </Portal>
    </NotificationContext.Provider>
  )
}

type UseNotification = () => {
  notify: Notify
}

export const useNotification: UseNotification = () => {
  const { notify } = useContext(NotificationContext)
  return {
    notify
  }
}
