import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import AppComponent from "./components/App";

ReactDOM.render(
    <Router>
        <AppComponent />
    </Router>,
    document.getElementById('app')
)