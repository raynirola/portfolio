import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Notification } from '@/components/Notification'

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
      setNotifications([...notifications, { ...notification, id: crypto.randomUUID() }]),
    [notifications]
  )

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <Portal>
        <div className="fixed top-0 right-0 left-0 sm:top-4 sm:right-4 sm:left-auto pointer-events-none z-20">
          {notifications.map(notification => (
            <Notification
              key={notification.id}
              title={notification.title}
              message={notification.message}
              type={notification.type}
              id={notification.id}
            />
          ))}
        </div>
      </Portal>
    </NotificationContext.Provider>
  )
}

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? createPortal(children, document.body) : null
}

export const useNotification = () => {
  const { addNotification } = useContext(NotificationContext)
  return {
    addNotification,
  }
}
