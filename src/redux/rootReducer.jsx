import { combineReducers } from 'redux'
import postsSlice from './reducers/postsSlice'
import todosSlice from './reducers/todosSlice'
import usersSlice from './reducers/usersSlice'

export default combineReducers({
    posts: postsSlice,
    todos: todosSlice,
    users: usersSlice,
})
