import axios from 'axios'

const BASE_URL = "https://poc-shopping.herokuapp.com/"


const getByCategory = (id) => {
    return axios.get(BASE_URL + `categories/${id}`)
}

const getById = (id) => {
    return axios.get(BASE_URL + `products/${id}`)
}

const getAll = () => {
    return axios.get(BASE_URL + `products`)
}

const getByPagination = (pagination) => {
    let query = Object.entries(pagination).map(([key, val]) => `${key}=${val}`).join('&')
    return axios.get(BASE_URL + `products?` + query)
}

export default {
    getByCategory,
    getById,
    getAll,
    getByPagination
}