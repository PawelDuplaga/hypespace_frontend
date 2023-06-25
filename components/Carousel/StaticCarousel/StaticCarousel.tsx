'use client'
import './StaticCarousel.scss'
import { useState } from "react"
import ProductViewTemplateB from '@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB';

export default function StaticCarousel () {

    const AnimationFazes : string[] = ["default", "animate0", "animate1"]

    const [isAnimating, setIsAnimating] = useState(true);
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
      console.log("end")
      console.log(AnimationFazes[animationFazeIndex])
    };
    

    const currProducts : number[] = [1,2,3,4,5,6,7,8,9,10,11,12]


    function mapRecomendedSection () {
        return currProducts.map((product) => (
            <ProductViewTemplateB
                key={product}

            //    type problem 
            //    do wytlumaczenia ocb
            />
        ));
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
                className={`moving-div ${isAnimating ? AnimationFazes[animationFazeIndex] : ""}`}
                onTransitionEnd={onAnimationEnd}    
            >
                {mapRecomendedSection()}
            </div>
        </div>
    )

}