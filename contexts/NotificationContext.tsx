import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from '@headlessui/react'

import { Notification } from '@/components/Notification'

const crypto = require('crypto')

export const NotificationContext = createContext(null)

export type NotificationType = {
  id: string
  message: string
  title?: string
  type: 'success' | 'error' | 'warning' | 'info' | string
}

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([])

  useEffect(() => {
    if (notifications.length > 0) {
      const timeout = setTimeout(
        () => setNotifications(notifications => notifications.slice(1)),
        5000
      )
      return () => clearTimeout(timeout)
    }
  }, [notifications])

  const addNotification = useCallback(
    notification =>
      setNotifications([...notifications, { ...notification, id: crypto.randomUUID }]),
    [notifications]
  )

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <Portal>
        <div className="fixed top-0 right-0 left-0 sm:top-4 sm:right-4 sm:left-auto pointer-events-none z-20 sm:max-w-xs sm:w-full">
          {notifications.map(notification => (
            <Transition
              key={notifications.indexOf(notification)}
              show
              appear
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
                id={notification.id}
              />
            </Transition>
          ))}
        </div>
      </Portal>
    </NotificationContext.Provider>
  )
}

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? createPortal(children, document.getElementById('portal')) : null
}

export const useNotification = () => {
  const { addNotification } = useContext(NotificationContext)
  return {
    addNotification,
  }
}
