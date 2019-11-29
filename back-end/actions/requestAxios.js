import axios from 'axios';

const BASE_URL = 'http://localhost:3232';

export function addRequest(data) {
    return axios.post(`${BASE_URL}/addRequest`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message))
}

export function getRequest() {
    return axios.post(`${BASE_URL}/getRequest/`)
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function updateRequest(data, id) {
    return axios.put(`${BASE_URL}/updateRequest/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function deleteRequest(id) {
    return axios.delete(`${BASE_URL}/deleteRequest/${id}`)
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

//Analytics
export function numRejected() {
    return axios.get(`${BASE_URL}/numRejected/`)
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function numApproved() {
    return axios.get(`${BASE_URL}/numApproved/`)
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function numUnread() {
    return axios.get(`${BASE_URL}/numUnread/`)
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function mostRequest() {
    return axios.get(`${BASE_URL}/mostRequest/`)
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

