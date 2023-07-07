import './globals.css'
import { Inter, Lato } from 'next/font/google'
import TopBar from '@/components/TopBar/TopBar'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import storeInfo from '@/lib/const/storeInfo'


const lato = Lato({
  weight : ['100','300','400','700','900'],
  subsets : ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={lato.className}>
        <TopBar/>
        <Navbar/>
        {children}
        <Footer
          storeInfo={storeInfo}
        />
        </body>
      </html>
  )
}
