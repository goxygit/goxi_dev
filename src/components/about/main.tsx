import { Element, scroller } from 'react-scroll'
import s from './main.module.css'
import { useScroll, useSpring } from 'react-spring';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
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
            name: "JavaScrypt",
            img: 'https://res.cloudinary.com/dztha3hpj/image/upload/v1706990659/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-thumbnail_paujix.png'
        },
    ],
    [
        {
            name: "TypeScrypt",
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
    const [isScroll, setIsScroll] = useState<boolean>(false)
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


    return (
        // <Element name='About'>
        <div className={s.aboutContainer}>
            <div id='About' className={s.container}>
                <div className={classNames(s.about, { [s.fixed]: scrollLock }, { [s.bottom]: isBottom })}>
                    <h2 className={s.h2}>A LITTLE BIT ABOUT ME</h2>
                    <img className={s.img} src="" alt="" />
                    <p className={s.description}>
                        Hey there, I'm Oleg, a frontend guy with less than two years of coding under my belt. I'm all about making websites not just work, but look cool too. Got this specific idea in my head that I'm itching to bring to life. Always on the lookout for new challenges and creative opportunities in this exciting field! 😊✨
                    </p>

                    <div className={s.hobbiesBlock}>
                        <h3 className={s.h3}>MY HOBBIES</h3>
                        <div className={classNames(s.hobbies,)}>
                            {
                                hobbies[currentIndex]?.map((el) => (
                                    <div className={s.hobbie}>
                                        <img className={s.icon} src={el.img} alt="" />
                                        <p className={s.text}>{el.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </Element>

    )
}
export default AboutComponent