import type { Metadata } from 'next'
import './globals.css'
import GlobalState from '@/lib/context'

export const metadata: Metadata = {
  title: 'KKN.AB.80.113.GK',
  description: 'KKN.AB.80.113.GK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalState>
          {children}
        </GlobalState>
      </body>
    </html>
  )
}
