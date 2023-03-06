import { receivePosts, hideLoader, showLoader } from 'redux/reducers/postsSlice'

import postsAPI from 'redux/api/postsAPI'

export const getPosts = () => async (dispatch) => {
    try {
        dispatch(showLoader())
        const res = await postsAPI.fetchPosts()
        dispatch(receivePosts(res))
        console.log(res)
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(hideLoader())
    }
}

export const sendPost = (post) => async () => {
    try {
        const res = await postsAPI.postPost(post)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
