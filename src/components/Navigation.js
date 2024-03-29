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
class Menu extends React.Component {
    state = {
        isActive: true
    }

    handleToggleMenu = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        const links = listLinks.map(link => (
            <li key={link.number} className={styles.nav__item}>
                <span className={styles.nav__number}>{link.number}</span>
                <NavLink to={link.path} className={styles.nav__link}>{link.name}</NavLink>
                <span className={styles.nav__linkDescription}>{link.prefix}</span>
            </li>
        ))
        return (
            <>
                <div className={styles.switcher} onClick={this.handleToggleMenu}>
                    <span className={styles.switcher__text}>{!this.state.isActive ? "Close" : "Menu"}</span>
                </div>
                <nav
                    className={this.state.isActive ? `${styles.nav}` : `${styles.nav} ${styles.slideDown}`}>
                    <ul className={styles.nav__list}>
                        {links}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Menu; 