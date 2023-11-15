import Link from "next/link"
import { MapIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import { NAMA_DUSUN, LOKASI_DUSUN } from "@/lib/utilities/const"
import cx from 'clsx'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <>
      <footer className="bg-darkGreen">
        <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl lg:px-8">
          <div className="space-y-8">
            <span className="text-3xl font-semibold text-whiteGreen">
              {NAMA_DUSUN}
            </span>
            <p className="text-sm leading-6 text-whiteGreen/50">
              <Balancer>{LOKASI_DUSUN}</Balancer>
            </p>
            <div className="w-fit">
              <Link
                href={'https://maps.app.goo.gl/xhJ2MGsfXYoUmW6t7'}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  "flex items-center gap-2 px-4 py-2 rounded-md shadow-sm",
                  'sm:px-4 sm:py-2',
                  'bg-whiteGreen hover:opacity-90 text-darkGreen',
                  'text-sm font-semibold'
                )}
              >
                <MapIcon className={'h-4 w-4'} />
                Lokasi
              </Link>
            </div>
          </div>
          <p
            className={cx(
              "pt-8 mt-16 text-sm leading-5 border-t sm:mt-20 lg:mt-24",
              'text-grey border-white/10'
            )}
          >
            &copy; {currentYear} Copyright by Rifqi Maulana
          </p>
        </div>
      </footer>
    </>
  )
}