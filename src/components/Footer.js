import React from 'react';
import styles from '../Sass/Components/Footer.module.scss';
import logo from '../assets/images/criscode.svg';
import iconFacebok from '../assets/images/facebook.svg';
import iconLinkedin from '../assets/images/linkedin.svg';
import iconGithub from '../assets/images/github.svg';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__social}>
                <a className={styles.footer__linkSocial} href="https://www.facebook.com/criscodepl/" border="0" target="_blank"><img src={iconFacebok} /></a>
                <a className={styles.footer__linkSocial} href="https://www.linkedin.com/in/criscode/" border="0" target="_blank"><img src={iconLinkedin} /></a>
                <a className={styles.footer__linkSocial} href="https://github.com/KrzysztofGrudzien" border="0" target="_blank"><img src={iconGithub} /></a>
            </div>
            <img className={styles.footer__logo} src={logo} alt="logo of author" />
            <p className={styles.footer__copyrights}>&copy; 2019
                <a className={styles.footer__link} href="http://criscode.pl" target="_blank"> Krzysztof Grudzień</a>. All right reserved.
            </p>
        </footer>
    )
}

export default Footer;