import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.png';

function Navbar() {
   return (
      <nav>
         <Link to="/"><img className="navbar-logo" src={Logo} alt="Logo" /></Link>
         <ul className="navbar-links">
            <Link style={{ textDecoration: 'none' }} to="/"><li>Home</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/bookings"><li>My Bookings</li></Link>
         </ul>
      </nav>
   );
}

export default Navbar;