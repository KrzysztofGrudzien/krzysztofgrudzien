import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Sass/Components/Header.module.scss';
import logo from '../assets/images/criscode.svg';
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__title}>
                    <img className={styles.header__logo} src={logo} alt="author website logo" />
                </h1>
                <div className={styles.header__contact}>
                    <NavLink to={'/contact'} className={styles.header__link}>get in touch</NavLink>
                </div>
            </header>
        </>
    )
}

export default Header;