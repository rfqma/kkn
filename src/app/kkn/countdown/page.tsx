'use client'

import { useEffect, useState } from 'react'
import { TimeUnit } from '@/components/KKN/Countdown/TimeUnit'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoTiktok, BiLogoInstagramAlt } from 'react-icons/bi'
import { FaArrowRightLong } from 'react-icons/fa6'
import UPNVYKLogo from 'public/images/logos/upnvyk.png'
import KKNAB80113GKLogo from 'public/images/logos/kkn.ab.80.113.gk.png'

const getDate = () => {
  const startDate = new Date('2024-01-03')
  const endDate = new Date('2024-02-01')

  const startDateGMTPlus7 = new Date(startDate.getTime() - 7 * 60 * 60 * 1000)
  const endDateGMTPlus7 = new Date(endDate.getTime() - 7 * 60 * 60 * 1000)

  return {
    startDate: startDateGMTPlus7,
    endDate: endDateGMTPlus7
  }
}

interface DateProperty {
  startDate: Date
  endDate: Date
}

const dates: DateProperty = {
  startDate: getDate().startDate,
  endDate: getDate().endDate
}

export default function KKNCountdownPage() {
  const startDate = dates.startDate
  const endDate = dates.endDate
  const todayDate = new Date()
  const kknDuration = endDate.getTime() - startDate.getTime()
  const kknTimeRemaining = todayDate.getTime() - startDate.getTime()

  const [timeRemaining, setTimeRemaining] = useState<ReturnType<typeof calculateTimeRemaining>>()
  const [progressPercentage, setProgressPercentage] = useState<number>()

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearTimeout(timer)
  })

  useEffect(() => {
    setProgressPercentage((kknTimeRemaining / kknDuration) * 100)
  }, [])

  const calculateTimeRemaining = () => {
    let timeDifference = 0

    const twoDigit = (num: number) => {
      return String(num).padStart(2, '0')
    }

    const parseDays = (num: number) => {
      return Math.floor(num / (1000 * 60 * 60 * 24))
    }

    const parseHours = (num: number) => {
      return Math.floor((num / (1000 * 60 * 60)) % 24)
    }

    const parseMinutes = (num: number) => {
      return Math.floor((num / 1000 / 60) % 60)
    }

    const parseSeconds = (num: number) => {
      return Math.floor((num / 1000) % 60)
    }

    if (todayDate < startDate) {
      timeDifference = +startDate - +todayDate

      return {
        days: twoDigit(parseDays(timeDifference)),
        hours: twoDigit(parseHours(timeDifference)),
        minutes: twoDigit(parseMinutes(timeDifference)),
        seconds: twoDigit(parseSeconds(timeDifference)),
        kknCondition: 'notStarted'
      }
    }

    if (todayDate >= startDate && todayDate <= endDate) {
      timeDifference = +endDate - +todayDate

      return {
        days: twoDigit(parseDays(timeDifference)),
        hours: twoDigit(parseHours(timeDifference)),
        minutes: twoDigit(parseMinutes(timeDifference)),
        seconds: twoDigit(parseSeconds(timeDifference)),
        kknCondition: 'inProgress'
      }
    }

    if (todayDate > endDate) {
      return {
        kknCondition: 'end'
      }
    }
  }

  return (
    <div className='mx-auto'>
      <div className='relative flex justify-center min-h-screen py-24 overflow-hidden text-center bg-darkGreen isolate md:items-center'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-center gap-2'>
              <Image
                src={UPNVYKLogo}
                alt={'UPNVYK Logo'}
                className='w-5 h-5'
              />

              <Image
                src={KKNAB80113GKLogo}
                alt={'KKN.AB.80.113.GK Logo'}
                className='w-5 h-5'
              />
            </div>
            <h2 className='max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-whiteGreen sm:text-4xl'>
              KKN.AB.80.113.GK
            </h2>
            <h3 className='max-w-2xl mx-auto text-sm font-medium text-whiteGreen sm:text-lg'>
              UPN &ldquo;Veteran&rdquo; Yogyakarta
            </h3>
          </div>
          {
            timeRemaining?.kknCondition === 'notStarted' ?
              <>
                <div className='flex flex-col gap-7'>
                  <div className='grid grid-flow-col grid-rows-2 md:flex md:gap-x-10 md:justify-between mt-14 gap-y-8 md:gap-0'>
                    <TimeUnit timeUnit={'Hari'} value={timeRemaining?.days!} />
                    <TimeUnit timeUnit={'Jam'} value={timeRemaining?.hours!} />
                    <TimeUnit timeUnit={'Menit'} value={timeRemaining?.minutes!} />
                    <TimeUnit timeUnit={'Detik'} value={timeRemaining?.seconds!} className='text-shamrockGreen' />
                  </div>
                  <h3 className='max-w-2xl mx-auto text-sm font-medium text-whiteGreen sm:text-base'>
                    Waktu tersisa sampai KKN dimulai
                  </h3>
                </div>
              </>
              :
              timeRemaining?.kknCondition === 'inProgress' ?
                <>
                  <div className='flex flex-col gap-7'>
                    <div className='grid grid-flow-col grid-rows-2 md:flex md:gap-x-10 md:justify-between mt-14 gap-y-8 md:gap-0'>
                      <TimeUnit timeUnit={'Hari'} value={timeRemaining?.days!} />
                      <TimeUnit timeUnit={'Jam'} value={timeRemaining?.hours!} />
                      <TimeUnit timeUnit={'Menit'} value={timeRemaining?.minutes!} />
                      <TimeUnit timeUnit={'Detik'} value={timeRemaining?.seconds!} className='text-darkGreen' />
                    </div>
                    <h3 className='max-w-2xl mx-auto text-sm font-medium text-whiteGreen sm:text-base'>
                      Waktu tersisa sampai KKN berakhir
                    </h3>
                  </div>
                  <div className='max-w-xs mx-auto mt-10 overflow-hidden rounded-full bg-grey'>
                    <div
                      className='h-2 bg-gradient-to-r from-shamrockGreen to-whiteGreen'
                      style={{
                        width: `${progressPercentage}%`
                      }}
                    />
                  </div>
                  <p className='mt-2 text-whiteGreen'>
                    {progressPercentage?.toFixed(2)}% Completed
                  </p>
                </>
                :
                timeRemaining?.kknCondition === 'end' ?
                  <>
                    <div className='mt-14 opacity-80'>
                      <p className='text-white'>
                        <Balancer>
                          KKN telah usai, terima kasih untuk kebersamaan selama KKN!
                        </Balancer>
                      </p>
                    </div>
                  </>
                  :
                  <div />
          }
          <Link
            href={'/ngunut-kidul'}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 px-4 py-2 mt-16 text-sm rounded bg-whiteGreen hover:opacity-80 text-darkGreen'
          >
            Selengkapnya
            <FaArrowRightLong className='w-3 h-3' />
          </Link>
          <div className='flex flex-col gap-4 mt-16'>
            <h4 className='max-w-2xl mx-auto text-sm font-medium text-whiteGreen sm:text-base'>
              Media Sosial Kami
            </h4>
            <div className='flex justify-center gap-5'>
              <Link href={'https://instagram.com/kkn.80.ngunutkidul'}>
                <BiLogoInstagramAlt
                  size={25}
                  color={'white'}
                  className='transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                />
              </Link>
              <Link href={'https://tiktok.com/@kkn.80.ngunutkidul'}>
                <BiLogoTiktok
                  size={25}
                  color={'white'}
                  className='transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                />
              </Link>
            </div>
          </div>


          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#0FA068" />
                <stop offset={1} stopColor="#DEE8D2" />{" "}
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}