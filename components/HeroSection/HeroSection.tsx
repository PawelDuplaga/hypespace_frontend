// 'use client'
import './HeroSection.scss'


export default function HeroSection () {

    const heroText1 = "Twoj but czeka na Ciebie"
    const heroText2 = "Odkryj naszą bogatą ofertę dla sneakerheadów"

    const handleClick = () => {
        console.log("Click hero button")
    }


    return (
        <div className="Frame-1229 hero-section">
            <div className="Frame-1228 left-node">
                <div className="Frame-376 left-text-node">
                    <div className='Frame-64 big-text'>{heroText1}</div>
                    <div className='Frame194 small-text'>{heroText2}</div>
                </div>
                {/* <button onClick={handleClick}>Click me</button> */}
            </div>
            <div className="hero-1">
                <img src = "./png/hero1.png" />
            </div>
        </div>
    )

}