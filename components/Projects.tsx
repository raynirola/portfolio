import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import { FC, ReactElement } from 'react'

const Projects: FC = (): ReactElement => {
  const renderImage = (path: string): ReactElement => {
    return <Image alt="Logo of Sikkim Store" objectFit="contain" layout="fill" src={path} />
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-3">
      <ProjectCard
        title="Memeberg Terminal"
        url="https://memebergterminal.com"
        image={renderImage('/images/projects/memebergterminal.png')}
        description="Stocks and Crypto mentions & sentiment analytics."
        tags={['NextJS', 'WEb3', 'MongoDB', 'Stripe']}
      />
      <ProjectCard
        title="Eagle Aid"
        image={renderImage('/images/projects/eagle-aid.png')}
        description="Putt like a pro with Eagle Aid. Easy to use, fast and fun."
        status="abandoned"
        url="https://eagle-aid.com"
        tags={['NextJS', 'TypeScript', 'Stripe']}
      />
      <ProjectCard
        title="Noti Finance"
        image={
          <svg className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24">
            <path
              fill="#d9004e"
              d="M19.7695 11.6453c-.7305-.853-1.0624-1.5922-1.0624-2.84814v-.42703c0-1.63659-.3767-2.69106-1.1956-3.74554C16.2493 2.98699 14.1244 2 12.0442 2h-.0884c-2.03645 0-4.09474.94167-5.3788 2.5128-.86367 1.07562-1.28407 2.17542-1.28407 3.85733v.42703c0 1.25594-.31009 1.99514-1.06244 2.84814-.55358.6285-.73049 1.4362-.73049 2.3104 0 .8752.28723 1.7041.86367 2.3779.75235.8077 1.81479 1.3233 2.90008 1.413 1.5713.1792 3.14255.2467 4.73675.2467 1.5932 0 3.1645-.1128 4.7367-.2467 1.0843-.0897 2.1468-.6053 2.8991-1.413.5755-.6738.8637-1.5027.8637-2.3779 0-.8742-.1769-1.6819-.7305-2.3104Z"></path>
            <path
              fill={'#000'}
              d="M14.0087 19.2284c-.4999-.1068-3.5461-.1068-4.04601 0-.42736.0987-.88951.3283-.88951.8319.02485.4804.30611.9044.6957 1.1733l-.00099.001c.50391.3928 1.09521.6425 1.71441.7322.33.0453.6659.0433 1.0078 0 .6182-.0897 1.2095-.3394 1.7134-.7322l-.001-.001c.3896-.2689.6709-.6929.6957-1.1733 0-.5036-.4621-.7332-.8895-.8319Z"
              opacity="0.9"></path>
          </svg>
        }
        url="https://app.noti.finance"
        description="Track NFTs, Alphas, Whales. Get realtime updates."
        tags={['NextJS', 'TypeScript', 'Express', 'MongoDB']}
      />
      <ProjectCard
        title="DIGIT MINE"
        image={renderImage('/images/projects/digitmine.png')}
        url="https://digit-mine.com"
        description="Artificial intelligence-driven crypto miner that generates passive income."
        tags={['NextJS', 'TypeScript', 'Web3', 'MongoDB']}
      />
      <ProjectCard
        title="Sikkim Store"
        url="https://sikkim.store"
        image={renderImage('/images/projects/sikkimstore.png')}
        status="wip"
        description="Sustainable, eco-friendly, and affordable products from Sikkim"
        tags={['Prisma', 'NextJS', 'Tailwind', 'Redux']}
      />
      <ProjectCard
        title="Goldilock"
        url="https://goldilockapp.com"
        image={renderImage('/images/projects/goldilock.png')}
        description="Get paid for your attention, earn points and exchange gift cards."
        tags={['React Native', 'NodeJS', 'Android']}
      />
      <ProjectCard
        title="Concert Cal"
        url="https://concertcal.com"
        image={renderImage('/images/projects/concertcal.png')}
        status="wip"
        description="Connect your Spotify and Google Calendar and never miss a concert!"
        tags={['NextJS', 'Prisma', 'Express', 'TypeScript']}
      />
    </div>
  )
}

export default Projects
