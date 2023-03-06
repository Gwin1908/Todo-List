import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from 'redux/actions/todos'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

function TodoList() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.todosData)

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    return (
        <>
            <h1>ToDo List</h1>
            <div className={styles.todos}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
        </>
    )
}

export default TodoList
