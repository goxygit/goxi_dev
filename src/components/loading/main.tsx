import s from './main.module.scss'
export const Loader = () => {
    return (
        <div className={s.container}>
            <div className={s.loader}></div>
        </div>
    )
}
