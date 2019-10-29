import React, { Component } from 'react';
import styles from '../Sass/Components/Works.module.scss';
import RepositoryList from '../components/RepositoryList';

const API = "https://api.github.com/users/krzysztofgrudzien/repos";
class Works extends Component {
    state = {
        data: [],
        isLoaded: false
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data,
                    isLoaded: true
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        const data = this.state.data;
        return (
            <main className={styles.main}>
                <section className={styles.works}>
                    <div className={styles.works__hero}></div>
                    <h1 className={styles.works__title}>Works</h1>
                    {data.map(repo => (
                        <RepositoryList
                            key={repo.id}
                            id={repo.id}
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            homepage={repo.homepage}
                            html={repo.html_url}
                            updated={repo.updated_at.slice(0, 10)}
                            login={`${repo.owner.login.slice(0, 9)} ${repo.owner.login.slice(9)}`}
                            stars={repo.stargazers_count}
                            watchers={repo.watchers_count}
                        />
                    ))}
                </section>
            </main>
        )
    }

}

export default Works;