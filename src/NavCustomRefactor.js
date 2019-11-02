import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        {/* <div onClick={this.toggle}>x</div> */}
                        <br />
                        {/* <h4 style={{ color: 'white'}}>
                            React App
                    </h4> */}
                        <nav >
                            <div>
                                <Link to='/' onClick={this.toggle} className="link-menu">Home</Link>
                            </div>
                            <div>
                                <Link to='/route-1' onClick={this.toggle} className="link-menu">Route One</Link>
                            </div>
                            <div>
                                <Link to='/route-2' onClick={this.toggle} className="link-menu">Route Two</Link>
                            </div>
                            <div>
                                <Link to='/todo' onClick={this.toggle} className="link-menu">ToDo List</Link>
                            </div>
                            <div>
                                <Link to='/notfound' onClick={this.toggle} className="link-menu">404 Page</Link>
                            </div>
                        </nav>
                    </div>
                </nav>

                <div onClick={this.toggle} className={ this.state.active ? "nav-icon-active nav-icon" : "nav-icon" }>
                    Menu
                </div>
            </div>
        )
    }
}

export default CustomNavNF 