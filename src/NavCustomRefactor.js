import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import './NavCustom.css';

class CustomNavNF extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            classList: ['nav-modal']
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            active: !state.active
        }));

        console.log('updating state...')
    }

    render() {
        console.log(`Menu rendered with active state: ${this.state.active}.`);

        return (
            <div>
                <div className={this.state.active ? "nav-modal-active nav-modal" : "nav-modal"} onClick={this.toggle}>
                    {/* nothing to see here - literally */}
                </div>
                <nav className={this.state.active ? "nav-menu-active nav-menu" : "nav-menu"}>

                    <div className={this.state.active ? "link-active link" : "link"}>
                        <nav >
                            <ul>
                     
                                <li>
                                    <Link to='/' onClick={this.toggle} className="link-menu">Home</Link>
                                </li>
                                <li>
                                    <Link to='/route-1' onClick={this.toggle} className="link-menu">Route One</Link>
                                </li>
                                <li>
                                    <Link to='/route-2' onClick={this.toggle} className="link-menu">Route Two</Link>
                                </li>
                                <li>
                                    <Link to='/todo' onClick={this.toggle} className="link-menu">ToDo List</Link>
                                </li>
                                <li>
                                    <Link to='/notfound' onClick={this.toggle} className="link-menu">404 Page</Link>
                                </li>
                                <br />
                                {/* <li>
                                  <span onClick={this.toggle} className="link-menu" style ={{ color: '#08A4BD'}}>Nevermind</span>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </nav>

                <div onClick={this.toggle} className="nav-icon">
                    <div className="nav-icon-item">
                        Menu
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomNavNF 