import { Box, Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from 'redux/actions/posts'
import { AddPost } from 'pages/PostList/AddPost'
import PostItem from './PostItem'

function PostList() {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const posts = useSelector((state) => state.posts.postsData)

    return (
        <>
            <h1>PostList</h1>
            <Box display="flex" justifyContent="center">
                <Button onClick={() => setShow(!show)} variant="contained">
                    Add Post
                </Button>
            </Box>
            {show && <AddPost />}
            <Grid container spacing={5}>
                {posts.map((post) => (
                    <PostItem key={post.id} {...post} />
                ))}
            </Grid>
        </>
    )
}

export default PostList
