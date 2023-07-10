'use client'

import { useMemo } from "react"
import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import styles from './RecomendedSection.module.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductProps = {
    isLoading: boolean
    products: PricedProduct [] | undefined;
}

const RecomendedSection = ({isLoading, products} : ProductProps) => {

    const mappedRecommended = useMemo(() => mapRecomendedSection() , [products])

    function mapRecomendedSection () {
            products = products?.slice(0,3)
            return products?.map((product) => (
                <ProductViewTemplateA
                    key = {product.id}
                    product={product}
                /> 
            )); 
        }
    
    function mapSkeletons () {
        
    }

    return (
        <div className={styles.recomendedContainer}>
            <div className={styles.sectionTitle}>Polecamy</div>
            <div></div>
            <div className={styles.productList}>{products?.map((product) => (
                <ProductViewTemplateA
                    key = {product.id}
                    product={product}
                /> 
            ))}</div>
        </div>
    )
}

export default RecomendedSection