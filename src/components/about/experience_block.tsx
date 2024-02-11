import classNames from 'classnames'
import { experience } from '../../store/data-slice'
import s from './main.module.css'
type propsType = {
    obj: experience
    currentPeriod: number | null
    setCurrentPeriod: (any: any) => void
    index: number
}
const ExperienceBlock = ({ index, obj, currentPeriod, setCurrentPeriod }: propsType) => {
    return (
        <div className={s.periodExperience}>
            <div className={classNames(s.experienceButton, { [s.active]: currentPeriod === index })}>
                <span className={s.text}>{obj.position}</span>
                <div className={s.dateAndImg}>
                    <span className={s.period}>{obj.period}</span>
                    <img className={s.plusButton} onClick={() => {
                        if (currentPeriod === index)
                            setCurrentPeriod(null)
                        else
                            setCurrentPeriod(index)
                    }} src={currentPeriod !== index ? `https://res.cloudinary.com/dztha3hpj/image/upload/v1707511022/52-523304_plus-sign-icon-png-plus-icon-png-transparent_hu9tuh.png`
                        : `https://res.cloudinary.com/dztha3hpj/image/upload/v1707581235/free-minus-icon-3108-thumb_rq02yb.png`} alt="plus" />
                </div>
            </div>
            <div className={classNames(s.containerInfo, { [s.visible]: currentPeriod === index })}>
                <div className={s.infoBlock}>
                    <div className={s.info}>
                        <div className={s.adresses}>
                            <img className={s.icon} src="https://res.cloudinary.com/dztha3hpj/image/upload/v1707510877/blue-location-icon-png-19_jglc0r.png" alt="location" />
                            <p className={s.adressesText}>
                                {obj.adresses}
                            </p>
                            <img className={s.icon} src={'https://res.cloudinary.com/dztha3hpj/image/upload/v1707510823/7471685_egs1ah.png'} alt="link" />
                            <a className={s.adressesLink} href={obj.web_site}>{obj.web_site}</a>
                        </div>
                        <p className={s.description}>
                            {obj.description}
                        </p>
                        <ul className={s.ul}>
                            {obj.tech.map((el) =>
                                <li className={s.li}>{el.name}</li>
                            )}
                        </ul>
                    </div>
                    <img className={s.logo} src={obj.logo} alt="" />
                </div>
            </div>


        </div>
    )
}
export default ExperienceBlock