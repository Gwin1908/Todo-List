import dataFetch from 'utils/axios'

const postsAPI = {
    fetchPosts() {
        return dataFetch.get('/posts')
    },
    postPost(newPost) {
        return dataFetch.post('./posts', newPost)
    },
}

export default postsAPI
