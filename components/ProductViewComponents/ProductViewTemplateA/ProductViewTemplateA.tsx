import styles from './ProductViewTemplateA.module.scss'
import Image from 'next/image'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { getDefaultVariantPrice } from '@/lib/helpers/getVariantPrice'

type ProductProps = {
    product : PricedProduct
}

const ProductViewTemplateA = ({product : {title, thumbnail, variants}} : ProductProps) => {


    return(
        <div className={styles.mainContainer}>
            <div className={styles.producImgContainer}>
            { thumbnail && 
                <Image 
                    src={thumbnail as string} 
                    // alt powinien byc zrozumiala nazwa
                    alt={thumbnail}
                    width={1000}
                    height={1000}
                    // do styli
                    style={{width: '100%', height:'100%', objectFit: 'cover'}}
                /> }
            </div>
            { variants &&
            <div className={styles.productInfo}>
                <p>{title} {getDefaultVariantPrice(variants?.[0])}</p> 
                <Image 
                    className={styles.arrow} 
                    src="/icons/maki_arrow.svg"
                    alt='maki-arrow-icon'
                    width={18}
                    height={18}       
                /> 
            </div> }
        </div>
    )

}

export default ProductViewTemplateA