import { FC, ReactElement } from "react"
import Image from "next/image"

import { ProjectCard } from "@/components"

export const Projects: FC = (): ReactElement => {
  const renderImage = (path: string): ReactElement => {
    return(
      <Image
        alt="Logo of Sikkim Store"
        objectFit="contain"
        layout="fill"
        src={path}
      />
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
      <ProjectCard  
        title="Sikkim Store" 
        url="https://sikkim.store"
        image={renderImage("/images/projects/sikkimstore.png")}
      />
      <ProjectCard
        title="Atcore Tech"
        url="https://atcore.tech"
        image={renderImage("/images/projects/atcore.png")}
      />
      <ProjectCard  
        title="Sikkim News"
        image={renderImage("/images/projects/sikkimnews.jpg")}
        wip
      />
      <ProjectCard  
        title="S P Y F"
        image={renderImage("/images/projects/spyf.png")}
        wip
      />
    </div>
  )
}
