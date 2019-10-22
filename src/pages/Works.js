import React from 'react';
import styles from '../Sass/Components/Works.module.scss';
import criscode from '../assets/images/criscode.jpg';
import mydiary from '../assets/images/mydiary.png';
import hydrapp from '../assets/images/hydrapp.jpg';
import fishing from '../assets/images/fishing.jpg';
import guessNumber from '../assets/images/guess-number.jpg';
import pigGame from '../assets/images/piggame.jpg';
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
                        <p className={styles.article__description}>Personal portfolio based on the React.js. The main concept is using a Create React App, React Router, CSS Module, CSS3 and pure JS.</p>
                        <footer className={styles.article__footer}>
                            <div className={styles.article__demo}>
                                <img className={styles.article__icon} src={iconDemo} alt="icon preview." />
                                <a href="https://krzysztofgrudzien.github.io/krzysztofgrudzien/" className={styles.article__link} target="_blank">Launch</a>
                            </div>
                            <div className={styles.article__code}>
                                <img className={styles.article__icon} src={iconCode} alt="icon code." />
                                <a href="https://github.com/KrzysztofGrudzien/krzysztofgrudzien" className={styles.article__link} target="_blank">GitHub</a>
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
                    <img className={styles.works__image} src={mydiary} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>WTF Diary</h2>
                        <p className={styles.article__description}>The main aim of this course is learning knowledge about fundamental skills for junior frontend developer as a person who applies for a job. Thanks to that many people will have solid skills before to go to the huge frontend world where every day many programmers create something new for any.</p>
                        <footer className={styles.article__footer}>
                            <div className={styles.article__demo}>
                                <img className={styles.article__icon} src={iconDemo} alt="icon preview." />
                                <a href="https://krzysztofgrudzien.github.io/my-diary-gulp/" className={styles.article__link} target="_blank">Launch</a>
                            </div>
                            <div className={styles.article__code}>
                                <img className={styles.article__icon} src={iconCode} alt="icon code." />
                                <a href="https://github.com/KrzysztofGrudzien/my-diary-gulp" className={styles.article__link} target="_blank">GitHub</a>
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
                                <b>Client:</b> Personal project
                            </li>
                            <li className={styles.works__item}>
                                <b>Data:</b> July 2019
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.works__wrapper}>
                    <img className={styles.works__image} src={hydrapp} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>PWA - HYDRAPP</h2>
                        <p className={styles.article__description}>The main aim of this project is creating Progressive web application using localStorage as a databases. In this case, I dived into JS a much deeper. I tried to connect the local database (localStorage) with design and animations creating a  dynamic simulation of the app. </p>
                        <footer className={styles.article__footer}>
                            <div className={styles.article__demo}>
                                <img className={styles.article__icon} src={iconDemo} alt="icon preview." />
                                <a href="https://krzysztofgrudzien.github.io/hydrApp/" className={styles.article__link} target="_blank">Launch</a>
                            </div>
                            <div className={styles.article__code}>
                                <img className={styles.article__icon} src={iconCode} alt="icon code." />
                                <a href="https://github.com/KrzysztofGrudzien/hydrApp" className={styles.article__link} target="_blank">GitHub</a>
                            </div>
                        </footer>
                    </article>
                    <div className={styles.works__lists}>
                        <ul className={styles.works__list}>
                            <li className={styles.works__item}>
                                <b>Role:</b> Design, FrontEnd
                            </li>
                            <li className={styles.works__item}>
                                <b>Category:</b> PWA
                            </li>
                            <li className={styles.works__item}>
                                <b>Client:</b> Personal project
                            </li>
                            <li className={styles.works__item}>
                                <b>Data:</b> August 2019
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.works__wrapper}>
                    <img className={styles.works__image} src={fishing} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Fishing Adventures</h2>
                        <p className={styles.article__description}>Landing Page</p>
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
                                <b>Category:</b> Landing Page
                            </li>
                            <li className={styles.works__item}>
                                <b>Client:</b> Personal project
                            </li>
                            <li className={styles.works__item}>
                                <b>Data:</b> November 2019
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.works__wrapper}>
                    <img className={styles.works__image} src={guessNumber} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Guess Number</h2>
                        <p className={styles.article__description}>React.js game</p>
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
                    <img className={styles.works__image} src={pigGame} alt="criscode.pl website screenshot." />
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Pig Game</h2>
                        <p className={styles.article__description}>React.js game</p>
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