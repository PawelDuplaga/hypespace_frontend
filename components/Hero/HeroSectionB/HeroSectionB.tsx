import './HeroSectionB.scss'

export default function HeroSectionB () {

    const heroBText1 = "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit"
    const heroBText2 = "Sed ut perspiciatis unde omnis iste natus error"

    return(
        <div className='SECTION_4 hero-container'>
            <img className='hero-picture' src="./png/hero22.png"/>
            <div className='Frame-128 hero-right-node'>
                <div className='Frame-127 text-container'>
                    <p className='big-text'>{heroBText1}</p>
                    <p className='small-text'>{heroBText2}</p>
                </div>
                <div className='Frame-110 button-container'>
                    <p>ZOBACZ PRODUKTY</p>
                    <img className="arrow-icon" src="./icons/maki_arrow.svg" />
                </div>
            </div>
        </div>
    )
}