import { useState } from 'react';
import MenuMobile from '../MenuMobile';
import styles from './style.module.scss'
import { useRef, useEffect } from 'react';
import { VscMenu } from "react-icons/vsc";
const navLink: string[] = ['Home', 'Sobre', 'Serviços', 'Portfolio', 'Contato']

export default function Menu() {
    const [isvisible, setIsvisible] = useState(false);
    const headerRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (headerRef.current) {
                if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                    headerRef.current.classList.add(styles['scroll_screen_menu'])
                } else {
                    headerRef.current.classList.remove(styles['scroll_screen_menu'])
                }
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
                if (headerRef.current) {
                    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                        headerRef.current.classList.add(styles['scroll_screen_menu'])
                    } else {
                        headerRef.current.classList.remove(styles['scroll_screen_menu'])
                    }
                }
            })
        }
    }, []);


    function handleMenuClick(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();

        const el = event.target as HTMLInputElement
        const targetAttr = el.getAttribute('href')
        const location = document.querySelector(`${targetAttr}`);

        if (location instanceof HTMLElement) {
            const valueoffSeat = location.offsetTop;
            window.scroll({
                left: 0,
                top: valueoffSeat - 64,
            })
        }

    }
    /*  if (typeof window !== "undefined") {
           var largura = window.innerWidth
               || document.documentElement.clientWidth
               || document.body.clientWidth;
           ;
   
   
       } */
    return (
        <div>
            <div className={styles.menu} ref={headerRef}>
                <div className={styles.perfil}>
                    <h3>Pedro Lucas Gomes</h3>
                    <h5>Estudante</h5>
                </div>
                <div className={styles.menuVisible}>
                    <ul className={styles.menulist}>
                        {navLink.map((link, index) => (
                            <li key={index}>
                                <a href={`#${link.toLocaleLowerCase()}`} onClick={handleMenuClick}>{link}</a>
                            </li>
                        ))} 
                    </ul>

                    <button onClick={() => { setIsvisible(!isvisible) }}><VscMenu /></button>
                </div>
            </div>
            {isvisible &&
                <MenuMobile />
            }
        </div>
    )
}