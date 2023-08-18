import styles from './RecomendedSection.module.scss'
import { useState, useEffect, useMemo } from "react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { fetchRandomProducts } from "@/RequestMock/dataMock"
import ProductViewTemplateA from '@/components/ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA'
import ProductViewTemplateASkeleton from "@/components/ProductViewComponents/ProductViewTemplateA/ProductViewTemplateASkeleton/ProductViewTemplateASkeleton"

const RecomendedSection = () => {

    const [products, setProducts] = useState<PricedProduct[]>()
    // czemu nie wrzucic zawartosci tych funkcji do srodka useMemo?
    // tu wlasciwie moglobybyc jedno useMemo ktore sprawdza czy sa produkty, a jesli nie to mapuje i generuje ProductViewTemplateASkeleton
    const mappedSkeletons = useMemo(() => mapSkeletons(), [])
    const mappedProducts = useMemo(() => mapRecomendedSection(), [products])

    useEffect(() => {
      fetchRandomProducts(3)
      .then((products) => {
        setProducts(products)
        // do usuniecia
        console.log(products)
      })
    },[])

    function mapRecomendedSection () {
        return products?.map((product) => (
            <ProductViewTemplateA
                key = {product.id}
                product={product} /> 
        )) 
    }
    
    function mapSkeletons () {
        return Array.from({ length: 3 }).map((_, index) => (
            <ProductViewTemplateASkeleton 
                key={index} />
        ))
    }

    return (
        <div className={styles.recomendedContainer}>
          <div className={styles.sectionTitle}>Polecamy</div>
          <div className={styles.productList}>
            {!!products ? mappedProducts : mappedSkeletons}
          </div>
        </div>
      );
}

export default RecomendedSection