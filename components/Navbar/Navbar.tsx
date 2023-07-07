import styles from './Navbar.module.scss'
import Image from 'next/image'
import { useMemo } from 'react';
import navbarOptions from '@/lib/const/navbarOptions';



export default function Navbar () {

    const mappedNav = useMemo(() => mapNavbarOptions(), []);

    function mapNavbarOptions() {
        return (
            navbarOptions.map(navbarOption => (
            <p key={navbarOption.name}>
              {navbarOption.icon && <Image src={navbarOption.icon} alt={navbarOption.name} width={20} height={20}/>}
              <span>{navbarOption.name}</span>
            </p>
        )))}
        

    return (
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <Image 
                        src="/png/Hypespace.png" 
                        alt='hypespace-logo'
                        height={1000}
                        width={1000}
                        style={{height:'100%', width:'auto'}}
                    />
                </div>
                <div className={styles.menu}>
                    {mappedNav}
                </div>
                <div className={styles.itemsBasketIcon}>
                    <Image 
                        src="./icons/maki_arrow.svg"
                        alt='maki-arrow-icon'
                        height={20}
                        width={20}       
                    />
                </div>
            </div>
    )
    
}

