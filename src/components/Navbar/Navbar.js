import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';

function Navbar() {
   return (
      <nav className="mainNavbar">
         <Link to="/"><img className="navbarLogo" src={Logo} alt="Logo" /></Link>
         <ul className="navbarLinks">
            <Link style={{ textDecoration: 'none' }} to="/"><li>Home</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/products"><li>Products</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/bookings"><li>My Bookings</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/adminPage"><li>Admin Page</li></Link>
         </ul>
      </nav>
   );
}

export default Navbar;