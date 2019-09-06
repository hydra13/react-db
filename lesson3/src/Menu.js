import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu(e) {
        const hamburger = e.target;
        const navbarMenu = this.myRef.current;
        hamburger.classList.toggle('is-active');
        navbarMenu.classList.toggle('is-active');
    }

    render() {
        const leftItems = this.props.leftItems.map((item, idx) => {
            return <a className="navbar-item" key={idx} href={item.href}>{item.title}</a>
        })
        const rightItems = this.props.rightItems.map((item, idx) => {
            return <a className="navbar-item" key={idx} href={item.href}>{item.title}</a>
        })
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={this.toggleMobileMenu}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div ref={this.myRef} className="navbar-menu">
                    <div className="navbar-start">
                        {leftItems}
                    </div>
                    <div className="navbar-end">
                        {rightItems}
                    </div>
                </div>
            </nav>
        )
    }
}

Menu.defaultProps = {
    leftItems: [{ title: 'Home', href: '/' }, { title: 'Documentation', href: '/docs' }],
    rightItems: [{ title: 'Log in', href: '/login' }]
}

Menu.propTypes = {
    leftItems: PropTypes.array.isRequired,
    rightItems: PropTypes.array.isRequired
}

export default Menu;