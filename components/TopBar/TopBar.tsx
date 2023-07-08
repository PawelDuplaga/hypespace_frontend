import styles from './TopBar.module.scss'
import Image from 'next/image'

const TopBar = () => {

    const text1 : string = "Wysyłka w 24h"
    const text2 : string = "Sklep stacjonarny - Warszawa"
    const telefon : string = "111 222 333"
    
    return (
            <div className={styles.topbarContainer}>
                <div className={styles.topbarMainFlexbox}>
                    <div className={styles.flex28}>
                        <Image
                            src="/icons/send.svg"
                            width={16}
                            height={16}
                            alt='send-icon'
                        />
                        <p>{text1}</p>
                    </div>
                    <div className={styles.flex27}>
                        <div className={styles.flex21}>
                            <Image
                                src="/icons/shop.svg"
                                width={16}
                                height={16}
                                alt='shop-icon'
                            />
                            <p>{text2}</p>
                        </div>
                        <div className={styles.line1}></div>
                        <div className={styles.flex22}>
                            <Image
                                src="/icons/call.svg"
                                width={16}
                                height={16}
                                alt='phone-icon'
                            />
                            <p>{telefon}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TopBar