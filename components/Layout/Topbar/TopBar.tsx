import styles from './TopBar.module.scss'
import Image from 'next/image'

const TopBar = () => {
    // to bym przeniosl do zmiennej w lib/utils/const.ts. My piszemy jeszcze stale w ten sposob const TEXT_1 = "Wysyłka w 24h"
    // nie musisz tez dawac typow w tej sytuacji. TS sam ogarnie
    const text1 : string = "Wysyłka w 24h"
    const text2 : string = "Sklep stacjonarny - Warszawa"
    const telefon : string = "111 222 333"
    
    // alty powinny byc zrozumialne dla czlowieka (czytane przez czytniki stron)
    // smieszne nazwy flexXY. Widze ze ich style sie powtarzaja. Zrobil bym jeden z wspolnymi i cos w stylu className={[styles.flexUniversal, styles.flexSpecfic].join(' ')}
    // albo uzyc bliblioteki classnames
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