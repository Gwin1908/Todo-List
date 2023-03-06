import axios from 'axios'

const dataFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

dataFetch.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response.status === 404) {
            window.location.href = '*'
        }
        return Promise.reject(error)
    }
)

export default dataFetch
