'use client'

import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import { useState, useEffect } from "react"
import './RecomendedSection.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { medusaClient } from '@/lib/utils/medusaUtils';

type ProductProps = {
    products : PricedProduct []
}

const RecomendedSection : React.FC<ProductProps> = ({products}) => {

    const [recommendedProducts, setRecommendedProducts] = useState<PricedProduct[]>()

    useEffect( () => {
        medusaClient.products.list({limit : 3})
        .then(({ products }) => {
            setRecommendedProducts(products)  
        });
    }, []);
    

    function mapRecomendedSection () {
        //currProducts.map((product) => console.log(product))
        if( recommendedProducts != undefined )
        return recommendedProducts.map((product) => (
            <ProductViewTemplateA
               key = {product.id}
               product={product}
            />
        ));
    }


    return (
        <div className="SECTION_1 recomended-container">
            <div className="Frame-64 section-title">Polecamy</div>
            <div className="Frame 189 product-list">{mapRecomendedSection()}</div>
        </div>
    )
}

export default RecomendedSection