'use client'

import { useProduct } from "medusa-react"
import { useMemo, useRef, useState } from "react"
import { getDefaultVariantPrice } from "@/lib/helpers/getVariantPrice"
import { Select, SelectItem } from "@mantine/core"
import NCounter from "@/components/Reusable/NCounter/NCounter"
import styles from './page.module.scss'
import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import { PricedProduct, PricedVariant } from "@medusajs/medusa/dist/types/pricing"
//import ImageGallery from "react-image-gallery"



const ProductPage = ({params} : {params: {id : string}})  => {

    const [productCount, setProductCount] = useState(1)
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
    const {product, isLoading} = useProduct(params.id)
    const mockedSelectOptions = useMemo(() => {
        if (!product || !product.variants) {return []}

        return product.variants?.map((variant: PricedVariant): SelectItem => ({
          value: variant.id || "",
          label: variant.title || ""
        }));
      }, [product]);

    //czy da sie to jakos lepiej rozwiazac, ladniej w sensie

    const AddToBasketBtn = () => {
        return (
            <button>
                
            </button>
        )
    }


    return (
        <div className={styles.pageContainer}>
            <div className={styles.productViewFlexContainer}>
                <div className={styles.productPhotosMainFlex}>
                    <div className={styles.verticalCarousel}>
                        <div className={styles.arrowUpIcon}>
                            <Image 
                                src="/icons/maki_arrow.svg"
                                alt="arrow-up-icon"
                                height={32}
                                width={32}
                            />
                        </div>
                        {/* prowizorka */}
                        <div className={styles.verticalPhotosCarouselBox}>
                            <div className={styles.carouselPhoto}></div>
                            <div className={styles.carouselPhoto}></div>
                            <div className={styles.carouselPhoto}></div>
                            <div className={styles.carouselPhoto}></div>
                        </div>
                        <div className={styles.arrowDownIcon}>
                            <Image 
                                src="/icons/maki_arrow.svg"
                                alt="arrow-up-icon"
                                height={32}
                                width={32}
                            />
                        </div>
                    </div>
                    <div className={styles.currentImage}>
                        {product?.images && product?.title &&
                        <Image  
                            src={product.images[0].url}
                            alt={product.title}
                            width={1000}
                            height={1000}
                            style={{
                                position: 'relative', 
                                width:'100%', 
                                height:'100%',
                                minHeight :'520px', 
                                minWidth: '520px',
                                objectFit:'cover'}} 
                        />}            
                    </div>         
                </div>
                <div className={styles.productContentFlex}>
                     <div className={styles.nameAndPriceBox}>
                        <h2>{product?.title}</h2>
                        {product?.variants &&
                        <p>{getDefaultVariantPrice(product.variants[0])}</p>}
                     </div>
                     <div className={styles.dropdownBox}>
                        <Select
                            label="Rozmiar"
                            placeholder="Wybierz rozmiar"
                            value={selectedVariant}
                            onChange={(variant) => setSelectedVariant(variant)}
                            data={mockedSelectOptions}
                            styles={(theme) => ({
                                dropdown : {
                                    border : "1px solid #7A7A7A",
                                    borderRadius: "0px",
                                    
                                },
                                input : {
                                    border: "1px solid #2B2A2B",
                                    borderRadius: "0px",
                                    paddingBottom: "2px",
                                    paddingLeft: "18px",
                                    '&:focus': {
                                        border: "1px solid #2B2A2B",
                                    }                                  
                                }
                            })}
                        />
                        {selectedVariant}
                        <NCounter 
                            fontSize="12px"
                            widthSpan="114px"
                            iconSize =  "36"
                            value={productCount}
                            callbackFunction={setProductCount}

                        />
                        <AddToBasketBtn />
                     </div>
                </div>
            </div>
        </div>
       

    )
}

export default ProductPage