import Link from 'next/link'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface BlogCardProps {
  title: string
  summary: string | ReactNode
  slug: string
  image: string
}

const BlogCard: FC<BlogCardProps> = ({ title, summary, slug, image }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a
        className="mb-4 block w-full transform bg-white px-4 py-4 transition-all duration-200 ease-in-out hover:scale-[102%] hover:shadow dark:bg-coolGray-800/50 sm:rounded-md md:px-6"
        aria-label={title}>
        <div className="flex flex-col items-start md:flex-row">
          <div className="relative mb-3 h-36 w-full flex-shrink-0 overflow-hidden rounded-md bg-gray-200 dark:bg-coolGray-800/50 md:mb-0 md:mr-4 md:h-28 md:w-48">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </div>
          <div>
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="mb-2 w-full font-semibold leading-tight text-gray-900 dark:text-gray-100 md:text-lg">
                {title}
              </h4>
            </div>
            <p className="text-sm leading-tight text-gray-600 line-clamp-3 dark:text-gray-400 md:line-clamp-4">
              {summary}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export { BlogCard }
