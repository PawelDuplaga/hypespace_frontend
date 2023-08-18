import styles from './HeroSectionB.module.scss'
import Image from 'next/image'

export default function HeroSectionB () {

    const heroBText1 = "Lorem ipsum dolor sit amet,consectetur adipiscing elit"
    const heroBText2 = "Sed ut perspiciatis unde omnis iste natus error"
    const buttonText = "ZOBACZ PRODUKTY"

    return(
        <div className={styles.heroContainer}>
            <div className={styles.heroImgContainer}>
                <Image 
                    className={styles.heroPicture} 
                    src="/png/hero22.png"
                    alt='offwite-jordan-one'
                    width={1000}
                    height={1000}
                    style = {{height:'100%', width:'auto'}}
                />
            </div>
            <div className={styles.heroRightNode}>
                <div className={styles.textContainer}>
                    <p className={styles.bigText}>{heroBText1}</p>
                    <p className={styles.smallText}>{heroBText2}</p>
                </div>
                {/* ten button nic nie robi */}
                <button className={styles.buttonContainer}>
                    <p>{buttonText}</p>
                    {/* <Image /> */}
                    <img className="arrow-icon" src="./icons/maki_arrow.svg" alt='arrow-icon'/>
                </button>
            </div>
        </div>
    )
}