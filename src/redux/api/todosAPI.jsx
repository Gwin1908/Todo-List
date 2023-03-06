import dataFetch from 'utils/axios'

const todosAPI = {
    fetchTodos() {
        return dataFetch.get('/todos')
    },
}

export default todosAPI
