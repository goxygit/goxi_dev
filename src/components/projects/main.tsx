import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import s from './main.module.css'
import { RootState } from '../../store/store'
const ProjectsComponent = () => {
    const { projects } = useSelector((state: RootState) => state.data.data)
    return (
        <Element name='Project'>
            <div className={s.projects}>
                <h6 className={s.h6}>My projects</h6>
                <div className={s.projectsBlock}>
                    {
                        projects?.map((el, i: number) => (
                            i % 2 === 0 ? (
                                <motion.div className={s.project} >
                                    <img src={el.img} className={s.img} />
                                    <div className={s.info}>
                                        <p className={s.name}>{el.name}</p>
                                        <p className={s.description}>
                                            {el.description}
                                        </p>
                                        <a href={el.link} className={s.btn}>Visit</a>
                                    </div>
                                </motion.div>
                            ) :
                                <motion.div className={s.project} >
                                    <div className={s.info}>
                                        <p className={s.name}>Zolochiv association of volunteers</p>
                                        <p className={s.description}>
                                            Zolochiv is a district center in the Lviv region. At the beginning of the full-scale invasion, volunteer organizations started forming in the Zolochiv district. However, acting independently wasn't proving to be productive, so the decision was made to unite these volunteer organizations. I received a request to create a website for this collaboration from the Junfolio team I joined.
                                        </p>
                                        <a href='' className={s.btn}>Visit</a>
                                    </div>
                                    <img src='https://res.cloudinary.com/dztha3hpj/image/upload/v1706556300/%D0%91%D0%B5%D0%B7_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_b5qjdl.png' className={s.imgSecond} />
                                </motion.div>
                        ))
                    }

                </div>

            </div >
        </Element>

    )
}
export default ProjectsComponent