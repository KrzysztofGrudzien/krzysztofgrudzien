import React from 'react';
import styles from '../Sass/Components/Contact.module.scss';
import author from '../assets/images/author.png';
import iconFacebok from '../assets/images/facebook.svg';
import iconLinkedin from '../assets/images/linkedin.svg';
import iconGithub from '../assets/images/github.svg';

const Contact = () => {
    return (
        <main className={styles.main}>
            <section className={styles.contact}>
                <div className={styles.contact__hero}></div>
                <h1 className={styles.contact__title}>contact</h1>
                <section className={styles.contact__descriptions}>
                    <aside className={styles.contactImage}>
                        <img className={styles.contactImage__image} src={author} alt="author image. " />
                        <h2 className={styles.contactImage__title}>Krzysztof Grudzień</h2>
                        <span className={styles.contactImage__profession}> - junior frontend developer - </span>
                        <div className={styles.social}>
                            <a className={styles.social__link} href="https://www.facebook.com/criscodepl/" border="0" target="_blank"><img className={styles.social__icons} src={iconFacebok} alt="icon facebook." /></a>
                            <a className={styles.social__link} href="https://www.linkedin.com/in/criscode/" border="0" target="_blank"><img className={styles.social__icons} src={iconLinkedin} alt="icon linkedin." /></a>
                            <a className={styles.social__link} href="https://github.com/KrzysztofGrudzien" border="0" target="_blank"><img className={styles.social__icons} src={iconGithub} alt="icon github." /></a>
                        </div>
                    </aside>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>About me</h2>
                        <p className={styles.article__description}>I’m an aspiring <b>FrontEnd Developer</b> and absolutly crazy about fishing and cooking. Moreover I am intrested in <b>UX/UI</b> and web design of general meaning.</p>
                        <div className={styles.contactData}>
                            <table className={styles.table}>
                                <tr>
                                    <td>Full Name:</td>
                                    <td>Krzysztof Grudzień</td>
                                </tr>
                                <tr>
                                    <td>Location: </td>
                                    <td>Warsaw</td>
                                </tr>
                                <tr>
                                    <td>Phone: </td>
                                    <td>667-664-336 or 797-457-237</td>
                                </tr>
                                <tr>
                                    <td>E-mail: </td>
                                    <td>krzysztof.grudzien.fed@gmail.com</td>
                                </tr>
                            </table>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}

export default Contact;