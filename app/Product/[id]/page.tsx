// czemu nie server side component?
'use client'

import Image from 'next/image';
import NCounter from '@/components/Reusable/NCounter/NCounter';
import styles from './page.module.scss';
import { getDefaultVariantPrice } from '@/lib/helpers/getVariantPrice';
import { PricedProduct, PricedVariant } from '@medusajs/medusa/dist/types/pricing';
import { Select, SelectItem, Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMemo, useState } from 'react';
import { useProduct, useProducts } from 'medusa-react';
import StaticCarousel from '@/components/Page_Main/ProductCarousel/StaticCarousel';

interface ShipTimeProps {
    when : string
}

const loremIpsum : string = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu"




const ProductPage = ({params} : {params: {id : string}})  => {

    const [opened, { toggle }] = useDisclosure(false);
    const [productCount, setProductCount] = useState(1)
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
    const {product} = useProduct(params.id)
    const {products} = useProducts()

    const mappedSelectOptions = useMemo(() => {
        if (!product || !product.variants) {return [
            {label: "undefined", value: "-"}
        ]}

        return product.variants?.map((variant: PricedVariant): SelectItem => ({
          value: variant.id || "",
          label: variant.title || ""
        }));
      }, [product]);

    const mappedProductAttributes = useMemo(()  =>  {
        if (!product || selectedVariant === null) {
            return [
                //simple mock
                {title: "Waga", value :24 },
                {title: "Długość", value :11 },
                {title: "Wysokość", value :22 },
                {title: "Szerokość", value :22 },
                {title: "Materiał", value :"DREWNO" }
            ]
            
        }
        
        // co jesli nie znajdzie takiego variantu? (czy to mozliwe?) wtedy zbudowalbym mocka tak jak wyzej
        const variantObject = product.variants.find((variant) => variant.id === selectedVariant);

        return [
            {title: "Waga", value : variantObject?.weight },
            {title: "Długość", value: variantObject?.length},
            {title: "Wysokość", value: variantObject?.height},
            {title: "Szerokość", value: variantObject?.width},
            {title: "Materiał", value: variantObject?.material}
        ]
      
    }, [selectedVariant])

    //czy da sie to jakos lepiej rozwiazac, ladniej w sensie

    const setCounterCallback = (value : number) => {
        // mozna setProductCount(value < 0 ? 0 : value)
        if (value < 0) {
            setProductCount(0)
        } else {
            setProductCount(value)
        }
    }

    // z tego zrobilbym osobny maly komponent i dodal onClick bo nie ma
    const AddToBasketBtn = () => {
        return (
            <button className={styles.basketBtn}>
                <div className={styles.basketBtnFlex}>
                    {/* text transform uppercase */}
                    <p>DODAJ DO KOSZYKA</p>
                    <div className={styles.basketIcon}>
                        <Image
                            src="/icons/cart.svg"
                            alt="cart-icon"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </button>
        )
    }

    const ShipTimeInfo = ({when} : ShipTimeProps) => {
        return (
            <div className={styles.shipTimeBox}>
                <div className={styles.shipTimeFlex}>
                    <Image className={styles.sendSvg}
                        src="/icons/send.svg"
                        alt="send-icon"
                        width={24}
                        height={24}
                    />
                    {/* do styli */}
                    <p>Wysyłka <span style={{color : "#42AA28", fontWeight: "500" }}>{when}</span></p>
                </div>

            </div>
        )
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.productViewFlexContainer}>
                <div className={styles.productPhotosMainFlex}>
                    <div className={styles.verticalCarousel}>
                        <div className={styles.arrowUpIcon}>
                            <Image 
                                src="/icons/arrow-up.svg"
                                alt="arrow-up-icon"
                                height={32}
                                width={32}
                            />
                        </div>
                        {/* prowizorka */}
                        <div className={styles.verticalPhotosCarouselBox}>
                        {[0, 1, 2, 3].map((index) => {
                            const item = product?.images?.[index];
                            return (
                                <div key={index} className={styles.carouselPhoto}>
                                {item ? (
                                    <Image
                                    src={item.url}
                                    alt={product.title || "product-photo"}
                                    width={100}
                                    height={100}
                                    style={{ objectFit: "cover" }}
                                    />
                                ) : (
                                    <div className={styles.carouselPhoto}></div>
                                )}
                                </div>
                            );
                            })}
                        </div>
                        <div className={styles.arrowDownIcon}>
                            <Image 
                                src="/icons/arrow-up.svg"
                                alt="arrow-down-icon"
                                height={32}
                                width={32}
                                style={{ transform: "rotate(180deg) scale(1, 1)"}}
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
                            // do styli az sie prosi
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
                        <h2 className={styles.productTitle}>{product?.title}</h2>
                        {product?.variants &&
                        <p className={styles.productPrice}>{getDefaultVariantPrice(product.variants[0])}</p>}
                     </div>
                        <Select
                        //nie stylizuje sie dopoki nie dostanie contentu ??? WHY
                        //po odswiezeniu bez cache sie nie stylizuje przez 0.5s
                        // a probowales odpalac nexta produkcyjnie? (next build a potem next start bodajze)
                            label="Rozmiar:"
                            placeholder="Wybierz rozmiar"
                            value={selectedVariant}
                            onChange={(variant) => setSelectedVariant(variant)}
                            data={mappedSelectOptions}
                            styles={(theme) => ({
                                root: {
                                    width: "100%",
                                },
                                label: {
                                    display: "flex",
                                    alignItems: "center",
                                    height: "16px",
                                    fontSize: "14px",
                                    fontWeight: "400"
                                },
                                dropdown : {
                                    border : "1px solid #2B2A2B",
                                    borderRadius: "0px",
                                    
                                },
                                input : {
                                    height: "42px",
                                    border: "1.5px solid #2B2A2B",
                                    borderRadius: "0px",
                                    marginTop: "16px",
                                    paddingBottom: "2px",
                                    paddingLeft: "18px",
                                    '&:focus': {
                                        border: "1.5px solid #2B2A2B",
                                    }                                  
                                }
                            })}
                        />
                        <div className={styles.counterAndButtonFlex}>
                            <NCounter 
                                fontSize="12px"
                                widthSpan="114px"
                                iconSize ="36px"
                                value={productCount}
                                callbackFunction={setCounterCallback}
                            />
                            <AddToBasketBtn />
                        </div>
                        <ShipTimeInfo when="jutro" />
                        <div className={styles.collapseInfoBox}>
                            <div className={styles.collapseLabelFlex}>
                                <p>Informacje dodatkowe</p>
                                <button className={styles.arrowButton} onClick={toggle}>
                                    <Image 
                                        src="/icons/send.svg"
                                        alt="arrow-icon"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                            <Collapse in={opened}>
                                <div className={styles.collapseListFlex}>
                                    {/* // to bym do jakiegos useMemo wrzucil */}
                                {mappedProductAttributes.map((object) => {
                                    if (object.value) return (
                                        <div key={object.title} className={styles.productAttributeFlex}>
                                            <p className={styles.attributeKey}>{object.title}</p>
                                            <p className={styles.attributeValue}>{object.value}</p>
                                        </div>
                                    );
                                    else return null;
                                })}
                                </div>
                            </Collapse>
                        </div>
                </div>
            </div>
            <div className={styles.productDescriptionBox}>
                <p className={styles.productDescriptionBoxTitle}>OpisProduktu</p>
                <p className={styles.productDescriptionBoxText}>{loremIpsum}</p>
            </div>
            { products &&
            <StaticCarousel 
                products={products}
            /> }
            
        </div>
       

    )
}

export default ProductPage