import Link from "next/link"
import { Logo, ThemeToggleButton } from "@/components/index"

export const Header = () => {
  return (
    <header className="header sticky top-0 z-20 py-2 my-0 text-gray-900 md:py-8 md:my-8 dark:text-gray-100">
      <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 mx-auto sm:px-6 lg:px-0">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-8">
            <Link href="/" scroll>
              <a className="text-gray-900 dark:text-gray-100">Home</a>
            </Link>
            <ThemeToggleButton />
          </div>
        </nav>
      </div>
    </header>
  )
}
