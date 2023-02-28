import { useEffect, useRef } from 'react'
import style from './style.module.scss'

import { init } from 'ityped'
export default function HeroSection() {

    const textRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (textRef.current) {
            init(textRef.current, {
                backDelay: 1500,
                showCursor: true,
                strings: [
                    'Pedro',
                    'Desenvolvedor Web',
                    'Estudante'
                ]
            })
        }
    }, [])
    return (
        <div className={style.Container} id='home'>
            <div className={style.column}>
                <h4>Seja Bem Vindo</h4>

                <h2 className={style.title}>Eu sou <span ref={textRef}></span></h2>
                <p>Desenvolvo interfaces dinâmicas e intuitivas utilizando a biblioteca React, enquanto aplico habilidades adquiridas na minha formação acadêmica na Universidade Federal do Espírito Santo, visando sempre entregar soluções eficientes e de qualidade aos meus clientes e colaboradores.</p>

                <a href='https://drive.google.com/uc?export=download&id=1Yc8x38p7CsCjPlV2Y8JDZs9j2l3k8MCi' download='cv.pdf'> Baixar CV</a>

            </div>
            <div className={style.colum}>

                <img className={style.avatar} src='https://avatars.githubusercontent.com/u/101609712?s=400&u=a04c81dc4373bb692f29763cff02316f6776ab1d&v=4' />

            </div>
        </ div>
    )
}