import axios from 'axios'

const BASE_URL = "https://poc-shopping.herokuapp.com/"


const getAll = () => {
    return axios.get(BASE_URL + `categories`)
}

const getById = (id) => {
    return axios.get(BASE_URL + `products/${id}`)
}

export default {
    getById,
    getAll
}