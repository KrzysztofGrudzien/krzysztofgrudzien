import React from 'react';
import styles from '../Sass/Components/Lab.module.scss';
import hydrApp from '../assets/images/hydrapp.jpg';
import iconCode from '../assets/images/code-icon.svg';
import iconDemo from '../assets/images/demo-icon.svg';

const Lab = () => {
    return (
        <main className={styles.main}>
            <section className={styles.lab}>
                <div className={styles.lab__hero}></div>
                <h1 className={styles.lab__title}>Laboratory</h1>
                <div className={styles.lab__wrapper}>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>hydrAPP - PWA APP</h2>
                        <img className={styles.article__image} src={hydrApp} alt="" />
                        <ul className={styles.article__list}>
                            <li className={styles.article__item}><b>Role:</b> Design, FrontEnd </li>
                            <li className={styles.article__item}><b>Category:</b> PWA </li>
                            <li className={styles.article__item}><b>Data:</b> 2019-09-09 </li>
                            <li className={styles.article__item}><b>Technology:</b> CSS3, HTML5, JS</li>
                        </ul>
                        <p className={styles.article__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam tenetur sit in mollitia quisquam temporibus possimus nihil veritatis quod nesciunt, nisi quasi deserunt quos voluptate dolor earum sint veniam maxime?</p>
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
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>hydrAPP - PWA APP</h2>
                        <img className={styles.article__image} src={hydrApp} alt="" />
                        <ul className={styles.article__list}>
                            <li className={styles.article__item}><b>Role:</b> Design, FrontEnd </li>
                            <li className={styles.article__item}><b>Category:</b> PWA </li>
                            <li className={styles.article__item}><b>Data:</b> 2019-09-09 </li>
                            <li className={styles.article__item}><b>Technology:</b> CSS3, HTML5, JS</li>
                        </ul>
                        <p className={styles.article__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam tenetur sit in mollitia quisquam temporibus possimus nihil veritatis quod nesciunt, nisi quasi deserunt quos voluptate dolor earum sint veniam maxime?</p>
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
                </div>
            </section>
        </main>
    )
}

export default Lab;