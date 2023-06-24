'use client'
import './StaticCarousel.scss'
import { useState } from "react"

export default function StaticCarousel () {


    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
      setIsAnimating(true);
    };
  
    const onAnimationEnd = () => {
      setIsAnimating(false);
    };
    


    return (
        <div className='carousel-container'>
            <button className="lol"onClick={handleClick}>Start Animation</button>
            <div 
                className={`moving-div ${isAnimating ? "animate" : ""}`}
                onAnimationEnd={onAnimationEnd}
            >

            </div>
        </div>
    )

}