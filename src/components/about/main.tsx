import { Element, scroller } from 'react-scroll'
import s from './main.module.css'
import { Transition, useScroll, useSpring } from 'react-spring';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion'
const hobbies = [
    [
        {
            name: "HTML",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990567/html-icon_urd4vw.webp'
        },
        {
            name: "CSS",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990655/css-3-icon_fp87qq.png'
        },
        {
            name: "JavaScript",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990659/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-thumbnail_paujix.png'
        },
    ],
    [
        {
            name: "TypeScript",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990679/Typescript_logo_2020.svg_dfleuy.png'
        },
        {
            name: "SCSS",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990831/sass_fqzslq.png'
        },
        {
            name: "React",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990697/React-icon.svg_j9rmtf.png'
        },
    ],
    [
        {
            name: "Next.js",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990734/nextjs-icon-512x512-11yvtwzn_nuyau7.png'
        },
        {
            name: "GitHub",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706439059/github_iofjda.png'
        },
        {
            name: "FireBase",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990861/firebase-1-logo-png-transparent_kejm1z.png'
        },
    ],

]
const AboutComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollLock, setScrollLock] = useState(false);
    const [isBottom, setIsBottom] = useState(false)
    const [prevScroll, setPrevScroll] = useState(0)
    const [animationKey, setAnimationKey] = useState(Date.now());

    const [isScroll, setIsScroll] = useState<boolean>(false)
    useEffect(() => {
        setAnimationKey(Date.now()); // Обновляем ключ для запуска анимации

        // Здесь можно добавить логику для запуска анимации появления новых элементов
    }, [currentIndex]);


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const pageHeight = document.documentElement.clientHeight;
            const ComponentBorders = [(pageHeight * 2), (4 * pageHeight)]
            let ranges = [
                { start: ComponentBorders[0], end: (ComponentBorders[0] + ((ComponentBorders[1] - ComponentBorders[0]) / 3)) },
                { start: (ComponentBorders[0] + ((ComponentBorders[1] - ComponentBorders[0]) / 3)) + Math.min(), end: (ComponentBorders[0] + ((ComponentBorders[1] - ComponentBorders[0]) / 3) * 2) },
                { start: (ComponentBorders[0] + ((ComponentBorders[1] - ComponentBorders[0]) / 3) * 2) + Math.min(), end: ComponentBorders[1] }
            ];
            // if (!isScroll && window.scrollY <= ComponentBorders[0] && prevScroll >= (ComponentBorders[0] - 20)) {
            //     console.log('no')
            //     scroller.scrollTo('Home', {
            //         duration: 300,
            //         smooth: true
            //     })
            //     setIsScroll(true)


            // }

            // if (window.scrollY >= ComponentBorders[0]) {
            //     setIsScroll(false)
            // }
            // console.log(window.scrollY, prevScroll)

            // setPrevScroll(window.scrollY)
            // console.log(window.scrollY, prevScroll)

            if (scrollY >= ComponentBorders[0] && scrollY < ComponentBorders[1]) {
                // Заблокировать скролл, чтобы компонента не перелистывалась
                if (scrollY <= ranges[0].end) setCurrentIndex(0)
                else if (scrollY <= ranges[1].start && scrollY <= ranges[1].end) setCurrentIndex(1)
                else {
                    setCurrentIndex(2)
                }
                setScrollLock(true)
                setIsBottom(false)

            } else if (scrollY >= ComponentBorders[1]) {
                setScrollLock(false)
                setIsBottom(true)
            } else {
                setScrollLock(false)
                setIsBottom(false)
            }


        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

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
    const iconAnimation = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2,
                duration: 0.2
            }
        }
    };

    return (
        // <Element name='About'>
        <motion.section

            className={s.aboutContainer}
        >
            <div id='About' className={s.container}>
                <div className={classNames(s.about, { [s.fixed]: scrollLock }, { [s.bottom]: isBottom })}>
                    <motion.h2
                        initial='hidden'
                        whileInView='visible'
                        variants={textAnimation} className={s.h2}>A LITTLE BIT ABOUT ME</motion.h2>
                    <motion.img initial='hidden'
                        whileInView='visible'
                        variants={textAnimation} className={s.img} src="" alt="" />
                    <motion.p
                        initial='hidden'
                        whileInView='visible'
                        variants={textAnimation} className={s.description}>
                        Hey there, I'm Oleg, a frontend guy with less than two years of coding under my belt. I'm all about making websites not just work, but look cool too. Got this specific idea in my head that I'm itching to bring to life. Always on the lookout for new challenges and creative opportunities in this exciting field! 😊✨
                    </motion.p>

                    < motion.div initial='hidden'
                        whileInView='visible'
                        variants={textAnimation} className={s.hobbiesBlock}>
                        <h3 className={s.h3}>MY HOBBIES</h3>
                        <div
                            className={classNames(s.hobbies,)}>
                            {
                                hobbies[currentIndex]?.map((el, index) => (
                                    <motion.div
                                        initial='hidden'
                                        whileInView='visible'
                                        key={animationKey + index}
                                        variants={iconAnimation}
                                        className={classNames(s.hobbie, s.icons)}
                                    >
                                        <img className={s.icon} src={el.img} alt="" />
                                        <p className={s.text}>{el.name}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
        // </Element>

    )
}
export default AboutComponent