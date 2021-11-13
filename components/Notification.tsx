import { FC } from 'react'
import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/outline'
import type { NotificationType } from '@/contexts/NotificationContext'

const Notification: FC<NotificationType> = ({ type, message, title }) => {
  switch (type) {
    case 'success':
      return (
        <div className="flex items-start px-4 py-3 bg-white dark:bg-blueGray-800 rounded-md mb-2 shadow-sm max-w-xs">
          <CheckCircleIcon className="w-5 text-green-600 mr-2 flex-none" />
          <div className="flex-1">
            <p className="font-medium text-sm text-green-600 mb-1">{title}</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{message}</p>
          </div>
        </div>
      )
    case 'danger':
      return (
        <div className="flex items-start px-4 py-3 bg-white dark:bg-blueGray-800 rounded-md mb-2 shadow-sm max-w-xs">
          <ShieldExclamationIcon className="w-5 text-red-600 mr-2 flex-none" />
          <div className="flex-1">
            <p className="font-medium text-sm text-red-600 mb-1">{title}</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{message}</p>
          </div>
        </div>
      )
    case 'warning':
      return (
        <div className="flex items-start px-4 py-3 bg-white dark:bg-blueGray-800 rounded-md mb-2 shadow-sm max-w-xs">
          <ExclamationIcon className="w-5 text-yellow-600 mr-2 flex-none" />
          <div className="flex-1">
            <p className="font-medium text-sm text-yellow-600 mb-1">{title}</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{message}</p>
          </div>
        </div>
      )
    case 'info':
      return (
        <div className="flex items-start px-4 py-3 bg-white dark:bg-blueGray-800 rounded-md mb-2 shadow-sm max-w-xs">
          <InformationCircleIcon className="w-5 text-blue-600 mr-2 flex-none" />
          <div className="flex-1">
            <p className="font-medium text-sm text-blue-600 mb-1">{title}</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{message}</p>
          </div>
        </div>
      )
    default:
      return (
        <div className="flex items-start px-4 py-3 bg-white dark:bg-blueGray-800 rounded-md mb-2 shadow-sm max-w-xs">
          <CheckCircleIcon className="w-5 text-gray-700 dark:text-gray-200 mr-2 flex-none" />
          <div className="flex-1">
            <p className="font-medium text-sm text-gray-700 dark:text-gray-200 mb-1">{title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{message}</p>
          </div>
        </div>
      )
  }
}

export { Notification }
