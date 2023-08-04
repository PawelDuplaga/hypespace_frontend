'use client'

import styles from './page.module.scss'
import classnames from 'classnames';
import { useState } from "react"
import Image from 'next/image';
import ProductViewTemplateB from '@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB';
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductProps = {
    products : PricedProduct []
}

const StaticCarousel = ({products} : ProductProps) => {

    const ANIMATION_FAZES: string[] = [styles.default, styles.animate0, styles.animate1]

    const [animationFazeIndex, setAnimationFazeIndex] = useState(0)
    const [rightButtonVisibility, setRightButtonVisibility] = useState(true)
    const [leftButtonVisibility, setLeftButtonVisibility] = useState(false)

    const handleClickRightButton = () => {
        if (animationFazeIndex < ANIMATION_FAZES.length - 1) {
            setAnimationFazeIndex(prev => prev + 1)
        }
    };

    const handleClickLeftButton = () => {
        if (animationFazeIndex > 0){
            setAnimationFazeIndex(prev => prev - 1)
        }
    }

    const onTransitionEnd = () => {
        setRightButtonVisibility(animationFazeIndex !== ANIMATION_FAZES.length - 1)
        setLeftButtonVisibility(animationFazeIndex !== 0)
    };
    
    // You shouldn't change variable values in such way. It should be either useMemo or move it to state
    // Do dopytania - nie edytuje propsow - modyfikuje kopie
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
        <div className={styles.carouselContainer}>
            {rightButtonVisibility && 
            <button className={styles.buttonRight} onClick={handleClickRightButton}>
                <Image 
                    className={styles.arrowIconRight} 
                    src="/icons/maki_arrow.svg" 
                    alt='arrow-icon-right' 
                    width={20}
                    height={20}
                />
            </button>}
            {leftButtonVisibility &&
            <button className={styles.buttonLeft} onClick={handleClickLeftButton}>
                <Image 
                    className={styles.arrowIconLeft} 
                    src="/icons/maki_arrow.svg" 
                    alt="arrow-icon-left" 
                    width={20}
                    height={20}
                />
            </button>}          
            <div 
                className = {classnames(styles.movingDiv, ANIMATION_FAZES[animationFazeIndex])}
                onTransitionEnd={onTransitionEnd}    
            >
            <div className={styles.carouselTextBox}>
                <div className={styles.flexText}>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.flexButton}></div>
            </div>
            {mapRecomendedSection()}
            </div>
        </div>
    )
}


export default StaticCarousel;