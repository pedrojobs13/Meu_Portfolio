import styles from './style.module.scss'
import { useState } from 'react'
import Education from '../Education'
import { TiSocialLinkedin, TiSocialGithub, TiMail } from "react-icons/ti";
import Skills from '../Skills';


export default function About() {
    const [about, setAbout] = useState('ABOUT')

    return (
        <section className={styles.Container} id='sobre' >
            <div className={styles.aboutMe}>
                <h6>Sobre Mim</h6>
            </div>

            <div className={styles.modal_section}>
                <div className={styles.Container_button}>
                    <button className={about === 'ABOUT' ? `${styles.about_btn} ${styles.active}` : styles.about_btn} onClick={() => setAbout('ABOUT')}>Sobre Mim</button>
                    <button className={about === 'EDUCATION' ? `${styles.about_btn} ${styles.active}` : styles.about_btn} onClick={() => setAbout('EDUCATION')}>Educação</button>

                    <button className={about === 'SKILLS' ? `${styles.about_btn} ${styles.active}` : styles.about_btn} onClick={() => setAbout('SKILLS')}>Habilidades</button>
                </div>

                {
                    about === 'ABOUT' &&
                    <div className={styles.about_content_wrapper}>
                        <div className={styles.about_img}>
                            <img src='https://avatars.githubusercontent.com/u/101609712?s=400&u=a04c81dc4373bb692f29763cff02316f6776ab1d&v=4' />
                        </div>
                        <div className={styles.about_content}>
                            <h2>Eu sou Pedro</h2>
                            <p>Desenvolvedor Front-End React, focado em fornecer soluções de qualidade com interfaces intuitivas para atender às demandas dos clientes.</p>
                            <div className={styles.social_links}>
                                <h6>Entre em contato:</h6>
                                <div className={styles.icon_about}>
                                    <a href="https://www.linkedin.com/in/pedro-lucas-gomes-8b09621a9/
                                    " target="_blank"><span><TiSocialLinkedin /></span></a>
                                    <a href='https://github.com/pedrojobs13' target="_blank"></a>      <a><span><TiSocialGithub /></span></a>
                                    <a href='mailto:pedrolucasgomesdeoliveira13@gmail.com'> <span><TiMail /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    about === 'EDUCATION' &&
                    <Education />
                }
                {
                    about === 'SKILLS' &&
                    <Skills />
                }
            </div>
        </section >
    )
}