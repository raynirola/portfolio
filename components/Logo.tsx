import { useTheme } from 'next-themes'
import Image from 'next/image'

const Logo = () => {
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

  return (
    <div className="relative -ml-3 block h-12 w-12 transform transition duration-200 ease-in-out hover:scale-110">
      {resolvedTheme === 'dark' ? <DarkLogo /> : <LightLogo />}
    </div>
  )
}

export { Logo }
