import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useNotification } from '@/contexts/NotificationContext'
import { MouseEventHandler } from 'react'

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const { notify } = useNotification()

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    notify({
      title: 'Theme changed',
      message: `Theme changed to ${resolvedTheme === 'dark' ? 'LIGHT' : 'DARK'}`,
      type: 'info'
    })
  }

  return (
    <button
      type="button"
      className="group h-10 w-10 rounded bg-gray-200 p-3 transition-all duration-300 ease-in-out dark:bg-slate-800"
      onClick={handleClick}>
      {resolvedTheme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </button>
  )
}

const LightIcon = () => (
  <SunIcon
    className="h-4 w-4 text-gray-800 transition-all duration-300 ease-in-out group-hover:scale-150 dark:text-gray-200"
    aria-hidden="true"
  />
)

const DarkIcon = () => (
  <MoonIcon
    className="h-4 w-4 text-gray-800 transition-all duration-1000 ease-in-out group-hover:scale-150 dark:text-gray-300"
    aria-hidden="true"
  />
)

export { ThemeToggleButton }
