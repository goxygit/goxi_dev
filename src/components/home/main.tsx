import { useEffect, useState } from 'react';
import s from './main.module.css'
import { Element, Link, animateScroll as scroll, scroller } from "react-scroll";
import CirclesCanvas from './circles';
import classNames from 'classnames';
const Home = () => {
    const [heightY, setHeightY] = useState<number>()

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        setHeightY(currentPosition);
    };
    const pageHeight = document.documentElement.clientHeight;
    useEffect(() => {
        setHeightY(window.scrollY)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [heightY])
    return (
        <Element name='Home'>
            <section className={s.home}>

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
                        duration={1000}

                    >
                        <img className={s.img} src="https://res.cloudinary.com/dztha3hpj/image/upload/v1706795706/free-arrow-down-icon-3101-thumb_ip4t0j.png" alt="" />
                    </Link>
                </div>

            </section>
        </Element>
    )
}
export default Home