import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
   return (
      <nav className="adminNavbar">
         <ul>
            <Link style={{ textDecoration: 'none' }} to="/adminPage"><li>Profile</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/adminPage/addProduct"><li>Add Product</li></Link>
            <Link style={{ textDecoration: 'none' }} to="/adminPage/editProduct"><li>Edit Product</li></Link>
         </ul>
      </nav>
   );
}

export default AdminNavbar;