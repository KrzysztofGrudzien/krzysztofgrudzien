import React from 'react';
import styles from '../Sass/Components/Menu.module.scss';
const Menu = () => {
    return (
        <>
            <div className={styles.switcher}>
                <span className={styles.switcher__text}>MENU</span>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <sup className={styles.nav__number}>01</sup>
                        <a href="#" className={styles.nav__link}>About</a>
                        <sup className={styles.nav__linkDescription}>me</sup>
                    </li>
                    <li className={styles.nav__item}>
                        <sup className={styles.nav__number}>02</sup>
                        <a href="#" className={styles.nav__link}>Skills</a>
                        <sup className={styles.nav__linkDescription}>current</sup>
                    </li>
                    <li className={styles.nav__item}>
                        <sup className={styles.nav__number}>03</sup>
                        <a href="#" className={styles.nav__link}>My It</a>
                        <sup className={styles.nav__linkDescription}>roadmap</sup>
                    </li>
                    <li className={styles.nav__item}>
                        <sup className={styles.nav__number}>04</sup>
                        <a href="#" className={styles.nav__link}>Works</a>
                        <sup className={styles.nav__linkDescription}>best</sup>
                    </li>
                    <li className={styles.nav__item}>
                        <sup className={styles.nav__number}>05</sup>
                        <a href="#" className={styles.nav__link}>lab</a>
                        <sup className={styles.nav__linkDescription}>may</sup>
                    </li>
                    <li className={styles.nav__item}>
                        <sup className={styles.nav__number}>06</sup>
                        <a href="#" className={styles.nav__link}>Event</a>
                        <sup className={styles.nav__linkDescription}>'s</sup>
                    </li>
                    <li className={styles.nav__item}>
                        <sup className={styles.nav__number}>07</sup>
                        <a href="#" className={styles.nav__link}>Contact</a>
                        <sup className={styles.nav__linkDescription}>with me</sup>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu; 