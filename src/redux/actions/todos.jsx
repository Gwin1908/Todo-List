import { receiveTodos, hideLoader, showLoader } from 'redux/reducers/todosSlice'

import todosAPI from 'redux/api/todosAPI'

export const getTodos = () => async (dispatch) => {
    try {
        dispatch(showLoader())
        const res = await todosAPI.fetchTodos()
        dispatch(receiveTodos(res))
        console.log(res)
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(hideLoader())
    }
}
