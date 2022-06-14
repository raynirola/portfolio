import Link from 'next/link'
import { FC, ReactElement } from 'react'

interface ProjectCardProps {
  image?: ReactElement
  title: string
  url?: string
  wip?: boolean
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, url, wip = false }): ReactElement => {
  function renderComingSoon() {
    return (
      <div className="absolute right-2 top-2 rounded-md bg-green-200 px-1 py-0.5 text-[10px] font-medium text-green-700">
        WIP
      </div>
    )
  }

  function renderAsDiv() {
    return (
      <div className="aspect-[2/1] overflow-hidden rounded-md bg-white grid place-content-center place-items-center">
        {wip && renderComingSoon()}
        <div className=" p-2 text-center text-gray-700">
          <div className="relative h-10 w-20 sm:h-12 sm:w-24 mx-auto">{image}</div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-700">{title}</p>
        </div>
      </div>
    )
  }

  function renderAsLink(url: string) {
    return (
      <div className="relative transition ease-in-out duration-300 p-2 text-center aspect-[2/1] overflow-hidden rounded-md bg-white ring-1 ring-transparent ring-offset-2 ring-offset-gray-100 hover:ring-2 hover:ring-purple-500  grid place-content-center place-items-center">
        {wip && renderComingSoon()}
        <Link href={url}>
          <a target="_blank" rel="nofollow noopener noreferrer" className="text-gray-700">
            <div className="relative h-10 w-20 sm:h-12 sm:w-24 mx-auto">{image}</div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-700">{title}</p>
          </a>
        </Link>
      </div>
    )
  }

  return url ? renderAsLink(url) : renderAsDiv()
}

export default ProjectCard
