import Logo from '@/components/Logo'

const Header = () => {
  return (
    <header className="header sticky top-0 z-20 my-0 py-2 text-gray-900 dark:text-gray-100 md:my-6 md:py-4">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl">
        <nav className="flex items-center justify-between">
          <Logo />
        </nav>
      </div>
    </header>
  )
}

export default Header
