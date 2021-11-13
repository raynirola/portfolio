const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black/70">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-0">
        <p className="text-xs font-light text-center text-gray-700 dark:text-gray-300">
          Ray Nirola &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export { Footer }
