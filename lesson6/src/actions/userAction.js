import axios from 'axios';
import dispatcher from '../dispatcher';

export function getUsers() {
    axios.get('http://jsonplaceholder.typicode.com/users/').then(response => {
        const action = {
            type: 'GET_USERS',
            data: response.data
        }
        dispatcher.dispatch(action);
    });
}