import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import s from './main.module.css'
import { RootState } from '../../store/store'


const ProjectsComponent = () => {
    const { projects } = useSelector((state: RootState) => state.data.data)
    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }

        }
    }
    return (
        <Element name='Project'>
            <motion.section className={s.projects}
            >
                <h6 className={s.h6}>My projects</h6>
                <div className={s.projectsBlock}>
                    {
                        projects?.map((el, i: number) => (
                            i % 2 === 0 ? (
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible' variants={textAnimation} className={s.project} >
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
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible' variants={textAnimation} className={s.project} >
                                    <div className={s.info}>
                                        <p className={s.name}>{el.name}</p>
                                        <p className={s.description}>
                                            {el.description}
                                        </p>
                                        <a href={el.link} className={s.btn}>Visit</a>
                                    </div>
                                    <img src={el.img} className={s.imgSecond} />
                                </motion.div>
                        ))
                    }

                </div>

            </motion.section >
        </Element>

    )
}
export default ProjectsComponent