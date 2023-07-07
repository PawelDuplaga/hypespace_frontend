import styles from './page.module.scss'
import Image from 'next/image';
import { StoreInfoType } from '@/lib/types/storeInfoType';

type StoreInfoParam = {
    storeInfo : StoreInfoType
}

const Footer = ({storeInfo} : StoreInfoParam) => {

    const { openingHours } = storeInfo


    return(
        <div className={styles.footerMainContainer}>
            <div className={styles.footerMarginsContainer}>
                <div className={styles.logoNode}>
                    <Image className={styles.logoImg}
                        src='/png/Hypespace.png'
                        alt='hypespace-logo' 
                        height={500}
                        width={500}
                        style = {{height: '100%', width: 'auto'}}
                    />
                </div>
                <div className={styles.splitLine}></div>
                <div className={styles.infoBracket}>
                    <div className={styles.infoBracketTopPart}>
                        <div className={styles.flexShopInfo}>
                            <div className={styles.categoryTitleSklep}>
                                <p>SKLEP STACJONARNY</p>
                            </div>
                                <div className={styles.flexCompanyAddress}>
                                    <p>{storeInfo.name}</p>
                                    <p>{storeInfo.address}</p>
                                    <p>{storeInfo.address2}</p>
                                </div>
                                <div className={styles.flexCompanyAddress}>
                                    <p>{openingHours.mondayToFriday}</p>
                                    <p>{openingHours.saturday}</p>
                                    <p>{openingHours.sunday}</p>
                                </div>
                        </div>
                        <div className={styles.flexCategory}>
                            <div className={styles.categoryTitle}>
                                <p>PRODUKTY</p>
                            </div>
                            <div className={styles.flexCategory2}>
                                <p>Wszystkie produkty</p>
                                <p>Nowości</p>
                                <p>Wyprzedaż</p>
                            </div>
                        </div>
                        <div className={styles.flexCategory}>
                            <div className={styles.categoryTitle}>
                                <p>INFORMACJE</p>
                            </div>
                            <div className={styles.flexCategory2}>
                                <p>O nas</p>
                                <p>Kontakt</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.InfoBracketBottomPart}>
                        <div className={styles.splitLine}></div>
                        <div className={styles.NamesLogosPart}>
                            <p>
                                ©2023 Hypespace
                            </p>
                            <div className={styles.paymentAgents}>
                                <Image 
                                    src="/png/paymentAgentsLogos/PayU.png"
                                    alt='payU-logo'
                                    width={100}
                                    height={100}
                                    style= {{height: "100%", width: 'auto'}}
                                />
                                <Image                              
                                    src="/png/paymentAgentsLogos/Visa.png" 
                                    alt='visa-logo'
                                    width={100}
                                    height={100}
                                    style= {{height: "100%", width: 'auto'}}
                                    
                                />
                                <Image 
                                    src="/png/paymentAgentsLogos/Mastercard.png" 
                                    alt='mastercard-logo'
                                    width={100}
                                    height={100}
                                    style= {{height: "100%", width: 'auto'}}
                                />
                                <Image 
                                    src="/png/paymentAgentsLogos/Blik.png" 
                                    alt='blik-logo'
                                    width={100}
                                    height={100}
                                    style= {{height: "100%", width: 'auto'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer