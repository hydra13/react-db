import React from 'react';
import PropTypes from 'prop-types'
import './WelcomeModal.scss';

class WelcomeModal extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

WelcomeModal.defaultProps = {
    title: 'WelcomeModal'
}

WelcomeModal.propTypes = {
    title: PropTypes.string.isRequired
}

export default WelcomeModal;