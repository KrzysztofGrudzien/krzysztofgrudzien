import React from 'react';
import styles from './Menu.module.scss';
const Menu = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <span className={styles.nav__number}>01</span>
                    <a href="#" className={styles.nav__link}>About</a>
                    <span className={styles.nav__linkDescription}>me</span>
                </li>
                <li className={styles.nav__item}>
                    <span className={styles.nav__number}>02</span>
                    <a href="#" className={styles.nav__link}>Skills</a>
                    <span className={styles.nav__linkDescription}>current</span>
                </li>
                <li className={styles.nav__item}>
                    <span className={styles.nav__number}>03</span>
                    <a href="#" className={styles.nav__link}>My It</a>
                    <span className={styles.nav__linkDescription}>roadmap</span>
                </li>
                <li className={styles.nav__item}>
                    <span className={styles.nav__number}>04</span>
                    <a href="#" className={styles.nav__link}>Works</a>
                    <span className={styles.nav__linkDescription}>best</span>
                </li>
                <li className={styles.nav__item}>
                    <span className={styles.nav__number}>05</span>
                    <a href="#" className={styles.nav__link}>lab</a>
                    <span className={styles.nav__linkDescription}>may</span>
                </li>
                <li className={styles.nav__item}>
                    <span className={styles.nav__number}>06</span>
                    <a href="#" className={styles.nav__link}>Event</a>
                    <span className={styles.nav__linkDescription}>'s</span>
                </li>
                <li className={styles.nav__item}>
                    <span className={styles.nav__number}>07</span>
                    <a href="#" className={styles.nav__link}>Contact</a>
                    <span className={styles.nav__linkDescription}>with me</span>
                </li>
            </ul>
        </nav>
    )
}

export default Menu; 