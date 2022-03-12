import Image from 'next/image'

const UkraineBanner = () => {
  return (
    <div className="bg-purple-700 py-2 text-gray-900 dark:text-gray-100 sm:py-4 md:py-6 lg:py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl">
        <h2 className="inline-flex items-center text-xl font-bold text-purple-100">
          <span className="mr-2">I stand with Ukraine</span>
          <Image src={'/ukraine-flag.png'} alt="Ukraine Flag" width={30} height={30} />
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-purple-300">
          The Russian government’s attack on Ukraine has put millions of innocent lives in danger. I
          stand with Ukraine to support their freedom and to defend democracy. If you wish to
          support Ukraine and its people in their time of need, please consider &nbsp;
          <a
            href="https://www.icrc.org/en/donate/ukraine"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className="text-purple-200 underline hover:text-purple-100">
            donating to the Red Cross
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export { UkraineBanner }
