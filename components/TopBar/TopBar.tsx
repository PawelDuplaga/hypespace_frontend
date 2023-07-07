import './TopBar.scss'
import Image from 'next/image'

export default function TopBar () {

    const text1 : string = "Wysyłka w 24h"
    const text2 : string = "Sklep stacjonarny - Warszawa"
    const telefon : string = "111 222 333"

    const sendIcon_path = "./icons/send.svg"
    const shopIcon_path = "./icons/shop.svg"
    const callIcon_path = "./icons/call.svg"

    return (
            <div className="topbar">
                <div className="frame-47 topbar-flex">
                    <div className='frame-28'>
                        <Image
                            src={sendIcon_path}
                            width={16}
                            height={16}
                            alt=''
                        />
                        <p className='text'>{text1}</p>
                    </div>
                    <div className="frame-27">
                        <div className='frame-21'>
                            <Image
                                src={shopIcon_path}
                                width={16}
                                height={16}
                                alt=''
                            />
                            <p className='text'>{text2}</p>
                        </div>
                        <div className='line-1'></div>
                        <div className='frame-22'>
                            <Image
                                src={callIcon_path}
                                width={16}
                                height={16}
                                alt='Kontakt'
                            />
                            <p className='text'>{telefon}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}