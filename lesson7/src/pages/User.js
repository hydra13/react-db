import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserProfile from '../components/User';
import { fetchUsers } from '../actions/usersActions';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.users) {
            return null
        }
        const userId = +this.props.match.params.userId;
        const user = this.props.users.find(user => user.id === userId);
        return (
            <div>
                {user && <UserProfile {...user} />}
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

export default connect(mapStateToProps)(User);