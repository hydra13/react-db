import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com'

export function fetchComments() {
    return {
        type: 'FETCH_COMMENTS',
        payload: axios.get(`${url}/comments/`).then(response => response.data)
    }
}