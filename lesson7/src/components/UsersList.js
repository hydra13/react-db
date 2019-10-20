import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { fetchUsers } from '../actions/usersActions';

class UsersList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.users) {
            return null;
        }
        const users = this.props.users.map(user => {
            return <User key={user.id} {...user} />
        })
        return (
            <div>
                <h1>Пользователи</h1>
                {this.props.fetching && <h3>Loading...</h3>}
                {!this.props.fetching && users}
            </div>
        )
    }
    componentDidMount() {
        if (this.props.users && 
            this.props.users.length === 0) {
                this.props.dispatch(fetchUsers());
        }
    }

}

function mapStateToProps(state) {
    return {
        users: state.users.users,
        fetching: state.users.fetching
    }
}

export default connect(mapStateToProps)(UsersList);
