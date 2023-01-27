import { Navigation } from '@/components'
import { routes } from '../models'
import { poppins, raleway } from '../public/assets/fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation routes={routes} />
        {children}
      </body>
    </html>
  )
}
