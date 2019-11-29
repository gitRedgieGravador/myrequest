import axios from 'axios'

const BASE_URL = 'http://localhost:3232';

export function getRequest() {
    return axios.post(`${BASE_URL}/addRequest`, response)
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message))
}