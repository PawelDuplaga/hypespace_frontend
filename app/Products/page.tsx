'use client'

import { medusaClient } from '@/lib/utils/medusaUtils'
import { PricedProduct, PricedVariant } from "@medusajs/medusa/dist/types/pricing"
import ProductViewTemplateB from '@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB'
import { useState, useEffect } from 'react'
import styles from './page.module.scss'



function AllProductsPage() {

    const [pageProducts, setPageProducts] = useState<PricedProduct[]>()
    const [pageIndex, setPageIndex] = useState(1)

    useEffect( () => {
        medusaClient.products.list({limit : 3})
        .then(({ products }) => {
            setPageProducts(products);
        });
        
      }, []);

      
      function mapProductRow (products : PricedProduct[]) {
        let productRow = []
        for (let i =0;i<4;i++){
            productRow.push(
                //prowizorycznie index 0
                <ProductViewTemplateB
                    key={products[0].id}
                    product={products[0]}
                />
            )
        }
        return (
            <div className={styles.productRow}>{productRow}</div>
        )
      }
      


      // narazie mapuje 1 produkt do wszystkich okien



    return (
        <div className={styles.productPageMain}>
            <div className={styles.productGridContainer}>
                {pageProducts && mapProductRow(pageProducts)}
                {pageProducts && mapProductRow(pageProducts)}
                {pageProducts && mapProductRow(pageProducts)}
                {pageProducts && mapProductRow(pageProducts)}
            </div>
        </div>
    )
}

export default AllProductsPage