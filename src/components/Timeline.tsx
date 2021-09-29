import { FC, ReactElement } from "react"

interface TimelineProps {
  data: Array<SingleTimelineProps>,
  label: string,
  icon: ReactElement
}

export interface SingleTimelineProps{
  year?: string | number
  title?: string
  subtitle?: string
  description?: string
}

const Timeline: FC<TimelineProps> = ({data, label, icon}) => {

  const SingleTimeline:FC<SingleTimelineProps> = (timeline) => {
    return(
      <div className='ml-2.5 flex justify-start'>
        <div className="flex items-baseline space-x-8">
          <div className="flex-shrink-0 ring-2 ring-green-700 ring-offset-2 dark:ring-offset-gray-900 bg-green-600 dark:bg-gray-300 w-3 h-3 rounded-full"/>
          <div className="flex-1">
            <div className="mb-2 text-gray-500 dark:text-gray-400 text-sm font-light">{timeline.year}</div>
            <h3 className="font-semibold text-green-700 tracking-wide uppercase tracking-wider text-sm">{timeline.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs tracking-wide font-semibold">{timeline.subtitle}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{timeline.description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div>
        <div className="flex items-center space-x-5">
          <div className="flex items-center justify-center h-8 w-8 bg-green-700 rounded-full">{icon}</div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{label}</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 h-full w-0.5 bg-green-700 rounded-full transform -translate-x-1/2"/>
          <div className="relative space-y-12 pt-12">
            {data.map((timeline, index) => <SingleTimeline key={index} {...timeline}/>)}
        </div>
        </div>
      </div>
  )
}

export { Timeline }