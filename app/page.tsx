'use client'

import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/Hero/HeroSection/HeroSection'
import RecomendedSection from '@/components/RecomendedSection/RecomendedSection'
import HeroSectionB from '@/components/Hero/HeroSectionB/HeroSectionB'
import StaticCarousel from '@/components/Carousel/StaticCarousel/StaticCarousel'
import { medusaClient } from '@/lib/utils/medusaUtils'
import { PricedProduct, PricedVariant } from "@medusajs/medusa/dist/types/pricing"
import { useState, useEffect } from 'react'
import { useProducts } from 'medusa-react'


type PricedProductProps = {
    title? : string | null | undefined,
    thumbnail? : string | null | undefined,
    variants? : PricedVariant []
}

function Home () {

  const {products, isLoading} = useProducts()

  return (
    <div className={styles.main}>
      <HeroSection/>
      <RecomendedSection 
        isLoading={isLoading} 
        products={products} />
      <HeroSectionB/>
      {/* <StaticCarousel products={carouselProducts}/>  */}
    </div>
  )
}

export default Home;