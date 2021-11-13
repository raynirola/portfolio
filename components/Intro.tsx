import { FC, HTMLProps, SVGProps } from 'react'
import Image from 'next/image'

const Intro: FC<HTMLProps<HTMLDivElement>> = props => {
  return (
    <div {...props}>
      <div className="flex flex-col-reverse items-center justify-between sm:flex-row">
        <div className="mt-8 sm:mt-0">
          <h1 className="text-5xl font-extrabold text-gray-800 sm:text-7xl md:text-8xl dark:text-gray-200">
            Ray <br className="hidden sm:block" /> Nirola
          </h1>
          <div className="flex justify-center mt-8 sm:justify-start">
            <a
              href="https://github.com/raynirola"
              target="_blank"
              aria-label="Github Profile"
              rel="noopener noreferrer"
              title="Ray Nirola, Github Profile"
              className="relative mr-4">
              <div className="text-gray-700 dark:text-gray-300">
                <GitHubIcon className="w-6 h-6 transition duration-200 ease-in-out transform md:w-7 md:h-7 hover:scale-110 hover:rotate-12" />
              </div>
            </a>
            <a
              href="mailto:hi@raynirola.dev?subject=Saying%20Hello"
              target="_blank"
              title="Send Email"
              rel="noopener noreferrer"
              aria-label="Send Email"
              className="relative mr-4">
              <div className="text-gray-700 dark:text-gray-300">
                <SendMailIcon className="w-6 h-6 transition duration-200 ease-in-out transform md:w-7 md:h-7 hover:scale-110 hover:rotate-12" />
              </div>
            </a>
            <a
              href="https://twitter.com/_raynirola"
              target="_blank"
              title="Ray Nirola, Twitter"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="relative">
              <div className="text-gray-700 dark:text-gray-300">
                <TwitterIcon className="w-6 h-6 transition duration-200 ease-in-out transform md:w-7 md:h-7 hover:scale-110 hover:rotate-12" />
              </div>
            </a>
          </div>
        </div>

        <div className="relative">
          <HeroPattern className="absolute z-0 w-48 h-auto text-green-600 opacity-50 top-12 left-4 lg:w-64" />
          <HeroImageMask />
          <div
            className="relative z-10 w-48 h-48 lg:w-64 lg:h-60"
            style={{ clipPath: 'url(#heroImageMask)' }}>
            <Image
              alt="Ray Nirola"
              src={require('@/../../public/images/me.png')}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 496 512"
      stroke="currentColor"
      height="1em"
      width="1em"
      fill="currentColor"
      {...props}>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  )
}

const SendMailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 496 512"
      height="1em"
      width="1em"
      {...props}>
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
    </svg>
  )
}

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      {...props}>
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  )
}

const HeroPattern = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={504}
      height={410}
      viewBox="0 0 504 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M126.76 17.525C128.446 7.968 136.751 1 146.456 1h335.875c12.436 0 21.857 11.228 19.696 23.475l-59.45 337c-1.686 9.557-9.991 16.525-19.696 16.525H87.006c-12.436 0-21.857-11.228-19.696-23.475l59.45-337z"
        stroke="url(#prefix__paint0_linear)"
      />
      <path
        d="M35.319 197.524C37.005 187.967 45.309 181 55.014 181h187.148c12.436 0 21.856 11.229 19.695 23.476l-33.176 188c-1.686 9.557-9.99 16.524-19.695 16.524H21.838C9.402 409-.018 397.771 2.143 385.524l33.175-188z"
        stroke="url(#prefix__paint1_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={284.668}
          y1={1}
          x2={284.668}
          y2={378}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.401} stopColor="currentColor" />
          <stop offset={1} stopColor="currentColor" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={132}
          y1={181}
          x2={132}
          y2={409}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.401} stopColor="currentColor" />
          <stop offset={1} stopColor="currentColor" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const HeroImageMask = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={0} height={0} {...props}>
      <defs>
        <clipPath id="heroImageMask" clipPathUnits="objectBoundingBox" transform="scale(.005)">
          <path
            fill="#FFF"
            d="M26.737 8.263A10 10 0 0136.585 0H186.25c6.218 0 10.928 5.614 9.848 11.737L169.6 161.94a10 10 0 01-9.848 8.263H10.087c-6.218 0-10.928-5.614-9.848-11.737L26.737 8.263z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export { Intro }