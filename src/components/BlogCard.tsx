import Link from "next/link"
import Image from "next/image"
import { FC, ReactNode } from "react"

interface BlogCardProps {
  title: string,
  summary: string | ReactNode,
  slug: string,
  image: string
}

const BlogCard: FC<BlogCardProps> = ({ title, summary, slug, image }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a
        className="block w-full bg-white dark:bg-coolGray-800/50 hover:shadow px-4 md:px-6 py-4 sm:rounded-md mb-4 transform hover:scale-[102%] transition-all ease-in-out duration-200"
        aria-label={title}>
        <div className="flex flex-col items-start md:flex-row">
          <div
            className="relative flex-shrink-0 w-full mb-3 overflow-hidden bg-gray-200 rounded-md dark:bg-coolGray-800/50 md:mb-0 md:mr-4 h-36 md:w-48 md:h-28">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full mb-2 font-semibold leading-tight text-gray-900 md:text-lg dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="text-sm leading-tight text-gray-600 line-clamp-3 md:line-clamp-4 dark:text-gray-400">
              {summary}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export { BlogCard }
