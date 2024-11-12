// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">MyApp</h2>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
