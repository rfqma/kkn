'use client'

import { usePathname } from "next/navigation"
import { createContext } from "react"
import { Header } from "@/components/UI/Header"
import { Footer } from "@/components/UI/Footer"

export const GlobalContext = createContext(null)

export default function GlobalState({
  children
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()

  return (
    <>
      <GlobalContext.Provider value={null}>
        {
          pathName !== '/kkn/countdown' ?
            <Header />
            :
            null
        }
        {children}
        {
          pathName !== '/kkn/countdown' ?
            <Footer />
            :
            null
        }
      </GlobalContext.Provider>
    </>
  )
}