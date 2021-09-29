import { FC, ReactElement } from "react"
import Link from "next/link"
import { PhotographIcon } from "@heroicons/react/outline"

interface ProjectCardProps {
  image?: ReactElement,
  title: string,
  url?: string
  wip?: boolean
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, url , wip = false}): ReactElement => {

  function renderImage(): ReactElement {
    return (
      <div className="relative h-10 w-20 sm:h-12 sm:w-24">
        {image}
      </div>
    )
  }

  function renderPlaceholder(): ReactElement {
    return (
      <div className=" h-10 w-20 sm:h-12 sm:w-24">
        <PhotographIcon className="mx-auto w-9 h-9 text-gray-400/50" />
      </div>
    )
  }

  function renderComingSoon() {
    return (
      <div className="absolute">
        <div className="absolute right-1 top-1 rounded-md text-xs bg-green-100 text-green-600 font-light px-1 py-0.5">
          coming soon
        </div>
      </div>
    )
  }

  function renderAsDiv(): ReactElement {
    return (
      <div className="aspect-h-2 aspect-w-4 bg-white rounded-md overflow-hidden">
        {wip && renderComingSoon()}
        <div className="p-2 text-center text-gray-700 grid place-items-center place-content-center">
          {image ? renderImage() : renderPlaceholder()}
          <p className="mt-2 text-xs text-gray-700 uppercase font-semibold tracking-wider">{title}</p>
        </div>
      </div>
    )
  }

  function renderAsLink(url: string): ReactElement {
    return (
      <div className="relative aspect-h-2 aspect-w-4 bg-white rounded-md overflow-hidden">
        { wip && renderComingSoon()}
          <Link href={url}>
            <a target="_blank" rel="nofollow noopener noreferrer"
               className="p-2 text-center text-gray-700 grid place-items-center place-content-center">
              {image ? renderImage() : renderPlaceholder()}
              <p className="mt-2 text-xs text-gray-700 uppercase font-semibold tracking-wider">{title}</p>
            </a>
          </Link>
      </div>
    )
  }

  return url ? renderAsLink(url) : renderAsDiv()
}

export { ProjectCard }
