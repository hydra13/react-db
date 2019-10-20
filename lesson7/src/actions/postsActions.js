import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com'

export function fetchPosts() {
    return {
        type: 'FETCH_POSTS',
        payload: axios.get(`${url}/posts/`).then(response => response.data)
    }
}