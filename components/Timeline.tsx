import { FC, ReactElement } from 'react'

interface TimelineProps {
  data: Array<SingleTimelineProps>
  label: string
  icon: ReactElement
}

export interface SingleTimelineProps {
  year?: string | number
  title?: string
  subtitle?: string
  description?: string
}

const Timeline: FC<TimelineProps> = ({ data, label, icon }) => {
  const SingleTimeline: FC<SingleTimelineProps> = timeline => {
    return (
      <div className="ml-2.5 flex justify-start">
        <div className="flex items-baseline space-x-8">
          <div className="h-3 w-3 flex-shrink-0 rounded-full bg-green-600 ring-2 ring-green-700 ring-offset-2 dark:bg-gray-300 dark:ring-offset-gray-900" />
          <div className="flex-1">
            <div className="mb-2 text-sm font-light text-gray-500 dark:text-gray-400">
              {timeline.year}
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wide tracking-wider text-green-700">
              {timeline.title}
            </h3>
            <p className="text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-400">
              {timeline.subtitle}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{timeline.description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center space-x-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
          {icon}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 h-full w-0.5 -translate-x-1/2 transform rounded-full bg-green-700" />
        <div className="relative space-y-12 pt-12">
          {data.map((timeline, index) => (
            <SingleTimeline key={index} {...timeline} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Timeline }
