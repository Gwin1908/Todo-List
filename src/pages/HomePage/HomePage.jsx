import React from 'react'
import styles from './HomePage.module.css'

export default function HomePage() {
    return (
        <div className={styles.intro}>
            <h1>Home</h1>
            <p className={styles.introDescr}>
                This project is made for fetching data from&nbsp;
                <a
                    className={styles.link}
                    href="https://jsonplaceholder.typicode.com/"
                >
                    &#34;https://jsonplaceholder.typicode.com/&#34;
                </a>
                , including posts, todos, list of users and their detailed
                information. Also you can add posts and modify todos.
            </p>
        </div>
    )
}
