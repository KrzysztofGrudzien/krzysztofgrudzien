import React from 'react';
import styles from '../Sass/Components/ITRoadMap.module.scss';
const ITRoadMap = () => {
    return (
        <main className={styles.main}>
            <section className={styles.roadmap}>
                <div className={styles.roadmap__hero}></div>
                <h1 className={styles.roadmap__title}>IT roadmap</h1>
                <div className={styles.timeline}>
                    <ul className={styles.timeline__list}>
                        <li className={styles.timeline__item}>
                            <article className={styles.article}>
                                <h2 className={styles.article__title}>Hobby</h2>
                                <p className={styles.article__description}>Here, I didn't suppose I want to be a programmer. I've started learning HTML, CSS, JS, PHP, MYSQL, ACTION SCRIPT, JAVA, CMS like WORDPRESS and many different languages. I didn't mention I've started using graphics programs like Adobe CS, Gimp etc, but ... . Many times I had to stop my learning and started again. My personal life prevented continouse learning. In short, the main thing I've learnt for those years - don't give up and don't use many languages and tools before you master the next one.</p>
                            </article>
                            <div className={styles.time}>
                                <h3 className={styles.time__title}>to summer 2017</h3>
                            </div>
                        </li>
                        <li className={styles.timeline__item}>
                            <article className={styles.article}>
                                <h2 className={styles.article__title}>FrontEnd or BackEnd</h2>
                                <p className={styles.article__description}> Next fight! I thought about it a lot. I've started learning JAVA and HTML, CSS, JS in the same time. The choose was very easy. Backend is not for me. I have to see my works in action. I love design and interaction. My projects have to live and people seeing it have to say - o f... It's look great. That's way I've chosen frontend. I've started using many courses from EDUWEB.PL and UDEMY.COM. because only what I did before it was only watching and collecting them on my disk.</p>
                                <h3 className={styles.article__titleList}>Chosen topics</h3>
                                <ul className={styles.article__list}>
                                    <li className={styles.article__item}>Learning BEM</li>
                                    <li className={styles.article__item}>How Flex Box and Grid works</li>
                                    <li className={styles.article__item}>Basic concept of JS</li>
                                    <li className={styles.article__item}>What is it GIT</li>
                                    <li className={styles.article__item}>Bootstrap and other frameworks</li>
                                    <li className={styles.article__item}>Adobe CC - PS, Ai</li>
                                    <li className={styles.article__item}>UX/UI</li>
                                    <li className={styles.article__item}>HTML5, CSS3, SASS</li>
                                    <li className={styles.article__item}>Task Runners</li>
                                </ul>
                            </article>
                            <div className={styles.time}>
                                <h3 className={styles.time__title}>to summer 2018</h3>
                            </div>
                        </li>
                        <li className={styles.timeline__item}>
                            <article className={styles.article}>
                                <h2 className={styles.article__title}>WTF: What the frontend</h2>
                                <p className={styles.article__description}>It's a 12-week practical course learning beginner adept of programming many useful skills about frontend knowledge. If you want to know how the knowlegde path looks like <a href="https://cotenfrontend.pl/#program-szkolenia" className={styles.article__link} target="_blank"> click this link</a>
                                </p>
                                <h3 className={styles.article__titleList}>Chosen topics</h3>
                                <ul className={styles.article__list}>
                                    <li className={styles.article__item}>BEM</li>
                                    <li className={styles.article__item}>JS ES6+</li>
                                    <li className={styles.article__item}>Flex Box and Grid</li>
                                    <li className={styles.article__item}>JSON and REST API</li>
                                    <li className={styles.article__item}>CSS animations and SVG</li>
                                    <li className={styles.article__item}>GIT, PWA, WCAG, OpenGraph</li>
                                    <li className={styles.article__item}>Node.js, NPM, GULP</li>
                                    <li className={styles.article__item}>Deploy</li>
                                </ul>
                            </article>
                            <div className={styles.time}>
                                <h3 className={styles.time__title}>May 2019</h3>
                            </div>
                        </li>
                        <li className={styles.timeline__item}>
                            <article className={styles.article}>
                                <h2 className={styles.article__title}>React Course</h2>
                                <p className={styles.article__description}>It's a 12-week practical course learning much more advanced adept of programming. If you want to know how the knowlegde path looks like <a href="https://kursreacta.pl/" className={styles.article__link} target="_blank"> click this link</a></p>
                                <h3 className={styles.article__titleList}>Chosen topics</h3>
                                <ul className={styles.article__list}>
                                    <li className={styles.article__item}>Components</li>
                                    <li className={styles.article__item}>Forms and styles</li>
                                    <li className={styles.article__item}>Create React App</li>
                                    <li className={styles.article__item}>Testing App - JEST, TDD</li>
                                    <li className={styles.article__item}>Library integration</li>
                                    <li className={styles.article__item}>REST API, Authorization</li>
                                    <li className={styles.article__item}>Hooks</li>
                                    <li className={styles.article__item}>Advance Patterns</li>
                                    <li className={styles.article__item}>Redux</li>
                                    <li className={styles.article__item}>Deploy App</li>
                                </ul>
                            </article>
                            <div className={styles.time}>
                                <h3 className={styles.time__title}>November 2019</h3>
                            </div>
                        </li>
                        <li className={styles.timeline__item}>
                            <article className={styles.article}>
                                <h2 className={styles.article__title}>Every Day Life</h2>
                                <p className={styles.article__description}>What can I say. I am very happy I am here. I try to explore frontend/webdesign areas and expand my knowledge.</p>
                                <h3 className={styles.article__titleList}>Chosen topics</h3>
                                <ul className={styles.article__list}>
                                    <li className={styles.article__item}>React.js</li>
                                    <li className={styles.article__item}>JavaScript ES5,6,7,8,9...</li>
                                    <li className={styles.article__item}>WordPress</li>
                                    <li className={styles.article__item}>Adobe XD / Figma</li>
                                    <li className={styles.article__item}>CSS3</li>
                                    <li className={styles.article__item}>Animations</li>
                                    <li className={styles.article__item}>Webpack</li>
                                    <li className={styles.article__item}>GIT</li>
                                </ul>
                            </article>
                            <div className={styles.time}>
                                <h3 className={styles.time__title}>to 20.. ?</h3>
                            </div>
                        </li>
                        <div className={styles.timeline__clearFix}></div>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default ITRoadMap;