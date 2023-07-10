import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import styles from './RecomendedSection.module.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductViewTemplateASkeleton from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateASkeleton/ProductViewTemplateASkeleton"

type ProductProps = {
    isLoading: boolean
    products: PricedProduct [] | undefined;
}

const RecomendedSection = ({isLoading, products} : ProductProps) => {

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
            {isLoading ? (
              mapSkeletons()
            ) : (
              mapRecomendedSection()
            )}
          </div>
        </div>
      );
}

export default RecomendedSection