import { FC, ReactElement } from 'react'
import Image from 'next/image'

import { ProjectCard } from '@/components'

export const Projects: FC = (): ReactElement => {
  const renderImage = (path: string): ReactElement => {
    return <Image alt="Logo of Sikkim Store" objectFit="contain" layout="fill" src={path} />
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
      <ProjectCard
        title="Sikkim Store"
        image={renderImage('/images/projects/sikkimstore.png')}
        wip
      />
      <ProjectCard
        title="Atcore Tech"
        url="https://atcore.tech"
        image={renderImage('/images/projects/atcore.png')}
      />
      <ProjectCard
        title="Eagle Aid"
        image={renderImage('/images/projects/eagle-aid.png')}
        url="https://eagle-aid.com"
      />
      <ProjectCard
        title="S P Y F"
        image={renderImage('/images/projects/spyf.png')}
        url="https://spyf.vercel.app"
        wip
      />
    </div>
  )
}
