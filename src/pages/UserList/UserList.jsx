import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, getUserTabs } from 'redux/actions/users'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import styles from './UserList.module.css'
import UserDetails from './UserDetails'

function UserList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const [userDetail, setUserDetail] = useState({})

    const users = useSelector((state) => state.users.usersData)

    const handleClick = (u) => {
        const userIdValue = u.currentTarget.attributes.userid.value
        dispatch(getUserTabs(userIdValue))
        const userDet = users.find((user) => user.id === +userIdValue)
        return userDet
    }

    return (
        <>
            <h1>Users</h1>
            <div className={styles.users}>
                {users.map((user) => (
                    <Link
                        to={`${user.id}`}
                        className={styles.user}
                        key={user.id}
                        userid={user.id}
                        onClick={(u) => {
                            setUserDetail(handleClick(u))
                        }}
                    >
                        <p>{user.username}</p>
                        <p>{user.name}</p>
                    </Link>
                ))}
            </div>
            <Outlet />
            <Routes>
                <Route
                    path=":userid/*"
                    element={<UserDetails {...userDetail} />}
                />
            </Routes>
        </>
    )
}

export default UserList
