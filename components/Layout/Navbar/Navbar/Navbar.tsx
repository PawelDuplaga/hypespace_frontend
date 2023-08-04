'use client'

import styles from './Navbar.module.scss'
import Link from 'next/link';
import Image from 'next/image'
import { useMemo } from 'react';
import navbarOptions from '@/lib/const/navbarOptions';
import { useItemBucketStore } from '@/lib/state/ItemBucketStore';
//czy nie lepiej zrobic osobny komponent dla koszyka zeby nav nie musial uzywac klienta

export default function Navbar () {

    const mappedNav = useMemo(() => mapNavbarOptions(), []);
    const {itemCount} = useItemBucketStore();


    function mapNavbarOptions() {
        return (
            navbarOptions.map(navbarOption => (
            <div key={navbarOption.name} className={styles.optionContainer}>
                {navbarOption.icon && <Image src={navbarOption.icon} alt={navbarOption.name} width={20} height={20}/>}
                <Link className={styles.optionLink} href={navbarOption.link}>
                    <span className={styles.optionText}>{navbarOption.name}</span>
                </Link>
            </div>
        )))}
        

    return (
            <div className={styles.navbarContainer}>
                <Link href="/">
                    <div className={styles.logoContainer}>
                        <Image 
                            src="/png/Hypespace.png" 
                            alt='hypespace-logo'
                            height={1000}
                            width={1000}
                            style={{height:'100%', width:'auto'}}
                        /> 
                    </div>
                </Link>
                <div className={styles.menu}>
                    {mappedNav}
                </div>
                <div className={styles.itemsBasketIcon}>
                    <Image 
                        src='/icons/cart.svg'
                        alt='cart-icon'
                        height={30}
                        width={30}         
                    />
                    <div className={styles.basketCircle}> 
                        <div className={styles.basketCount}>{itemCount}</div>
                    </div>
                </div>
            </div>
    )   
}

