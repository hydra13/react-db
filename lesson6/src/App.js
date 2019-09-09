import React from "react";
import ReactDOM from "react-dom";

// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import AppComponent from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Router>
        <AppComponent />
    </Router>,
    document.getElementById('app')
)