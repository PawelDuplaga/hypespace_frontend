'use client'
import './StaticCarousel.scss'
import { useState } from "react"
import ProductViewTemplateB from '@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB';

export default function StaticCarousel () {

    const AnimationFazes : string[] = ["default", "animate0", "animate1", "animate2"]

    const [isAnimating, setIsAnimating] = useState(true);
    const [animationFazeIndex, setAnimationFazeIndex] = useState(0)
    const [buttonsVisibility, setButtonsVisibility] = useState({left : false, right : true})


    const handleClickRightArrow = () => {

      setAnimationFazeIndex(prev => prev +1)
      console.log(AnimationFazes[animationFazeIndex])
      // czemu nie pokazuje nowego stanu
    };
  
    const onAnimationEnd = () => {
        setButtonsVisibility(prevState => ({
            ...prevState,
            left: true
          }));
      console.log("end")
      console.log(AnimationFazes[animationFazeIndex])
    };
    

    const currProducts : number[] = [1,2,3,4,5,6,7,8,9,10]


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
            <div className="button-right"onClick={handleClickRightArrow}>
                <img className='arrow-icon' src="./icons/maki_arrow.svg" />
            </div>}
            {buttonsVisibility.left &&
            <div className="button-left" onClick={handleClickRightArrow}>
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