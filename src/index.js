// Import React + ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Import style sheets
import './index.css';

// Import Components
import App from './App';
import RouteOne from './RouteOne';
import RouteTwo from './RouteTwo';

const nav = {
    position: 'fixed',
    top: 0,
    textAlign: 'left'
}

const link = {
    textDecoration: 'none',
    background: 'lime',
    color: 'black',
    padding: '0 8px 0 8px'
}

const routing = (
    <Router>
        <Route exact path='/' component={ App } />
        <Route path='/route-1' component={ RouteOne } />
        <Route path='/route-2' component={ RouteTwo } />

        {/* // Temp Nav */}
        <div style={ nav }>
            <ul>
                <Link style={ link } to='/'>Home</Link>
            </ul>
            <ul>
                <Link style={ link } to='/route-1'>Route One</Link>
            </ul>
            <ul>
                <Link style={ link } to='/route-2'>Route Two</Link>
            </ul>
        </div>
    </Router>
)

// Call the render DOM method to render the app - entry point to HTML
ReactDOM.render(routing, document.getElementById('root'));

