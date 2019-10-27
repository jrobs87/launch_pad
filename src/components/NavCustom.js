import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class CustomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            state: 'closed'
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            open: !state.open
        }))
    }

    render() {
        const hidden = {
            height: '100vh',
            width: '14em',
            top: 0,
            right: '-14em',
            position: 'fixed',
            zIndex: 1000,
            transitionDuration: '0.22s',
            transitionTimingFunction: 'ease',
            transitionDelay: '0.10s',
            padding: '3em',
            opacity: 0,
            background: '#2E2F2F',
            color: '#A599B5',
            paddingTop: '6em' 
        }

        const visible = {
            height: '100vh',
            width: '14em',
            top: 0,
            right: 0,
            position: 'fixed',
            zIndex: 1000,
            transitionDuration: '0.22s',
            padding: '3em',
            transitionTimingFunction: 'ease',
            opacity: 0.96,
            background: '#2E2F2F',
            color: '#A599B5',
            paddingTop: '6em' 
        }

        const navIcon = {
            // margin: '3em',
            padding: 0,
            background: 'none',
            color: '#A599B5',
            border: 'none',
            position: 'fixed',
            top: '2em',
            right: '3em',
            zIndex: 1500
        }

        const navItem = {
            hidden: {
                opacity: 0,
                transitionDuration: '.11s',
                transitionDelay: '0s',
                color: '#CDDDDD',
                textDecoration: 'none',
                position: 'relative',
                right: '-1em'
            },
            active: {
                transitionDuration: '.22s',
                transitionDelay: '0.18s',
                opacity: 1,
                color: '#CDDDDD',
                textDecoration: 'none',
                position: 'relative',
                right: '0em'
            }
        }

        const navModal = {
        hidden: {
            zIndex: -500,
            height: '100vh',
            width: '100%',
            background: 'white',
            opacity: 0,
            position: 'fixed',
            transitionDuration: '.11s',
            transitionDelay: '0.22s',
            top: 0
        },
        active: {
            zIndex: 500,
            opacity: 0.88,
            background: 'white',
            height: '100vh',
            width: '100%',
            position: 'fixed',
            transitionDuration: '0s',
            top: 0
        }
    }

        // let status = 'closed';
        let navStyle = hidden;
        let nav = navItem.hidden;
        let navModalStyle = navModal.hidden;

        if (this.state.open === true) {
            // status = 'open';
            navStyle = visible;
            nav = navItem.active;
            navModalStyle = navModal.active;
        } else {
            // status = 'closed';
            navStyle = hidden;
            nav = navItem.hidden;
            navModalStyle = navModal.hidden;
        }

        return (
            <div>
                <Button onClick={this.toggle} style={navIcon}>
                    MENU
                </Button>
                <nav style={navStyle}>
                    {/* <h1>
                        MENU
                    </h1> */}
                    <div>
                        <Link to='/' onClick={this.toggle} style={nav}>Home</Link>
                    </div>
                    <div>
                        <Link to='/route-1' onClick={this.toggle} style={nav}>Route One</Link>
                    </div>
                    <div>
                        <Link to='/route-2' onClick={this.toggle} style={nav}>Route Two</Link>
                    </div>
                    <div>
                        <Link to='/todo' onClick={this.toggle} style={nav}>ToDo List</Link>
                    </div>
                    <div>
                        <Link to='/customNav' onClick={this.toggle} style={nav}>Custom Nav</Link>
                    </div>
                    <div>
                        <Link to='/notfound' onClick={this.toggle} style={nav}>404 Page</Link>
                    </div>
                </nav>

                <div style={ navModalStyle }>
                    
                </div>
            </div>
            
        )
    }
}

export default CustomNav;