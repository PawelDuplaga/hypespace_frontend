import './Navbar.scss'
import Image from 'next/image'

export default function Navbar () {
    return (
            <div className="Frame-394 navbar">
                <div className="logo">
                    <img
                        src = "./png/Hypespace.png"              
                    />
                </div>
                <div className="menu">
                    <p>WSZYSTKIE PRODUKTY</p>
                    <p>NOWOŚĆI</p>
                    <p>
                        <img src="./icons/promotion.svg "/>
                        <span>WYPRZEDAŻ</span>
                    </p>
                    <p>O NAS</p>
                    <p>KONTAKT</p>
                </div>
            </div>
    )
}