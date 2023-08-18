'use client'

import { useProducts } from 'medusa-react'
// raz css raz sass
import styles from './page.module.css'
import RecomendedSection from '@/components/Page_Main/RecommendedSection/RecomendedSection'
import HeroSection from '@/components/Page_Main/HeroTop/HeroSection'
import HeroSectionB from '@/components/Page_Main/HeroBottom/HeroSectionB'
import StaticCarousel from '@/components/Page_Main/ProductCarousel/StaticCarousel'

function Home () {
  // nieuzywana zmienna
  const {products, isLoading} = useProducts()



  return (
    <div className={styles.main}>
      <HeroSection/>
      <RecomendedSection />
      <HeroSectionB/>
      {products &&
      <StaticCarousel products={products}/>}
    </div>
  )
}

export default Home;