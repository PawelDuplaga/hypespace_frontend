import Image from 'next/image'
import styles from './page.module.css'
import TopBar from '../components/TopBar/TopBar'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/Hero/HeroSection/HeroSection'
import RecomendedSection from '@/components/RecomendedSection/RecomendedSection'
import HeroSectionB from '@/components/Hero/HeroSectionB/HeroSectionB'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar/>
      <HeroSection/>
      <RecomendedSection/>
      <HeroSectionB/>
    </div>
  )
}
