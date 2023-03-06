import { Checkbox, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { modifyTodo, toggleTodoComplete } from 'redux/reducers/todosSlice'
import styles from './TodoList.module.css'

function TodoItem({ id, completed, title }) {
    const dispatch = useDispatch()

    function handleChange(value) {
        dispatch(modifyTodo({ id, value }))
    }

    return (
        <div className={styles.todo} key={id}>
            <Checkbox
                defaultChecked={completed}
                onChange={() => dispatch(toggleTodoComplete({ id }))}
            />
            <TextField
                sx={{ paddingRight: `2rem` }}
                fullWidth
                id="standard-basic"
                variant="outlined"
                size="small"
                defaultValue={title}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default TodoItem
