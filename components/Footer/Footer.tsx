import StoreInfoType from '@/lib/Types/StoreInfoType'
import './Footer.scss'


export default function Footer ( storeInfo : StoreInfoType) {

    const openingHours = storeInfo.openingHours;


    return(
        <div className='footer-main-ontainer'>
            <div className='footer-margins-container'>
                <div className='Frame-373 logo-node'>
                    <img src='./png/Hypespace.png'/>
                </div>
                <div className='Line-3 split-line'></div>
                <div className='Frame-369 info-bracket'>
                    <div className='Frame-54 top-part'>
                        <div className='Frame-58 flex-shop-info'>
                            <div className='Frame-46 category-title-SKLEP'>
                                <p>SKLEP STACJONARNY</p>
                            </div>
                                <div className='Frame-55 flex-company-address'>
                                    <p>{storeInfo.name}</p>
                                    <p>{storeInfo.address}</p>
                                    <p>{storeInfo.address2}</p>
                                </div>
                                <div className='Frame-57 flex-company-address'>
                                    <p>{openingHours.mondayToFriday}</p>
                                    <p>{openingHours.saturday}</p>
                                    <p>{openingHours.sunday}</p>
                                </div>
                        </div>
                        <div className='Frame-50 flex-column'>
                            <div className='Frame-46 category-title'>
                                <p>PRODUKTY</p>
                            </div>
                            <div className='Frame-49 flex-1'>
                                <p>Wszystkie produkty</p>
                                <p>Nowości</p>
                                <p>Wyprzedaż</p>
                            </div>
                        </div>
                        <div className='Frame-51 flex-column'>
                            <div className='Frame-46 category-title'>
                                <p>INFORMACJE</p>
                            </div>
                            <div className='Frame-49 flex-1'>
                                <p>O nas</p>
                                <p>Kontakt</p>
                            </div>
                        </div>
                    </div>
                    <div className='Frame-63 bottom-part'>
                        <div className='split-line'></div>
                        <div className='Frame-61 name-logos-part'>
                            <p className='company-name-bottom'>
                                ©2023 Hypespace
                            </p>
                            <div className='Frame-59 payment-agents'>
                                <img src="./png/paymentAgentsLogos/PayU.png"/>
                                <img src="./png/paymentAgentsLogos/Visa.png"/>
                                <img src="./png/paymentAgentsLogos/Mastercard.png"/>
                                <img src="./png/paymentAgentsLogos/Blik.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}