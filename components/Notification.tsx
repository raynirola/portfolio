import { NotificationProps } from '@/types'
import * as Icons from '@heroicons/react/outline'
import { FC } from 'react'

const Notification: FC<NotificationProps> = ({ type, message, title }) => {
  switch (type) {
    case 'success':
      return (
        <div className="mb-2 flex w-full items-start bg-white px-4 py-3 shadow-sm dark:bg-blueGray-800 sm:max-w-xs sm:rounded-md">
          <Icons.CheckCircleIcon className="mr-2 w-5 flex-none text-green-600" />
          <div className="flex-1">
            <p className="mb-1 text-sm font-medium text-green-600">{title}</p>
            <p className="text-xs text-gray-600 line-clamp-2 dark:text-gray-300">{message}</p>
          </div>
        </div>
      )
    case 'danger':
      return (
        <div className="mb-2 flex w-full items-start bg-white px-4 py-3 shadow-sm dark:bg-blueGray-800 sm:max-w-xs sm:rounded-md">
          <Icons.ShieldExclamationIcon className="mr-2 w-5 flex-none text-red-600" />
          <div className="flex-1">
            <p className="mb-1 text-sm font-medium text-red-600">{title}</p>
            <p className="text-xs text-gray-600 line-clamp-2 dark:text-gray-300">{message}</p>
          </div>
        </div>
      )
    case 'warning':
      return (
        <div className="mb-2 flex w-full items-start bg-white px-4 py-3 shadow-sm dark:bg-blueGray-800 sm:max-w-xs sm:rounded-md">
          <Icons.ExclamationIcon className="mr-2 w-5 flex-none text-yellow-600" />
          <div className="flex-1">
            <p className="mb-1 text-sm font-medium text-yellow-600">{title}</p>
            <p className="text-xs text-gray-600 line-clamp-2 dark:text-gray-300">{message}</p>
          </div>
        </div>
      )
    case 'info':
      return (
        <div className="mb-2 flex w-full items-start bg-white px-4 py-3 shadow-sm dark:bg-blueGray-800 sm:max-w-xs sm:rounded-md">
          <Icons.InformationCircleIcon className="mr-2 w-5 flex-none text-blue-600" />
          <div className="flex-1">
            <p className="mb-1 text-sm font-medium text-blue-600">{title}</p>
            <p className="text-xs text-gray-600 line-clamp-2 dark:text-gray-300">{message}</p>
          </div>
        </div>
      )
    default:
      return (
        <div className="mb-2 flex w-full items-start bg-white px-4 py-3 shadow-sm dark:bg-blueGray-800 sm:max-w-xs sm:rounded-md">
          <Icons.CheckCircleIcon className="mr-2 w-5 flex-none text-gray-700 dark:text-gray-200" />
          <div className="flex-1">
            <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">{title}</p>
            <p className="text-xs text-gray-500 line-clamp-2 dark:text-gray-400">{message}</p>
          </div>
        </div>
      )
  }
}

export default Notification
