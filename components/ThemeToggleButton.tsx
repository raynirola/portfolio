import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useNotification } from '@/contexts/NotificationContext'

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { addNotification } = useNotification()

  useEffect(() => setMounted(true), [])

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    addNotification({
      title: 'Theme changed',
      message: `Theme changed to ${
        resolvedTheme === 'dark' ? 'light' : 'dark'
      } and saved to local storage lorem ipsum dolor sit amet`,
      type: 'info',
    })
  }

  return (
    <button
      type="button"
      className="w-10 h-10 p-3 transition-all duration-1000 ease-in-out bg-gray-200 rounded dark:bg-coolGray-800"
      onClick={handleClick}>
      {mounted && resolvedTheme === 'dark' ? (
        <SunIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" aria-hidden="true" />
      ) : (
        <MoonIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" aria-hidden="true" />
      )}
    </button>
  )
}

export { ThemeToggleButton }
