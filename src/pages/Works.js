import React from 'react';
import styles from '../Sass/Components/Works.module.scss';
import criscode from '../assets/images/criscode.jpg';
import iconCode from '../assets/images/code-icon.svg';
import iconDemo from '../assets/images/demo-icon.svg';

const Works = () => {
    return (
        <main className={styles.main}>
            <section className={styles.works}>
                <div className={styles.works__hero}></div>
                <h1 className={styles.works__title}>Works</h1>
                <div className={styles.works__wrapper}>
                    <img className={styles.works__image} src={criscode} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Personal portfolio</h2>
                        <p className={styles.article__description}>Personal portfolio based on the React.js. The main concept is using a Create React App, React Router package and pure JS.</p>
                        <footer className={styles.article__footer}>
                            <div className={styles.article__demo}>
                                <img className={styles.article__icon} src={iconDemo} alt="icon preview." />
                                <a href="#" className={styles.article__link}>Launch</a>
                            </div>
                            <div className={styles.article__code}>
                                <img className={styles.article__icon} src={iconCode} alt="icon code." />
                                <a href="#" className={styles.article__link}>GitHub</a>
                            </div>
                        </footer>
                    </article>
                    <div className={styles.works__lists}>
                        <ul className={styles.works__list}>
                            <li className={styles.works__item}>
                                <b>Role:</b> Design, FrontEnd
                            </li>
                            <li className={styles.works__item}>
                                <b>Category:</b> Website
                            </li>
                            <li className={styles.works__item}>
                                <b>Client:</b> Personal Portfolio
                            </li>
                            <li className={styles.works__item}>
                                <b>Data:</b> October 2019
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.works__wrapper}>
                    <img className={styles.works__image} src={criscode} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>WTF Diary</h2>
                        <p className={styles.article__description}>Course diary completely based on pure HTML5, CSS3 and JS.</p>
                        <footer className={styles.article__footer}>
                            <div className={styles.article__demo}>
                                <img className={styles.article__icon} src={iconDemo} alt="icon preview." />
                                <a href="#" className={styles.article__link}>Launch</a>
                            </div>
                            <div className={styles.article__code}>
                                <img className={styles.article__icon} src={iconCode} alt="icon code." />
                                <a href="#" className={styles.article__link}>GitHub</a>
                            </div>
                        </footer>
                    </article>
                    <div className={styles.works__lists}>
                        <ul className={styles.works__list}>
                            <li className={styles.works__item}>
                                <b>Role:</b> Design, FrontEnd
                            </li>
                            <li className={styles.works__item}>
                                <b>Category:</b> Website
                            </li>
                            <li className={styles.works__item}>
                                <b>Client:</b> Personal Portfolio
                            </li>
                            <li className={styles.works__item}>
                                <b>Data:</b> October 2019
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.works__wrapper}>
                    <img className={styles.works__image} src={criscode} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>PWA - HYDRAPP</h2>
                        <p className={styles.article__description}>Progressive web application</p>
                        <footer className={styles.article__footer}>
                            <div className={styles.article__demo}>
                                <img className={styles.article__icon} src={iconDemo} alt="icon preview." />
                                <a href="#" className={styles.article__link}>Launch</a>
                            </div>
                            <div className={styles.article__code}>
                                <img className={styles.article__icon} src={iconCode} alt="icon code." />
                                <a href="#" className={styles.article__link}>GitHub</a>
                            </div>
                        </footer>
                    </article>
                    <div className={styles.works__lists}>
                        <ul className={styles.works__list}>
                            <li className={styles.works__item}>
                                <b>Role:</b> Design, FrontEnd
                            </li>
                            <li className={styles.works__item}>
                                <b>Category:</b> Website
                            </li>
                            <li className={styles.works__item}>
                                <b>Client:</b> Personal Portfolio
                            </li>
                            <li className={styles.works__item}>
                                <b>Data:</b> October 2019
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Works;