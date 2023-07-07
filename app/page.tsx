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


type PricedProductProps = {
    title? : string | null | undefined,
    thumbnail? : string | null | undefined,
    variants? : PricedVariant []
}

function Home () {

  function getMockProducts (numberOfProducts : number) {
    const defaultProducts: PricedProductProps[] = [];
    for (let i = 0; i < numberOfProducts; i++) {
      const defaultProduct: PricedProductProps = {
        title: "",
        thumbnail: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",  
      };
      defaultProducts.push(defaultProduct);
    }
    return defaultProducts;
  }

  const [recommendedProducts, setRecommendedProducts] = useState<PricedProductProps[]>(getMockProducts(3))
  const [carouselProducts, setCarouselProducts] = useState<PricedProductProps[]>(getMockProducts(12))

  useEffect( () => {
    medusaClient.products.list({limit : 3})
    .then(({ products }) => {
        setRecommendedProducts(products.map((prod) => ({
          title: prod.title,
          thumbnail: prod.thumbnail,
          variants: prod.variants || [] 
        })));
        setCarouselProducts(products)
    });
    
  }, []);

  return (
    <div className={styles.main}>
      <HeroSection/>
      <RecomendedSection products={recommendedProducts} />
      <HeroSectionB/>
      <StaticCarousel products={carouselProducts}/> 
    </div>
  )
}

export default Home;