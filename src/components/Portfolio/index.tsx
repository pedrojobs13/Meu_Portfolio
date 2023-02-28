import style from './style.module.scss'

import img01 from '../../assets/ignite-timer.png'
import img02 from '../../assets/first_foto.png'
import img03 from '../../assets/url_shot.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
interface gitData {
    id: number;
    homepage: string;
    name: string
}
/*
Se um dia eu quiser filtrar alguma coisa
const filterArray = vet.filter(({ id }) => id === 592433885 || id === 584997624 || id === 601859513);
*/

export default function Portfolio() {
    const url = "https://api.github.com/users/pedrojobs13/repos";
    const [data, setData] = useState<gitData>();
    useEffect(() => {
        async function fetchData(url: string) {
            const user = await axios.get(url);
            const vet: Array<gitData> = await user.data
            const find = vet.find(({ id }) => id === 592433885);
            if (find) {
                setData(find)
            }
        }
        fetchData(url)
    }, []);

    return (
        <section id="portfolio" className={style.Container}>
            <div className={style.portfolio_top}>
                <h6>Explore meu trabalho</h6>
                <h2>Portfólio</h2>
            </div>
            <div className={style.Container_project}>
                <div className={style.portfolio_card}>
                    <div className={style.image}>
                        <img src={img01.src} />
                    </div>
                    <div className={style.portfolio_content}>
                        <h5>{data?.name}</h5>
                        <a href={data?.homepage} target="_blank">View live demo</a>
                    </div>
                </div>

                <div className={style.portfolio_card}>
                    <div className={style.image}>
                        <img src={img02.src} />
                    </div>
                    <div className={style.portfolio_content}>
                        <h5>react-comment-dashboard</h5>
                        <a href='https://react-comment-dashboard.vercel.app/' target="_blank">View live demo</a>
                    </div>
                </div>

                <div className={style.portfolio_card}>
                    <div className={style.image}>
                        <img src={img03.src} />
                    </div>
                    <div className={style.portfolio_content}>
                        <h5>url-shortener</h5>
                        <a href='https://url-shortener-alpha-three.vercel.app/' target="_blank">View live demo</a>
                    </div>
                </div>

            </div>
        </section>
    )
}