import { useMemo } from "react"
import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import styles from './RecomendedSection.module.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductProps = {
    products: PricedProduct [];
}

const RecomendedSection = ({products} : ProductProps) => {

    const mappedRecommended = useMemo(() => mapRecomendedSection() , [products])

    function mapRecomendedSection () {
        if ( products != undefined && products.length > 3)
        products = products.slice(0,3)

        return products.map((product) => (
            <ProductViewTemplateA
               key = {product.id}
               product={product}
            />
        ));
    }

    return (
        <div className={styles.recomendedContainer}>
            <div className={styles.sectionTitle}>Polecamy</div>
            <div className={styles.productList}>{mappedRecommended}</div>
        </div>
    )
}

export default RecomendedSection