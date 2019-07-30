import React from 'react';
import PropTypes from 'prop-types'
import './Login.scss';

class Login extends React.Component {
    render() {
        const { loginLink } = this.props
        return <form action={loginLink} method="POST">

            <div className="field">
                <label className="label">Login</label>
                <div className="control">
                    <input className="input" name="login" type="text" placeholder="Text input" />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-link">Login</button>
                </div>
            </div>
        </form>
    }
}

Login.defaultProps = {
    loginLink: '/login'
}

Login.propTypes = {
    loginLink: PropTypes.string.isRequired
}

export default Login;