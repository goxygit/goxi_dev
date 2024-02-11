import { Element } from 'react-scroll'
import s from './main.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
const FooterComponent = () => {
    const { links, about } = useSelector((state: RootState) => state.data.data)
    const email = 'example@example.com'; // Замените на ваш адрес электронной почты

    const handleClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <Element name='Contacts'>
            <footer className={s.footer}>
                <ul className={s.ul}>
                    {links &&
                        links.map((el) => (
                            <li className={s.li}>
                                <a className={s.link} href={el.link}>
                                    <img className={s.img} src={el.img} alt={el.name} />
                                </a>
                            </li>
                        ))
                    }
                    <li onClick={handleClick} className={s.mail}>
                        <img className={s.imgMail} src={'https://res.cloudinary.com/dztha3hpj/image/upload/v1707394639/666162_bvgndr.png'} alt="Mail" />
                    </li>
                </ul>
                <div className={s.cv}>
                    <p className={s.text}>CHECK MY RESUME!</p>
                    <a className={s.linkCV} href={about.CV}>CHECK</a>
                </div>
            </footer>
        </Element>
    )
}
export default FooterComponent