import React from 'react';
import '../css/nav.css'
import {Switch, Route} from "react-router";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav id="navbar">
                <div className="container">
                    <h1 className="navLogo">
                    <img className="navLogo" src='./imgs/complex_nbiphu.jpg'></img>
                    </h1>
                    <ul>
                        <li><NavLink to="/" exact> Home</NavLink></li>
                        <li><NavLink to="/music" exact> Music</NavLink></li>
                        <li><a>Complex</a></li>
                        <li><NavLink to="/shoes" exact> Shoes</NavLink></li>
                        <li><NavLink to="/clothes" >Style</NavLink></li>
                        <li><NavLink to="/contact" exact>Contact Us</NavLink> </li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}
export default Nav;