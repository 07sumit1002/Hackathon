import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './supplie/Logo final.png';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img className='logoimg' src={Logo} alt='' />
      </div>
      <ul className="nav-links">
        <li><Link to="/Destination">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/About">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
