import React from 'react';
import styles from '../Sass/Components/Skills.module.scss';

const listWorkingKnowledge = [
    { name: "Semantic HTML5" },
    { name: "FlexBox" },
    { name: "CSS Grid" },
    { name: "Markdown" },
    { name: "JS: localStorage" },
    { name: "Figma" },
    { name: "Adobe XD, Ps, Ai" },
    { name: "Forms" },
    { name: "Sass" },
    { name: "DOM Manipulation" },
    { name: "WordPress" },
    { name: "BEM" },
    { name: "CSS Modules" },
    { name: "Slack" },
    { name: "Trello" },
]

const listKnowSomething = [
    { name: "React.js" },
    { name: "ES6+" },
    { name: "CSS Animations" },
    { name: "Working API" },
    { name: "PWA" },
    { name: "Git" },
    { name: "Accesibility" },
    { name: "Optimalization" },
    { name: "NPM" },
    { name: "Gulp" },
    { name: "Bootstrap" },
    { name: "Webpack" }
]

const listToLearn = [
    { name: "Advance React.js concept" },
    { name: "Vue.js" },
    { name: "GraphQL" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Databases" },
    { name: "Advance Webpack concept" },
    { name: "Gatsby" },
    { name: "React Native or Flutter" },
    { name: "Advance JS Concept" },
    { name: "Advance Git Concept" },
    { name: "Data Visualization" },
    { name: "NPM Script" },
    { name: "Websockets" },
    { name: "Canvas & WebGL" },
    { name: "JS Animation Libraries" },
    { name: "Electron.js" },
    { name: "Server Side Rendering" },
    { name: "Write Plugins" },
]

const listCurrentLearning = [
    { name: "React.js" },
    { name: "CSS Animations" },
    { name: "ES6+" },
    { name: "REST API" },
    { name: "Webdesign" },
    { name: "UX/UI" },
]
const Skills = () => {
    const itemsWorkingKnowledge = listWorkingKnowledge.map(item => (
        <li key={item.name} className={styles.skills__item}>
            {item.name}
        </li>
    ));

    const itemsKnowSomething = listKnowSomething.map(item => (
        <li key={item.name} className={styles.skills__itemViolet}>
            {item.name}
        </li>
    ));

    const itemsToLearn = listToLearn.map(item => (
        <li key={item.name} className={styles.skills__itemBlue}>
            {item.name}
        </li>
    ));

    const itemsCurrentLearning = listCurrentLearning.map(item => (
        <li key={item.name} className={styles.skills__itemYellow}>
            {item.name}
        </li>
    ));

    return (
        <main className={styles.main}>
            <section className={styles.skills}>
                <div className={styles.skills__hero}></div>
                <h1 className={styles.skills__title}>Skills</h1>
                <div className={styles.skills__box}>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Working knowledge</h2>
                    </article>
                    <div className={styles.skills__listsWrapper}>
                        <ul className={styles.skills__lists}>
                            {itemsWorkingKnowledge}
                        </ul>
                    </div>
                </div>
                <div className={styles.skills__box}>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Know something about</h2>
                    </article>
                    <div className={styles.skills__listsWrapper}>
                        <ul className={styles.skills__lists}>
                            {itemsKnowSomething}
                        </ul>
                    </div>
                </div>
                <div className={styles.skills__box}>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Want to learn</h2>
                    </article>
                    <div className={styles.skills__listsWrapper}>
                        <ul className={styles.skills__lists}>
                            {itemsToLearn}
                        </ul>
                    </div>
                </div>
                <div className={styles.skills__box}>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>Current learning</h2>
                    </article>
                    <div className={styles.skills__listsWrapper}>
                        <ul className={styles.skills__lists}>
                            {itemsCurrentLearning}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Skills;