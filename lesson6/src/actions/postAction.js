import axios from 'axios';
import dispatcher from '../dispatcher';

export function getPosts() {
    axios.get('http://jsonplaceholder.typicode.com/posts/').then(response => {
        console.log('axios.get')
        const action = {
            type: 'GET_POSTS',
            data: response.data
        }
        dispatcher.dispatch(action);
    });
}