'use client'

import Link from "next/link"
import { useState } from "react"
import { Bars4Icon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/20/solid"
import cx from "clsx"

interface NavigationMenuLink {
  label: string
  path: string
}

const navigationMenuLinks: NavigationMenuLink[] = [
  {
    label: "Beranda",
    path: "/ngunut-kidul"
  },
  {
    label: 'Berita',
    path: '/ngunut-kidul/berita/halaman/1'
  },
  {
    label: "Profil Dusun",
    path: "/ngunut-kidul/profil"
  },
  {
    label: "Tentang Kami",
    path: "/kkn/tentang-kami"
  },
  {
    label: 'Countdown',
    path: '/kkn/countdown'
  },
]

export const Header = () => {
  const [headerOpen, setHeaderOpen] = useState<boolean>(false)

  const handleHeaderToggler = () => {
    setHeaderOpen(!headerOpen)
  }

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-20 bg-darkGreen">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/ngunut-kidul">
              <h1 className="font-bold text-whiteGreen -m-1.5 p-1.5">
                Dusun Ngunut Kidul
              </h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-whiteGreen hover:bg-whiteGreen hover:text-darkGreen"
              onClick={handleHeaderToggler}
            >
              <Bars4Icon className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {
              navigationMenuLinks.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {item.label}
                  </Link>
                )
              })
            }
          </div>
        </nav>
        {
          headerOpen ?
            <div className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <div className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-darkGreen sm:max-w-sm sm:ring-1 sm:ring-white/10">
                <div className="flex items-center justify-between">
                  <Link href="/ngunut-kidul">
                    <h1 className="font-bold text-whiteGreen">Dusun Ngunut Kidul</h1>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-whiteGreen hover:bg-whiteGreen hover:text-darkGreen"
                    onClick={handleHeaderToggler}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="flow-root mt-6">
                  <div className="-my-6">
                    <div className="py-6 space-y-2">
                      {
                        navigationMenuLinks.map((item, index) => {
                          return (
                            <a
                              key={index}
                              href={item.path}
                              className={cx(
                                'block px-3 py-2 -mx-3 text-base font-semibold leading-7',
                                'text-white rounded-lg hover:bg-whiteGreen hover:text-darkGreen'
                              )}
                            >
                              {item.label}
                            </a>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            null
        }
      </header>
    </>
  )
}