import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import styles from './RecomendedSection.module.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductViewTemplateASkeleton from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateASkeleton/ProductViewTemplateASkeleton"
import { getProdPremise } from "@/RequestMock/dataMock"
import { useState, useEffect, useMemo } from "react"

const RecomendedSection = () => {

    const [products, setProducts] = useState<PricedProduct[]>()
    const mappedSkeletons = useMemo(() => mapSkeletons(), [])
    const mappedProducts = useMemo(() => mapRecomendedSection(), [products])

    useEffect(() => {
      getProdPremise(3)
      .then((products) => {
        setProducts(products)
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