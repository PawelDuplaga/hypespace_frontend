import './Navbar.scss'
import Image from 'next/image'
import React, { ReactNode } from 'react';

type NavOptions = {
    name : string,
    icon : string
} 


export default function Navbar () {

    const navbarList : NavOptions[] = [
        {name : "WSZYSTKIE PRODUKTY", icon : ""},
        {name : "NOWOŚĆI", icon : ""},
        {name : "WYPRZEDAŻ", icon : "./icons/promotion.svg"},
        {name : "O NAS ", icon : ""},
        {name : "KONTAKT", icon : ""}
    ]

    function mapNavbarOptions() : ReactNode {
        return (
        navbarList.map(navbarOption => (
            <p key={navbarOption.name}>
              {navbarOption.icon.length > 0 && <img src={navbarOption.icon} alt={navbarOption.name} />}
              <span>{navbarOption.name}</span>
            </p>
        )))}
        

    return (
            <div className="Frame-394 navbar">
                <div className="logo">
                    <img src = "./png/Hypespace.png"/>
                </div>
                <div className="menu">
                    {mapNavbarOptions()}
                </div>
            </div>
    )
    
}