import React from "react";
import ReactDOM from "react-dom";

import Developer from "./Developer";

class App extends React.Component {
    render() {
        const developer = new Developer('Robert', 'Sabirov');
        developer.sayHi();
        return <div>
            <h1>Первое приложение на React на этом курсе</h1>
            <p>Hello React!</p>
            {developer.getMadeLabel()}
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))