'use client'

import { medusaClient } from "@/lib/utils/medusaUtils";
import {PricedProduct, PricedVariant,} from "@medusajs/medusa/dist/types/pricing";
import ProductViewTemplateB from "@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { fetchRandomProducts } from "@/RequestMock/dataMock";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem"; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";

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

    
    // narazie mapuje 1 produkt do wszystkich okien

    const currPage = parseInt

    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.gridPageTitle}>Wszystkie Produkty</div>
            </div>
            <div className={styles.gridContainer}>
                {products?.map((item, index) => (
                    <div className={styles.gridItem} key={index}>
                        <ProductViewTemplateB product={item} />
                    </div>
                ))}
            </div>
            <Pagination
                page={parseInt(params.index)}
                defaultPage={1}
                siblingCount={2}
                boundaryCount={2}
                count={20}
                renderItem={(item) => (
                    <PaginationItem
                    component={Link}
                    href={`/Products/${item.page}`}
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                    />
                )}
            />
        </div>
    );

}

export default ProductsGridPage