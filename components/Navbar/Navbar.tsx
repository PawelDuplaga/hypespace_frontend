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
                    <div>WSZYSTKIE PRODUKTY</div>
                    <div>NOWOŚĆI</div>
                    <div>
                        <img/>
                        <span>WYPRZEDAŻ</span>
                    </div>
                    <div>O NAS</div>
                    <div>KONTAKT</div>
                </div>
            </div>
    )
}