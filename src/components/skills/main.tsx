import { useState } from 'react'
import s from './main.module.css'
import classNames from 'classnames'
import { useSpring, animated } from 'react-spring'
import { Element } from 'react-scroll'
const technologies = [
    {
        name: 'HTML',
        color: 'rgb(235, 107, 52)',
        description: "HTML is a markup language for creating web pages. It's like an invisible architect that defines the structure of your page. You use tags to tell the browser how to display your content. For example, <p> for paragraphs, <h1> for headings, and so on."
    },
    {
        name: 'CSS',
        color: 'rgb(50, 161, 230)',
        description: "CSS (Cascading Style Sheets) is like the fashion designer for your web pages. While HTML takes care of the structure, CSS adds the style and flair. It's the magic that makes your website look pretty and polished."
    },
    {
        name: 'SCSS',
        color: 'rgb(230, 41, 164)',
        description: "SCSS (Sassy CSS) is like the stylish fashion designer's studio for your stylesheets. It's a superset of CSS that adds a touch of elegance and organization to your styling efforts."
    },
    {
        name: 'JS',
        color: 'rgb(230, 173, 41)',
        description: "JavaScript is like the lively performer in your web circus. It brings interactivity and dynamism to the static world of HTML and CSS. With JavaScript, your website becomes more than just a pretty face—it starts to dance!"
    },
    {
        name: 'TS',
        color: 'rgb(41, 132, 230)',
        description: "TypeScript is like the friendly mentor of JavaScript, adding a layer of structure and guidance to the coding party. Imagine JavaScript with a safety net – that's TypeScript!"
    },
    {
        name: 'React',
        color: 'rgb(42, 184, 245)',
        description: "React is like the master choreographer of your web performance, orchestrating a seamless and captivating user experience. It's a JavaScript library that takes the stage, bringing your web pages to life with elegance and efficiency."
    },
    {
        name: 'Next.js',
        color: 'rgb(0, 0, 0)',
        description: "Next.js is like the backstage magician that takes the complexity out of building robust and performant web applications. It's a React framework that streamlines the production, making your development process feel like a well-organized theater production."
    },
    {
        name: 'GitHub',
        color: 'rgb(5, 25, 33)',
        description: "GitHub is like the bustling collaborative workspace where developers and their code come together to create software magic. It's not just a platform; it's a vibrant community and version control system that turns coding into a social and efficient experience."
    },
    {
        name: 'FB',
        color: 'rgb(250, 195, 15)',
        description: "Firebase is like the magical backstage assistant that takes care of the server-side complexities, allowing developers to focus on creating amazing user experiences. It's a comprehensive platform that provides a variety of services to power the backend of your applications."
    },


]
const SkillsComponents = () => {
    const [targetTech, setTargetTech] = useState<null | typeof technologies[number]>(null)
    const descriptionAnimation = useSpring({
        opacity: targetTech ? 1 : 0,
        height: targetTech ? 'auto' : 0,
    });

    return (
        <Element name='Skills'>
            <div className={s.skillsBlock}>
                <h4 className={s.h4}>EXPERIENCE</h4>
                <p className={s.description}>I have been studying programming for about 2 years, and I want to learn much more than I know now.</p>
                <div className={s.techAndExp}>
                    <div className={s.tech}>
                        <div className={s.technologies}>
                            {
                                technologies.map((el, i) => (
                                    <div onClick={() => {
                                        if (targetTech === el)
                                            setTargetTech(null)
                                        else
                                            setTargetTech(el)

                                    }} className={classNames(s.techEl, { [s.targetTech]: targetTech === el })} style={{ backgroundColor: `${el.color}` }}>
                                        <span className={classNames(s.textInEl, { [s.rotateText]: targetTech === el })}>{el.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            targetTech &&
                            <animated.div style={descriptionAnimation} className={s.descriptionTech}>
                                <p>{targetTech.description}</p>
                            </animated.div>

                        }
                    </div>
                    <div className={s.experience}>
                        <h5 className={s.h5}>WHERE I GAINED EXPERIENCE</h5>
                        <a href="https://junfolio.top/">
                            <img src="https://res.cloudinary.com/dztha3hpj/image/upload/v1706820021/logo_vlva8p.svg" alt="" />
                        </a>
                    </div>
                </div>

            </div >
        </Element>

    )
}
export default SkillsComponents