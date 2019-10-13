import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

const UsersList = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users/').then(response => {
            setUsers(response.data);
        })
    },[])

    const usersForRendering = users.map(user => {
        return <User key={user.id} {...user} />
    })
    return (
        <div>
            <h1>Пользователи</h1>
            {usersForRendering}
        </div>
    )
}
export default UsersList;