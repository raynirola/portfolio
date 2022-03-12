import { Logo, ThemeToggleButton } from './index'

export const Header = () => {
  return (
    <header className="header sticky top-0 z-20 my-0 py-2 text-gray-900 dark:text-gray-100 md:my-8 md:py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl">
        <nav className="flex items-center justify-between">
          <Logo default />
          <div className="flex items-center space-x-8">
            <ThemeToggleButton />
          </div>
        </nav>
      </div>
    </header>
  )
}
