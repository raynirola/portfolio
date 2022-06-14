import { FC, HTMLAttributes, ReactElement, ReactNode } from 'react'

interface SectionProps {
  title: string
  titleClasses?: string
  descriptionClasses?: string
  description?: ReactElement | string
  children?: ReactNode
}

const Section: FC<SectionProps & HTMLAttributes<HTMLDivElement>> = ({
  title,
  description,
  children,
  descriptionClasses,
  titleClasses,
  ...rest
}) => {
  return (
    <div {...rest}>
      <h2 className={`mb-4 text-2xl font-bold text-slate-800 dark:text-slate-300 ${titleClasses}`}>{title}</h2>
      {description && (
        <p className={`text-base text-slate-600 dark:text-slate-400 ${descriptionClasses}`}>{description}</p>
      )}
      {children && children}
    </div>
  )
}

export default Section
