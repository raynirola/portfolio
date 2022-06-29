import { HashtagIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { FC, ReactElement } from 'react'

interface ProjectCardProps {
  image?: ReactElement
  title: string
  url: string
  status?: 'abandoned' | 'wip' | 'live'
  description?: string
  tags?: string[]
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, url, status = 'live', description, tags }): ReactElement => {
  function Status() {
    if (!status) return null

    if (status === 'live') {
      return (
        <>
          <div className="absolute right-2 top-2 rounded-full bg-green-500 w-2 h-2" />
          <div className="absolute right-2 top-2 rounded-full bg-green-500 w-2 h-2 animate-ping" />
        </>
      )
    }

    if (status === 'abandoned') {
      return <div className="absolute right-2 top-2 rounded-full bg-red-500 w-2 h-2" />
    }

    return <div className="absolute right-2 top-2 rounded-full bg-blue-500 w-2 h-2" />
  }

  function ProjectImage() {
    return <div className="relative h-10 w-20 sm:h-12 sm:w-24 mx-auto">{image}</div>
  }

  function Title() {
    return <p className="mt-2 text-xs font-bold uppercase tracking-tight text-gray-700">{title}</p>
  }

  function Description() {
    if (!description) return null
    return <p className="text-xs text-gray-500 mt-1 px-6 hidden sm:block">{description}</p>
  }

  function Tags() {
    if (!tags) return null
    return (
      <div className="absolute bottom-2 md:bottom-4 lg:bottom-2 inset-x-0 hidden sm:block">
        <ul className="flex flex-wrap justify-center -ml-2 text-[10px] font-bold tracking-tighter px-4">
          {tags.slice(0, 4).map((tag, index) => (
            <li key={index} className="ml-2 text-gray-500 inline-flex items-center mt-1">
              <HashtagIcon className="w-3 h-3 fill-current text-blue-600" />
              {tag}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="relative transition ease-in-out duration-300 py-4 px-2 text-center aspect-[3/2] md:aspect-[5/3] lg:aspect-[2/1] xl:aspect-[16/9] overflow-hidden rounded-md bg-white ring-1 ring-purple-600/20 hover:ring-offset-2 hover:ring-offset-gray-100 hover:ring-2 hover:ring-purple-500  flex flex-col justify-center items-center">
      <Status />
      <Link href={url}>
        <a target="_blank" rel="nofollow noopener noreferrer" className="text-gray-700">
          <ProjectImage />
          <Title />
          <Description />
          <Tags />
        </a>
      </Link>
    </div>
  )
}

export default ProjectCard
