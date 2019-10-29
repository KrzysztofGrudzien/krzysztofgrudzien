import React from 'react';
import styles from '../Sass/Components/Works.module.scss';
import criscode from '../assets/images/criscode.jpg';
import guessNumber from '../assets/images/guess-number.jpg';
import fishingAdventure from '../assets/images/fishing.jpg';
import hydrApp from '../assets/images/hydrapp.jpg';
import myDiaryGulp from '../assets/images/mydiary.png';
import simpleEditor from '../assets/images/simpleEditor.jpg';
import wtfForm from '../assets/images/wtfForm.jpg';
import wtfProgramTranning from '../assets/images/wtfProgramTranning.png';
import businessCard from '../assets/images/businessCard.jpg';
import defaultImage from '../assets/images/default.jpg';
import iconCode from '../assets/images/code-icon.svg';
import iconDemo from '../assets/images/demo-icon.svg';

// temporary preview of data
const data = [
    { id: 216506756, name: "fishing-adventure", image: fishingAdventure },
    { id: 209878758, name: "Game-Guess-Number", image: guessNumber },
    { id: 199216419, name: "hydrApp", image: hydrApp },
    { id: 214868831, name: "krzysztofgrudzien", image: criscode },
    { id: 194762825, name: "my-diary-gulp", image: myDiaryGulp },
    { id: 196483602, name: "simple-editor", image: simpleEditor },
    { id: 208912546, name: "the-laboratory", image: defaultImage },
    { id: 192948898, name: "personal-card", image: businessCard },
    { id: 193562233, name: "wtf-form", image: wtfForm },
    { id: 202035043, name: "wtf-program-tranning", image: wtfProgramTranning },
    { id: 202032923, name: "rest-api", image: defaultImage },
    { id: null, name: null }
]
const RepositoryList = props => {
    const checkUserId = () => {
        if (props.id === 216506756) {
            return fishingAdventure;
        } else if (props.id === 209878758) {
            return guessNumber
        } else if (props.id === 209878758) {
            return guessNumber
        } else if (props.id === 199216419) {
            return hydrApp
        } else if (props.id === 214868831) {
            return criscode
        } else if (props.id === 194762825) {
            return myDiaryGulp
        } else if (props.id === 196483602) {
            return simpleEditor
        } else if (props.id === 192948898) {
            return businessCard
        } else if (props.id === 193562233) {
            return wtfForm
        } else if (props.id === 202035043) {
            return wtfProgramTranning
        } else {
            return defaultImage
        }
    }
    return (
        <div className={styles.works__wrapper}>
            <img className={styles.works__image} src={checkUserId()} alt="criscode.pl website screenshot." />
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
                        <a href={props.html} className={styles.article__link} target="_blank">GitHub</a>
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
                    <li className={styles.works__item}>
                        <b>Stars:</b> {props.stars}
                    </li>
                    <li className={styles.works__item}>
                        <b>Followers:</b> {props.watchers}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RepositoryList;