import React from 'react';
import PropTypes from 'prop-types'
import './WelcomeModal.scss';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };
        this.toggleVisible = this.toggleVisible.bind(this);
    }
    toggleVisible(e) {
        this.setState(prevState => ({ isVisible: !prevState.isVisible }));
    }
    componentDidMount() {
        this.setState({ isVisible: true })
    }
    render() {
        const { title, content } = this.props;
        const { isVisible } = this.state;
        return (
            <div>
                <div className={`modal ${isVisible ? "is-active" : ""}`}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">{title}</p>
                            <button className="delete" aria-label="close" onClick={this.toggleVisible}></button>
                        </header>
                        <section className="modal-card-body">
                            {content}
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button" onClick={this.toggleVisible}>Cancel</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

WelcomeModal.defaultProps = {
    title: 'WelcomeModal',
    content: ''
}

WelcomeModal.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default WelcomeModal;