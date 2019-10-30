import React from 'react';
import styles from '../Sass/Components/Events.module.scss';
import wtfTeam from '../assets/images/wtfteam@2x.jpg';

const Events = () => {
    return (
        <main className={styles.main}>
            <section className={styles.events}>
                <div className={styles.events__hero}></div>
                <h1 className={styles.events__title}>Events</h1>
                <div className={styles.events__box}>
                    <article className={styles.article}>
                        <h2 className={styles.article__data}>14 - 15 September</h2>
                        <h3 className={styles.article__year}>2019</h3>
                    </article>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>HackYeah 2019
The biggest stationary hackathon in Europe!</h2>
                        <figure className={styles.figure}>
                            <img className={styles.figure__image} src={wtfTeam} alt="wtf team." />
                            <figcaption className={styles.figure__figcaption}>
                                <p className={styles.figure__description}>https://www.facebook.com/events/2395881610685005/
I was there and fought with the best programmers in Europe 😎 It was amazing adventure!</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Events;