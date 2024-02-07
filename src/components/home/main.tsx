import { useEffect, useState } from 'react';
import s from './main.module.css'
import { Element, Link, animateScroll as scroll, scroller } from "react-scroll";
import CirclesCanvas from './circles';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const [heightY, setHeightY] = useState<number>()
    const [isScroll, setIsScroll] = useState<boolean>(false)

    // const [prevScroll, setPrevScroll] = useState(0)
    const handleScroll = () => {
        const currentPosition = window.scrollY;
        setHeightY(currentPosition);
    };
    const pageHeight = document.documentElement.clientHeight;
    useEffect(() => {
        setHeightY(window.scrollY)
        // if (heightY && !isScroll && heightY > (pageHeight - 20) && heightY < (pageHeight * 2)) {
        //     if (window.scrollY > prevScroll) {
        //         scroller.scrollTo('About', {
        //             duration: 300,
        //             smooth: true
        //         })
        //         setIsScroll(true)

        //     }
        // }

        window.addEventListener('scroll', handleScroll);
        // if (heightY && heightY < pageHeight) {
        //     setIsScroll(false)
        // }
        // setPrevScroll(window.scrollY)
        // Убираем обработчик события скролла при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [heightY])
    return (
        <Element name='Home'>
            <div className={s.home}>

                <div className={classNames(s.text, { [s.bottomText]: heightY && heightY > pageHeight })}>
                    <div className={classNames(s.stripes)}>
                        <CirclesCanvas />
                    </div>
                    <h1 className={s.name}>HELLO, I'M OLEH</h1>
                    <p className={s.role}>Junior Front-end developer</p>
                    <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}

                    >
                        <img className={s.img} src="https://res.cloudinary.com/dztha3hpj/image/upload/v1706795706/free-arrow-down-icon-3101-thumb_ip4t0j.png" alt="" />
                    </Link>
                </div>

            </div>
        </Element>
    )
}
export default Home