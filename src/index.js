// Import React + ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Import style sheets
import './index.css';

// Import Components
import Home from './Home';
import RouteOne from './RouteOne';
import RouteTwo from './RouteTwo';
import NotFound from './NotFound';

// inline js styles - nav
const nav = {
    position: 'fixed',
    bottom: '1em',
    left: 0,
    textAlign: 'left',
    fontSize: '0.66em'
}

// inline js styles - link
const link = {
    textDecoration: 'none',
    background: 'black',
    color: 'white',
    padding: '0 8px 0 8px'
}

const routing = (   
    <Router>
    {/* nav rendered here to show on all pages (must be outside of Switch) */}
    <Navigation color={ "dark" } /> 
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/route-1' component={RouteOne} />
            <Route path='/route-2' component={RouteTwo} />
            <Route component={ NotFound } />
        </Switch>
    </Router>
)

// Call the render DOM method to render the app - entry point to HTML
ReactDOM.render(routing, document.getElementById('root'));

