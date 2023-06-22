import Image from 'next/image'
import styles from './page.module.css'
import TopBar from '../components/TopBar/TopBar'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}
