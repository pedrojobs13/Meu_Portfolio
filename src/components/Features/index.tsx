import style from './style.module.scss'
import { BsCodeSlash, BsHddNetworkFill } from "react-icons/bs";

const services = {

}

export default function Features() {
    return (
        <section id='serviços'>
            <div className={style.container}>
                <div className={style.services_top}>
                    <h6>Serviços</h6>
                    <h2>O que eu Faço</h2>
                </div>
                <div className={style.container_services}>
                    <div className={style.single_container}>
                        <div className={style.single_service}>
                            <span className={style.service_icon}>
                                <BsCodeSlash />

                            </span>
                            <h2>Front-end Development</h2>
                            <p>Fully Responsive modern single page web application usando react.js, scss, código sustentável, API integration, etc...</p>
                        </div>
                    </div>
                    <div className={style.single_container}>
                        <div className={style.single_service}>
                            <span className={style.service_icon}>
                                <BsHddNetworkFill />
                            </span>
                            <h2>Frontend with Backend</h2>
                            <p>Fullstack web application development usando Next.js, API routes, com payment integration, integração com APIs de terceiros, etc...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}