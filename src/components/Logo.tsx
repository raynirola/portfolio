import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

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
    <Link href="/" scroll>
      <a className="relative block w-12 h-12 -ml-3 transition duration-200 ease-in-out transform hover:scale-110">
        {resolvedTheme === "dark" ? <DarkLogo /> : <LightLogo />}
      </a>
    </Link>
  )
}

export { Logo }
