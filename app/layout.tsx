'use client'

import './globals.css'
import { Inter, Lato } from 'next/font/google'
import { MedusaProvider } from 'medusa-react'
import { QueryClient } from '@tanstack/react-query'
import TopBar from '@/components/TopBar/TopBar'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import storeInfo from '@/lib/const/storeInfo'


const lato = Lato({
  weight : ['100','300','400','700','900'],
  subsets : ['latin']
})

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={lato.className}>
          <MedusaProvider 
            queryClientProviderProps={{client: queryClient}}
            baseUrl='http://localhost:9000'
          >
              <TopBar/>
              <Navbar/>
              {children}
              <Footer
                storeInfo={storeInfo}
              />
          </MedusaProvider>
          </body>
      </html>
  )
}
