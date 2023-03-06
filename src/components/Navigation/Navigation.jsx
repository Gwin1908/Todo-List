import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <>
            <header className={styles.header}>
                <NavLink to="/users" className={styles.link}>
                    User
                </NavLink>
                <NavLink to="/posts" className={styles.link}>
                    Posts
                </NavLink>
                <NavLink to="/todo" className={styles.link}>
                    ToDo
                </NavLink>
            </header>
            <Outlet />
        </>
    )
}

export default Navigation
