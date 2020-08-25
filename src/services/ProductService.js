import axios from 'axios'

const BASE_URL = "http://localhost:3001/"


const getByCategory = (id) => {
    return axios.get(BASE_URL + `cats/${id}`)
}

const getById = (id) => {
    return axios.get(BASE_URL + `product/${id}`)
}

export default {
    getByCategory,
    getById
}