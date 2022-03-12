const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-900/90 dark:bg-black/70">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-0">
        <p className="text-center text-xs font-light text-gray-700 dark:text-gray-300">
          Ray Nirola &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export { Footer }
