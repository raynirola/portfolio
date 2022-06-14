export interface INotificationContext {
  notify: (notification: INotifyProps) => void
}

export interface NotificationProps {
  title?: string
  message?: string
  type?: 'success' | 'error' | 'warning' | 'info' | 'danger'
}
