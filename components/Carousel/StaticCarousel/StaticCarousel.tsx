'use client'
import './StaticCarousel.scss'
import { ReactNode, use, useEffect, useState } from "react"
import ProductViewTemplateB from '@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB';
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { medusaClient } from '@/lib/utils/medusaUtils';
import { getRandomElements } from '@/lib/utils/helpers';

export default function StaticCarousel () {

    const AnimationFazes : string[] = ["default", "animate0", "animate1"]

    const [animationFazeIndex, setAnimationFazeIndex] = useState(0)
    const [buttonsVisibility, setButtonsVisibility] = useState({left : false, right : true})
    const [products, setProducts] = useState<PricedProduct[]>()

    useEffect( () => {
        medusaClient.products.list({limit : 3})
        .then(({ products }) => {
            setProducts(products)
            console.log(products)      
        });
             
    }, []);

    
    


    //fetchProduct("prod_01H3AG8SRGNAX2X2E4BRFVERC4")
    //why error in console when getting data

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
    

    const currProducts : number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

    function mapRecomendedSection ()  {
        //prowizorka
        if( products != undefined )
        return (currProducts.map((product) => (
            <ProductViewTemplateB
                key={product}
                title={products[0].title}
                thumbnail={products[0].thumbnail}
                variants={products[0].variants}
            
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