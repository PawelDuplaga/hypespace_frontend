'use client'

import Image from 'next/image'
import styles from './page.module.css'
import TopBar from '../components/TopBar/TopBar'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/Hero/HeroSection/HeroSection'
import RecomendedSection from '@/components/RecomendedSection/RecomendedSection'
import HeroSectionB from '@/components/Hero/HeroSectionB/HeroSectionB'
import StaticCarousel from '@/components/Carousel/StaticCarousel/StaticCarousel'
import ProductViewTemplateB from '@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB'
import { medusaClient } from '@/lib/utils/medusaUtils'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useState, useEffect } from 'react'


function Home () {

  const [recommendedProducts, setRecommendedProducts] = useState<PricedProduct[]>()
  const [carouselProducts, setCarouselProducts] = useState<PricedProduct[]>()

  useEffect( () => {
    medusaClient.products.list({limit : 3})
    .then(({ products }) => {
        setRecommendedProducts(products)  
        setCarouselProducts(products)
    });
    
  }, []);

  return (
    <div className={styles.main}>
      <Navbar/>
      <HeroSection/>
      { recommendedProducts != undefined && 
      <RecomendedSection products={recommendedProducts} />}
      <HeroSectionB/>
      { carouselProducts != undefined && 
      <StaticCarousel products={carouselProducts}/> }
    </div>
  )
}

export default Home;