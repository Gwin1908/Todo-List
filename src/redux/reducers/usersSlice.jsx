import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    usersData: [],
    usersAlbums: [],
    usersPosts: [],
    usersTodos: [],
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        showLoader(state) {
            state.isLoading = true
        },
        hideLoader(state) {
            state.isLoading = false
        },
        receiveUsers(state, action) {
            state.usersData = action.payload
        },
        receiveUsersAlbums(state, action) {
            state.usersAlbums = action.payload
        },
        receiveUsersPosts(state, action) {
            state.usersPosts = action.payload
        },
        receiveUsersTodos(state, action) {
            state.usersTodos = action.payload
        },
    },
})

export const {
    hideLoader,
    showLoader,
    receiveUsers,
    receiveUsersAlbums,
    receiveUsersPosts,
    receiveUsersTodos,
} = usersSlice.actions

export default usersSlice.reducer
