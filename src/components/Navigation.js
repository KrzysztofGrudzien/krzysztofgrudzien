import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Sass/Components/Navigation.module.scss';

const listLinks = [
    { number: "01", path: "/", name: "about", prefix: "me" },
    { number: "02", path: "/skills", name: "skills", prefix: "current" },
    { number: "03", path: "/roadmap", name: "my it", prefix: "roadmap" },
    { number: "04", path: "/works", name: "works", prefix: "best" },
    { number: "05", path: "/lab", name: "lab", prefix: "my" },
    { number: "06", path: "/events", name: "event", prefix: "'s" },
    { number: "07", path: "/contact", name: "contact", prefix: "with me" }
]
const Menu = () => {
    const links = listLinks.map(link => (
        <li key={link.number} className={styles.nav__item}>
            <sup className={styles.nav__number}>{link.number}</sup>
            <NavLink to={link.path} className={styles.nav__link}>{link.name}</NavLink>
            <sup className={styles.nav__linkDescription}>{link.prefix}</sup>
        </li>
    ))
    return (
        <>
            <div className={styles.switcher}>
                <span className={styles.switcher__text}>MENU</span>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    {links}
                </ul>
            </nav>
        </>
    )
}

export default Menu; 