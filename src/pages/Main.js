import React from 'react';
import styles from '../Sass/Components/Main.module.scss'
import iPad from '../assets/images/portrait2x.png';
const Main = () => {
    return (
        <main className={styles.main}>
            <section className={styles.author}>
                <h1 className={styles.author__title}>Hi there,<br />
                    I'm Krzysztof </h1>
                <p className={styles.author__description}>
                    I’m an aspiring <b>FrontEnd Developer</b> and absolutly crazy about fishing and cooking. Moreover I am intrested in<b>UX/UI</b> and web design of general meaning.
                </p>
                <p className={styles.author__description}>
                    You might be interested in checking the list of my skills. Don’t forget to  have a glimpse of my projects. Currently I’m looking for a new challenges so if you have one - please contact with me.
                </p>
                <p className={styles.author__email}><a className={styles.author__link} href="mailto:krzysztof.grudzien.fed@gmail.com">krzysztof.grudzien.fed@gmail.com</a></p>
            </section>
            <aside className={styles.image}>
                <img className={styles.image__decoration} src={iPad} alt="ipad image" />
            </aside>
        </main>
    )
}

export default Main;