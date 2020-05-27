import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import Logout from '../Logout/Logout';

function Navbar() {
   return (
      <nav className="mainNavbar">
         <Link to="/"><img className="navbarLogo" src={Logo} alt="Logo" /></Link>
         <ul className="navbarLinks">
            <Link style={{ textDecoration: 'none' }} to="/"><li>Home</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/products"><li>Products</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/contact"><li>Contact</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/adminPage"><li>Admin Page</li></Link>
         </ul>
         <Link style={{ textDecoration: 'none' }} to="/userPage"><i id="userPageButton" className="fas fa-user"></i></Link>
         <Logout />
      </nav>
   );
}

export default Navbar;