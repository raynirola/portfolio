import Image from 'next/image'
import { FC } from 'react'

const Logo: FC = () => {
  return (
    <div className="relative -ml-3 block h-12 w-12 transform transition duration-200 ease-in-out hover:scale-110">
      <Image
        src={require('public/images/logo-dark.png')}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        alt="Me"
      />
    </div>
  )
}

export default Logo
