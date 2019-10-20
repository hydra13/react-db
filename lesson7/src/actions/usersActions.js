import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com'

export function fetchUsers() {
    return {
        type: 'FETCH_USERS',
        payload: axios.get(`${url}/users/`).then(response => response.data)
    }
}