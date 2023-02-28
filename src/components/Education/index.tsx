const education: {
    id: number
    escolaridade: string;
    local: string;
    tempo: string;
}[] = [
        {
            id: 1,
            escolaridade: 'Bacharel',
            local: 'Ufes',
            tempo: '2019 - Presente'
        },
        {
            id: 2,
            escolaridade: 'Ensino Médio',
            local: 'Ifes',
            tempo: '2016 - 2018'
        }
    ]

import style from './style.module.scss'
export default function Education() {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Graduação</th>
                    <th>Instituto</th>
                    <th>Ano</th>
                </tr>
            </thead>
            {
                education.map((educ) => {
                    return (
                        <tbody key={educ.id}>
                            <tr >
                                <td>{educ.escolaridade}</td>
                                <td>{educ.local}</td>
                                <td>{educ.tempo}</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}


