import React from 'react';
import styles from '../Sass/Components/ITRoadMap.module.scss';
const ITRoadMap = () => {
    return (
        <main className={styles.main}>
            <section className={styles.roadmap}>
                <div className={styles.roadmap__hero}></div>
                <h1 className={styles.roadmap__title}>IT roadmap</h1>
                <div className={styles.roadmap__wrapper}>
                    <div className={styles.part__number}>
                        <span className={styles.part__numberText}>2018</span>
                    </div>
                    <section className={styles.part}>
                        <h2 className={styles.part__title}>Start programming</h2>
                        <p className={styles.part__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, maxime? Aut, iste. Iste atque in omnis fugiat maxime cupiditate perspiciatis voluptas voluptatem, quod tenetur et! Rerum quae alias libero labore!</p>
                    </section>
                    <section className={styles.part}>
                        <h2 className={styles.part__title}>WTF Course</h2>
                        <p className={styles.part__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, maxime? Aut, iste. Iste atque in omnis fugiat maxime cupiditate perspiciatis voluptas voluptatem, quod tenetur et! Rerum quae alias libero labore!</p>
                    </section>
                    <div className={styles.part__number}>
                        <span className={styles.part__numberText}>2020</span>
                    </div>
                    <section className={styles.part}>
                        <h2 className={styles.part__title}>React Course</h2>
                        <p className={styles.part__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, maxime? Aut, iste. Iste atque in omnis fugiat maxime cupiditate perspiciatis voluptas voluptatem, quod tenetur et! Rerum quae alias libero labore!</p>
                    </section>
                </div>
                <article className={styles.article}>
                    <h2 className={styles.article__title}>Why frontend?</h2>
                    <p className={styles.article__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi vero consectetur tempore deleniti quod! Nulla assumenda illo nobis nihil? Blanditiis illo eum minima molestiae rerum consequuntur possimus nemo magnam!</p>
                </article>
            </section>
        </main>
    )
}

export default ITRoadMap;