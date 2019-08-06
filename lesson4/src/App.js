import React from "react";
import ReactDOM from "react-dom";

import './App.scss';
import Login from './Login';
import Menu from './Menu';
import Blog from './components/Blog';
import WelcomeModal from './components/WelcomeModal';

class App extends React.Component {
    render() {
        // const leftItems = [{ title: 'Home', href: '/' }, { title: 'Documentation', href: '/docs' }, { title: 'About', href: '/about' }];
        // const rightItems = [{ title: 'Log in', href: '/login' }];
        return (
            <div>
                {/* <Menu leftItems={leftItems} rightItems={rightItems} />
                <Login /> */}
                <Blog />
                <WelcomeModal />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))