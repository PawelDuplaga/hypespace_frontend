'use client'

import {PricedProduct, PricedVariant,} from "@medusajs/medusa/dist/types/pricing";
import ProductViewTemplateB from "@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { fetchRandomProducts } from "@/RequestMock/dataMock";
import { Group, Pagination } from '@mantine/core';
import { useProduct } from "medusa-react";

const NUMBER_OF_PRODUCTS_PER_PAGE : number = 16;

function ProductsGridPage ({params} : {params: {index : string}}) {


    const [products, setProducts] = useState<PricedProduct[]>();

    useEffect(() => {
        fetchRandomProducts(NUMBER_OF_PRODUCTS_PER_PAGE).then((products) => {
            setProducts(products);
            console.log(params.index)
            //console.log(products);
        });
    }, []);

    useProduct


    
    // narazie mapuje 1 produkt do wszystkich okien

    const currPage = parseInt

    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.gridPageTitle}>Wszystkie Produkty</div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.gridContainer}>
                {products?.map((item, index) => (
                    <div className={styles.gridItem} key={index}>
                        <ProductViewTemplateB product={item} />
                    </div>
                ))}
            </div>
            <Pagination
                total={10}
                value={parseInt(params.index)}
                position="center"
                radius="xl"
                color="red"
                getItemProps={(page) => ({
                component: 'a',
                href: `/Products/${page}`,
                })}

                styles={(theme) => ({
                    control: {
                        backgroundColor : "white",
                        color : "#2B2A2B",
                        border : "none",

                      '&[data-active]': {
                        backgroundColor: "red",
                        color : "white",
                        border: 0,
                      },
                    },
                  })}

                getControlProps={(control) => {
                if (control === 'first') {
                    return { component: 'a', href: "/Products/1" };
                }

                if (control === 'last') {
                    return { component: 'a', href: `/Products/${10}` };
                }

                if (control === 'next') {
                    return { component: 'a', href: `/Products/${parseInt(params.index) + 1}` };
                }

                if (control === 'previous') {
                    return { component: 'a', href: `/Products/${parseInt(params.index) - 1}` };
                }

                return {};
                }}
                
            />      
        </div>
    );

}

export default ProductsGridPage