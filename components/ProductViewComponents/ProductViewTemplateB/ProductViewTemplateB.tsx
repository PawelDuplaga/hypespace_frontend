'use client'

import styles from './ProductViewTemplateB.module.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Image, { ImageLoader, ImageLoaderProps } from 'next/image'
import { formatVariantPrice } from "medusa-react"
import getRegion from '@/lib/const/regionInfo'
import { useItemBucketStore } from '@/lib/state/ItemBucketStore';

type ProductProps = {
    product : PricedProduct
}

const ProductViewTemplateB = ({product : {title, thumbnail, variants}} : ProductProps) =>{

    const ImageLoader = () => {
        return thumbnail || `/loaders/spinnerImg.svg`
    }

    return (
        <div className={styles.productViewMainContainer}>
            <div className={styles.productImageContainer}>
                <Image 
                    loader = {ImageLoader}
                    src={thumbnail as string} 
                    alt={title as string}
                    width={1000}
                    height={1000}
                    style={{width:'100%', height:'248px', objectFit:'cover'}} 
                />
            </div>
            <div className={styles.productInfoContainer}>
                <div className={styles.productInfo}>
                    <div className={styles.productNameFlexbox}>
                        <p className={styles.productName}>{title}</p>
                    </div>
                    <div className={styles.productPriceFlexbox}>
                        { variants &&
                        <p className={styles.productPrice}>{formatVariantPrice({variant: variants[0], region : getRegion()})}</p> }
                        <div className={styles.basketCircleIcon}>
                            <div className={styles.circle}>
                                <Image 
                                    className='basketIcon'
                                    src="/icons/cart.svg"
                                    alt='basket-icon'
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ProductViewTemplateB