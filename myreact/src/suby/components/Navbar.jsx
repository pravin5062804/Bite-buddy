import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='./src/assests/logo.png' alt="Bite Buddy Logo" />
      </div>
      <div className="head">
        <h1>BITEbuddy</h1>
      </div>
    <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search search-icon"></i>
      </div>

      <ul className="navbar-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;