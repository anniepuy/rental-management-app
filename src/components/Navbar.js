import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <h2 className="navbar-logo">Property Manager</h2>
            <ul className="navbar-links">
                <li><a href="#overview">Overview</a></li>
                <li><a href="#properties">Properties</a></li>
                <li><a href="#tenants">Tenants</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#logout">Logout</a></li>
            </ul>
    </nav>
  );
}

export default Navbar;