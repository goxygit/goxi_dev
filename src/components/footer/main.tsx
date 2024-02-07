import { Element } from 'react-scroll'
import s from './main.module.css'
const FooterComponent = () => {
    return (
        <Element name='Contacts'>
            <footer className={s.footer}>
                <ul className={s.ul}>
                    <li className={s.li}>
                        <a className={s.link} href="">
                            <img className={s.img} src="https://res.cloudinary.com/dztha3hpj/image/upload/v1706439059/github_iofjda.png" alt="" />
                        </a>
                    </li>
                </ul>
                <div className={s.cv}>
                    <p className={s.text}>CHECK MY RESUME!</p>
                    <a className={s.linkCV} href="">CHECK</a>
                </div>
            </footer>
        </Element>
    )
}
export default FooterComponent