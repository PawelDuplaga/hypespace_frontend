'use client'
import './StaticCarousel.scss'
import { ReactNode, use, useEffect, useState } from "react"
import ProductViewTemplateB from '@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB';
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { medusaClient } from '@/lib/utils/medusaUtils';
import { getRandomElements } from '@/lib/utils/helpers';

type ProductProps = {
    products : PricedProduct []
}

const StaticCarousel : React.FC<ProductProps> = ({products}) => {

    const AnimationFazes : string[] = ["default", "animate0", "animate1"]

    const [animationFazeIndex, setAnimationFazeIndex] = useState(0)
    const [buttonsVisibility, setButtonsVisibility] = useState({left : false, right : true})

    const handleClickRightButton = () => {
        if(animationFazeIndex < AnimationFazes.length - 1) {
            setAnimationFazeIndex(prev => prev +1)
        }
    };

    const handleClickLeftButton = () => {
        if(animationFazeIndex > 0){
            setAnimationFazeIndex(prev => prev - 1)
        }
    }

    const onAnimationEnd = () => {
        setButtonsVisibility(prevState => ({
            right : animationFazeIndex !== AnimationFazes.length - 1,
            left: animationFazeIndex !== 0
          }));
    };
    

    // prowizorka bo za malo produktow w bazie
    const currProducts : PricedProduct [] = products
    if (products.length < 12) {
        for(let i = 0; i < 12; i ++){
            currProducts[i] = products[0]
        }
    }


    function mapRecomendedSection ()  {
        return (currProducts.map((product) => (
            <ProductViewTemplateB
                key={product.id}
                product={product}  
            />
        )))
    }

    return (
        <div className='carousel-container'>
            {buttonsVisibility.right && 
            <div className="button-right"onClick={handleClickRightButton}>
                <img className='arrow-icon' src="./icons/maki_arrow.svg" />
            </div>}
            {buttonsVisibility.left &&
            <div className="button-left" onClick={handleClickLeftButton}>
                <img className='arrow-icon' src="./icons/maki_arrow.svg" />
            </div>}          
            <div 
                className={`moving-div ${AnimationFazes[animationFazeIndex]}`}
                onTransitionEnd={onAnimationEnd}    
            >
                {mapRecomendedSection()}
            </div>
        </div>
    )
}


export default StaticCarousel;