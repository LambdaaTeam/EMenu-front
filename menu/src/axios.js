import axios from 'axios'


function getToken() {
    return localStorage.getItem('client_token')
}

export const api = axios.create({
    baseURL: 'https://api.emenu.psykka.xyz/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
    },
})
