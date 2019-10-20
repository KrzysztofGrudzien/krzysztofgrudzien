import React from 'react';
import styles from '../Sass/Components/ErrorPage.module.scss';
const ErrorPage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.error}>
                <div className={styles.error__hero}></div>
                <h1 className={styles.error__title}>PAGE 404</h1>
            </section>
        </main>
    )
}

export default ErrorPage;