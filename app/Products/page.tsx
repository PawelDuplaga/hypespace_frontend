"use client";

import { medusaClient } from "@/lib/utils/medusaUtils";
import {PricedProduct, PricedVariant,} from "@medusajs/medusa/dist/types/pricing";
import ProductViewTemplateB from "@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { fetchRandomProducts } from "@/RequestMock/dataMock";
import PageIndexer from "@/components/Page_GridProducts/PageIndexer/PageIndexer";

const NUMBER_OF_PRODUCTS_PER_PAGE: number = 16;

function AllProductsPage() {
    const [products, setProducts] = useState<PricedProduct[]>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        fetchRandomProducts(NUMBER_OF_PRODUCTS_PER_PAGE).then((products) => {
            setProducts(products);
            console.log(products);
        });
    }, [pageNumber]);

    // narazie mapuje 1 produkt do wszystkich okien

    return (
        <div className={styles.mainContainer}>
            <div className={styles["grid-container"]}>
                {products?.map((item, index) => (
                    <div className={styles["grid-item"]} key={index}>
                        <ProductViewTemplateB product={item} />
                    </div>
                ))}
            </div>
            <PageIndexer 
                numberOfPages={10}
                currentPage={pageNumber}
                setPageCallback={setPageNumber}
                
            />
        </div>
    );
}

export default AllProductsPage;
