import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Sass/Components/SubNavigation.module.scss';

const listLinks = [
    { number: "01", path: "/", name: "about me" },
    { number: "02", path: "/skills", name: "current skills" },
    { number: "03", path: "/roadmap", name: "my it roadmap" },
    { number: "04", path: "/works", name: "best works" },
    { number: "05", path: "/lab", name: "my lab" },
    { number: "06", path: "/events", name: "event's" },
    { number: "07", path: "/contact", name: "contact with me" }
]
const SubNavigation = () => {
    const links = listLinks.map(link => (
        <li key={link.number} className={styles.nav__item}>
            <NavLink to={link.path}>{link.number}</NavLink><span className={styles.nav__linkDescription}>{link.name}</span>
        </li>
    ))
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {links}
            </ul>
        </nav>
    )
}

export default SubNavigation;