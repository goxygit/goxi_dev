import { Element } from 'react-scroll'
import s from './main.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
const FooterComponent = () => {
    const { links } = useSelector((state: RootState) => state.data.data)
    return (
        <Element name='Contacts'>
            <footer className={s.footer}>
                <ul className={s.ul}>
                    {links &&
                        links.map((el) => (
                            <li className={s.li}>
                                <a className={s.link} href={el.link}>
                                    <img className={s.img} src={el.img} alt="" />
                                </a>
                            </li>
                        ))
                    }

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