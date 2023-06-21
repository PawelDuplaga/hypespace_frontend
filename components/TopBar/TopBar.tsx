import './TopBar.css'
import Image from 'next/image'

export default function TopBar () {

    const text1 : string = "Wysyłka w 24h"
    const text2 : string = "Sklep stacjonarny - Warszawa"
    const telefon : string = "111 222 333"



    return (
        <div className='test2'>
            <div className="topbar">
                <div className="frame-47">
                    <div className='frame-28'>
                        <Image
                            src="./icons/send.svg"
                            width={16}
                            height={16}
                            alt=''
                        />
                        <p className='frame-28-text'>{text1}</p>
                    </div>
                    <div className="frame-27">
                        <div className='frame-21'>
                            <Image
                                src="./icons/shop.svg"
                                width={16}
                                height={16}
                                alt=''
                            />
                            <p className='frame-21-text'>{text2}</p>
                        </div>
                        <div className='line-1'></div>
                        <div className='frame-22'>
                            <Image
                                src="./icons/call.svg"
                                width={16}
                                height={16}
                                alt='Kontakt'
                            />
                            <p className='topbar-text'>{telefon}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='test'></div>
        </div>
    )
}