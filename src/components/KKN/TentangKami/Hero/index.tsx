import Image from "next/image"
import Balancer from "react-wrap-balancer";
import cx from 'clsx'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

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
        <div className="items-center gap-6 pt-16 sm:flex">
          <MdKeyboardDoubleArrowDown className={'h-10 w-10 text-whiteGreen'} />
        </div>
      </div>
    </>
  )
}