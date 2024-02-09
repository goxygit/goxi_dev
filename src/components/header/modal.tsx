import { Link } from 'react-scroll'
import s from './main.module.css'
import { links } from './main'
import classNames from 'classnames'
const Modal = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={classNames(s.modal, { [s.modalOpen]: isOpen })}>
            <ul className={s.linksModal}>
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
        </div>
    )
}
export default Modal