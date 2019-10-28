import React from 'react';
import styles from '../Sass/Components/Works.module.scss';
import criscode from '../assets/images/criscode.jpg';
import iconCode from '../assets/images/code-icon.svg';
import iconDemo from '../assets/images/demo-icon.svg';
const RepositoryList = props => {
    return (
        <div className={styles.works__wrapper}>
            <img className={styles.works__image} src={criscode} alt="criscode.pl website screenshot." />
            <article className={styles.article}>
                <h2 className={styles.article__title}>{props.name}</h2>
                <p className={styles.article__description}>{props.description}</p>
                <footer className={styles.article__footer}>
                    <div className={styles.article__demo}>
                        <img className={styles.article__icon} src={iconDemo} alt="icon preview." />
                        <a href={props.homepage} className={styles.article__link} target="_blank">Launch</a>
                    </div>
                    <div className={styles.article__code}>
                        <img className={styles.article__icon} src={iconCode} alt="icon code." />
                        <a href={props.html_url} className={styles.article__link} target="_blank">GitHub</a>
                    </div>
                </footer>
            </article>
            <div className={styles.works__lists}>
                <ul className={styles.works__list}>
                    <li className={styles.works__item}>
                        <b>Role:</b> Design, FrontEnd
                                        </li>
                    <li className={styles.works__item}>
                        <b>Language:</b>{props.language ? props.language : "No data found"}
                    </li>
                    <li className={styles.works__item}>
                        <b>Author:</b> {props.login}
                    </li>
                    <li className={styles.works__item}>
                        <b>Last update:</b> {props.updated}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RepositoryList;