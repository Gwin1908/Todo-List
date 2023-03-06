import {
    receiveUsers,
    hideLoader,
    showLoader,
    receiveUsersAlbums,
    receiveUsersPosts,
    receiveUsersTodos,
} from 'redux/reducers/usersSlice'

import usersAPI from 'redux/api/usersAPI'

export const getUsers = () => async (dispatch) => {
    try {
        dispatch(showLoader())
        const res = await usersAPI.fetchUsers()
        dispatch(receiveUsers(res))
        console.log(res)
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(hideLoader())
    }
}

export const getUserTabs = (userId) => async (dispatch) => {
    try {
        dispatch(showLoader())
        const userAlbums = await usersAPI.fetchUsersAlbums(userId)
        dispatch(receiveUsersAlbums(userAlbums))
        const userPosts = await usersAPI.fetchUsersPosts(userId)
        dispatch(receiveUsersPosts(userPosts))
        const userTodos = await usersAPI.fetchUsersTodos(userId)
        dispatch(receiveUsersTodos(userTodos))
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(hideLoader())
    }
}
