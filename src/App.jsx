import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PostList, TodoList, UserList, HomePage } from 'pages'
import { Navigation } from 'components/Navigation'
import state from 'redux/store'
import { Container } from '@mui/material'
import 'app.css'

function App() {
    return (
        <>
            <Navigation />
            <Container>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                        <Route path="users/*" element={<UserList state={state} />}/>
                        <Route path="posts" element={<PostList state={state} />} />
                        <Route path="todo" element={<TodoList state={state} />} />
                </Routes>
            </Container>
        </>
    )
}

export default App
