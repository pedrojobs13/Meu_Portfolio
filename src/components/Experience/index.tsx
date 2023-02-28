import { BsPinAngleFill } from 'react-icons/bs'
import style from './style.module.scss'

const experiences: {
    icon: string
    year: string
    func: string
    text: string
}[] = [
        {
            icon: 'BsPinAngleFill',
            year: '2021 - 2023',
            func: 'Estágiario Frontend Developer',
            text: 'Durante meu período de estágio entre 2021 e 2023, adquiri habilidades como desenvolvedor Front-End, tendo também a oportunidade de trabalhar com WordPress em alguns projetos. Com uma sólida compreensão das tecnologias atuais, tenho como objetivo contribuir com a equipe de desenvolvimento em projetos de interfaces intuitivas e eficientes, utilizando minha experiência adquirida como estagiário.'
        }
    ]

export default function Experience() {
    return (
        <section className={style.Container}>
            <div className={style.experience_title}>
                <h2>Experiência</h2>
            </div>
            <div className={style.single_experience_container}>
                {
                    experiences.map((expe) => {
                        return (
                            <div className={style.single_experience}  key={expe.year}>
                                <span className={style.experience_icon}>
                                    <BsPinAngleFill />
                                </span>
                                <h6>{expe.year}</h6>
                                <h5>{expe.func}</h5>
                                <p>{expe.text}</p>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}