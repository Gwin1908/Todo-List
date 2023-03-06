import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    todosData: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        showLoader(state) {
            state.isLoading = true
        },
        hideLoader(state) {
            state.isLoading = false
        },
        receiveTodos(state, action) {
            state.todosData = action.payload
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todosData.find(
                (todo) => todo.id === action.payload.id
            )
            toggledTodo.completed = !toggledTodo.completed
        },
        modifyTodo(state, action) {
            const toggledTodo = state.todosData.find(
                (todo) => todo.id === action.payload.id
            )
            toggledTodo.title = action.payload.value
        },
    },
})

export const {
    receiveTodos,
    hideLoader,
    showLoader,
    toggleTodoComplete,
    modifyTodo,
} = todosSlice.actions

export default todosSlice.reducer
