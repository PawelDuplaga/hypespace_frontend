'use client'

import styles from './page.module.css'
import HeroSection from '@/components/Hero/HeroSection/HeroSection'
import RecomendedSection from '@/components/RecomendedSection/RecomendedSection'
import HeroSectionB from '@/components/Hero/HeroSectionB/HeroSectionB'
import { useProducts } from 'medusa-react'
import StaticCarousel from '@/components/Carousel/StaticCarousel/StaticCarousel'

function Home () {

  //Maybe its better to use this logic in children since will use different queries for different components
  const {products, isLoading} = useProducts({limit: 3})

  return (
    <div className={styles.main}>
      <HeroSection/>
      <RecomendedSection 
        isLoading={isLoading} 
        products={products} />
      <HeroSectionB/>
      {products &&
      <StaticCarousel products={products}/>}
    </div>
  )
}

export default Home;