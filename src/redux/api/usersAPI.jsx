import dataFetch from 'utils/axios'

const usersAPI = {
    fetchUsers() {
        return dataFetch.get('/users')
    },
    fetchUsersAlbums(userId) {
        return dataFetch.get(`/users/${userId}/albums`)
    },
    fetchUsersPosts(userId) {
        return dataFetch.get(`/users/${userId}/posts`)
    },
    fetchUsersTodos(userId) {
        return dataFetch.get(`/users/${userId}/todos`)
    },
}

export default usersAPI
