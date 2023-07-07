import styles from './page.module.scss'
import Image from 'next/image'

const HeroSection : React.FC = () => {

    const heroText1 = "Twoj but czeka na Ciebie"
    const heroText2 = "Odkryj naszą bogatą ofertę dla sneakerheadów"
    const heroButtonText = "WSZYSTKIE PRODUKTY"

    const handleClick = () => {
        console.log("Click hero button")
    }


    return (
        <div className={styles.heroSection}>
            <div className={styles.leftNode}>
                <div className={styles.textNode}>
                    <div className={styles.bigText}>{heroText1}</div>
                    <div className={styles.smallText}>{heroText2}</div>
                </div>
                <button className={styles.nodeButton}>
                    <div className={styles.nodeButtonContent}>
                        <div onClick={handleClick} className={styles.text}>{heroButtonText}</div>
                        <img src="./icons/arrow-right-1.svg" alt='arrow-icon'/>
                    </div>
                </button>
            </div>
            <div className={styles.rightNode}>
                <Image 
                src="/png/hero1.png" 
                alt='hero-img-jordan-one-blue' 
                width={1000}
                height={1000}
                style={{height: '100%', width : '100%', objectFit : 'contain'}}
                />
            </div>
        </div>
    )

}

export default HeroSection