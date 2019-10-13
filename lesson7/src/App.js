import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AppComponent from "./components/App";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppComponent />
        </Router>
    </Provider>,
    document.getElementById('app')
)