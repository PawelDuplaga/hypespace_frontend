import styles from './page.module.scss'
import Image from 'next/image'

// niepotrzebne typowanie
const HeroSection : React.FC = () => {

    // o zmiennych juz pisalem
    const heroText1 = "Twoj but czeka na Ciebie"
    const heroText2 = "Odkryj naszą bogatą ofertę dla sneakerheadów"
    const heroButtonText = "WSZYSTKIE PRODUKTY"

    const handleClick = () => {
        // tu jakis redirect mogl sie wydarzyc
        console.log("Click hero button")
    }


    return (
        <div className={styles.heroSection}>
            <div className={styles.leftNode}>
                <div className={styles.textNode}>
                    {/* teksty raczej w p albo span chociaz to hero to raczej h1 */}
                    <div className={styles.bigText}>{heroText1}</div>
                    <div className={styles.smallText}>{heroText2}</div>
                </div>
                <button className={styles.nodeButton}>
                    <div className={styles.nodeButtonContent}>
                        {/* na divach raczej nie onCLick. Lepiej na buttonach */}
                        <div onClick={handleClick} className={styles.text}>{heroButtonText}</div>
                        {/* czemu nie <Image? */}
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
                // do pliku styli
                style={{height: '100%', width : '100%', objectFit : 'contain'}}
                />
            </div>
        </div>
    )

}

export default HeroSection