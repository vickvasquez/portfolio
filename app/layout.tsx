import NextScript from 'next/script'

import { Navigation, RenderCondition } from '@/components'
import { ANALYTICS, ID_ANALYTICIS, routes } from '../models'
import { poppins, raleway } from '../public/assets/fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <head />
      <body>
        <Navigation routes={routes} />
        {children}
        <RenderCondition condition={ANALYTICS !== ''}>
          <NextScript
            src={ANALYTICS}
            strategy='afterInteractive'
          />
          <NextScript
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){
                  dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', '${ID_ANALYTICIS}');
            `,
            }}
          />
        </RenderCondition>
      </body>
    </html>
  )
}