import React from "react";
import ReactDOM from "react-dom";

import Login from './Login'

class App extends React.Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))