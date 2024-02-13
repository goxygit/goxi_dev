import { Element, scroller } from 'react-scroll'
import s from './main.module.css'
import { Transition, useScroll, useSpring } from 'react-spring';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion'
import ExperienceBlock from './experience_block';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const AboutComponent = () => {
    const [currentPeriod, setCurrentPeriod] = useState(null);
    const [scrollLock, setScrollLock] = useState(false);
    const [isBottom, setIsBottom] = useState(false)
    const { experience, about } = useSelector((state: RootState) => state.data.data)
    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3
            }

        }
    }

    return (
        // <Element name='About'>
        <motion.section
            initial='hidden'
            whileInView='visible'
            className={s.aboutContainer}
        >
            <div id='About' className={classNames(s.container, { [s.currentPeriod]: currentPeriod && currentPeriod >= 0 })}>
                <div className={classNames(s.about, { [s.fixed]: scrollLock }, { [s.bottom]: isBottom })}>
                    <motion.h2

                        variants={textAnimation} className={s.h2}>A LITTLE BIT ABOUT ME</motion.h2>
                    <motion.img
                        variants={textAnimation} className={s.img} src={about.img} alt="" />
                    <motion.p
                        variants={textAnimation} className={s.description}>
                        Hey there, I'm Oleg, a frontend guy with less than two years of coding under my belt. I'm all about making websites not just work, but look cool too. Got this specific idea in my head that I'm itching to bring to life. Always on the lookout for new challenges and creative opportunities in this exciting field! 😊✨
                    </motion.p>
                    {
                        experience &&
                        <motion.div
                            className={s.experienceBlock}
                        >
                            <motion.h3 variants={textAnimation} className={s.h3}>Profeshional Experience</motion.h3>
                            <div
                                className={s.experience}>
                                {experience.map((obj, i) =>
                                    <motion.div variants={textAnimation}>
                                        <ExperienceBlock index={i} currentPeriod={currentPeriod} setCurrentPeriod={setCurrentPeriod} obj={obj} />

                                    </motion.div>

                                )}

                            </div>
                        </motion.div>
                    }

                </div>
            </div>
        </motion.section>
        // </Element>

    )
}
export default AboutComponent