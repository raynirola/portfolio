import { useTheme } from 'next-themes'
import Image from 'next/image'

interface ILogo {
  (props: { default?: boolean }): JSX.Element
}

const Logo: ILogo = props => {
  const { resolvedTheme } = useTheme()

  const DarkLogo = () => {
    return (
      <Image
        src={require('public/images/logo-light.png')}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        alt="Me"
      />
    )
  }

  const LightLogo = () => {
    return (
      <Image
        src={require('public/images/logo-dark.png')}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        alt="Me"
      />
    )
  }

  const DefaultLogo = () => {
    return (
      <Image
        src={require('public/images/logo.jpg')}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        alt="Me"
      />
    )
  }

  if (props.default) {
    return (
      <div className="relative block h-12 w-12 transform overflow-hidden rounded-full transition duration-200 ease-in-out hover:scale-110">
        <DefaultLogo />
      </div>
    )
  }

  return (
    <div className="relative -ml-3 block h-12 w-12 transform transition duration-200 ease-in-out hover:scale-110">
      {resolvedTheme === 'dark' ? <DarkLogo /> : <LightLogo />}
    </div>
  )
}

export { Logo }
