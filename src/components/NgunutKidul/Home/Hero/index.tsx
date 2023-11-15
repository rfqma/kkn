import { FaArrowRightLong, FaMapLocationDot } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer";
import cx from 'clsx'

interface HeroProps {
  title: string
  subtitle: string
  image: string
}

export const Hero = ({ title, subtitle, image }: HeroProps) => {
  return (
    <>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div
        style={{
          background:
            `${`linear-gradient(180deg, rgba(32, 17, 0, 0.34) 0%, rgba(32, 17, 0, 0.88) 100%)`}`
        }}
        className="absolute z-10 w-full h-full"
      />

      <div className="absolute z-10 flex flex-col items-center justify-center w-full h-screen">
        <h1
          className={cx(
            "w-full text-4xl font-bold text-center text-whiteGreen",
            'sm:text-5xl md:text-6xl lg:text-7xl'
          )}
        >
          {title}
        </h1>
        <p className="pt-3 text-sm text-center text-grey sm:text-base lg:text-lg">
          <Balancer>{subtitle}</Balancer>
        </p>
        <div className="flex items-center gap-6 pt-16">
          <Link
            href={'https://maps.app.goo.gl/xhJ2MGsfXYoUmW6t7'}
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              "flex items-center gap-2 px-4 py-2 rounded-md shadow-sm",
              'bg-whiteGreen hover:opacity-90 text-darkGreen text-sm font-semibold'
            )}
          >
            <FaMapLocationDot className={'h-4 w-4'} />
            Lokasi
          </Link>
          <Link
            href={'/ngunut-kidul/profil'}
            className={cx(
              "flex items-center gap-2 text-sm font-semibold",
              'hover:underline hover:decoration-white text-whiteGreen'
            )}
          >
            Baca Profil Dusun
            <FaArrowRightLong className={'h-2.5 w-2.5'} />
          </Link>
        </div>
      </div>
    </>
  )
}