import React from 'react';
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
                    <a href="#" className={styles.header__link}>get in touch</a>
                </div>
            </header>
        </>
    )
}

export default Header;