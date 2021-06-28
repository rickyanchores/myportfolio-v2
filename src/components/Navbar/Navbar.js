import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo"><h1>Ricky A</h1></div>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="navlinks">
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
