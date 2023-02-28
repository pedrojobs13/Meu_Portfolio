import style from './style.module.scss'

interface Tech {
    title: string,
    width: string,
    percentage: string
}

const frontendSkills: Tech[] = [
    {
        title: 'JavaScript',
        width: '85%',
        percentage: '85%'
    },
    {
        title: 'React.js',
        width: '70%',
        percentage: '70%'
    },
    {
        title: 'Next.js',
        width: '45%',
        percentage: '45%'
    }
]

const backendSkills: Tech[] = [
    {
        title: 'Node.js',
        width: '45%',
        percentage: '45%'
    },
    {
        title: 'SQL',
        width: '70%',
        percentage: '70%'
    },
    {
        title: 'Java',
        width: '30%',
        percentage: '30%'
    }
]

export default function Skills() {
    return (
        <div className={style.skills_wrapper}  id='sobre'>
            <div className={style.frontend_skill}>
                {
                    frontendSkills.map((front, index) =>
                    (
                        <div className={style.skills_data} key={index}>
                            <div className={style.skill_title}>
                                <h6>{front.title}</h6>
                                <span>{front.percentage}</span>
                            </div>

                            <div className={style.skill_bar}>
                                <span className={style.skill_bar_percentage} style={{ width: `${front.percentage}` }}></span>
                            </div>
                        </div>


                    ))
                }
            </div>
            <div className={style.backedn_skill}>
                {
                    backendSkills.map((back, index) =>
                    (
                        <div className={style.skills_data} key={index}>
                            <div className={style.skill_title}>
                                <h6>{back.title}</h6>
                                <span>{back.percentage}</span>
                            </div>

                            <div className={style.skill_bar}>
                                <span className={style.skill_bar_percentage} style={{ width: `${back.percentage}` }}></span>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    )
}