import { useEffect, useState } from 'react';
import s from './main.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import classNames from 'classnames';
const links = [
    {
        name: "About",
    },
    {
        name: "Skills",
    },
    {
        name: "Project",
    },
    {
        name: "Contacts",

    },
]
const Header = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [activeLink, setActiveLink] = useState('');

    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Проверка, находится ли скролл в самом низу
        if (scrollY + windowHeight >= documentHeight) {
            setActiveLink('lastSection');
        } else {
            // Сброс активного элемента, если не в самом низу
            setActiveLink('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={classNames(s.header, { [s.head]: !isAtTop })}>
            <span className={s.dev}>Medichi</span>
            <ul className={s.links}>
                {
                    links.map((el) => (
                        <li className={s.li}>
                            <Link activeClass={s.active}
                                to={el.name}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className={s.link}
                            >
                                {el.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </header>
    )
}
export default Header