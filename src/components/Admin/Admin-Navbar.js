import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
   return (
      <div>
         <hr />
         <nav>
            <ul className="navbar-links">
               <Link style={{ textDecoration: 'none' }} to="/adminPage"><li>Profile</li></Link>
               <Link style={{ textDecoration: 'none' }} to="/adminPage/addProduct"><li>Add Product</li></Link>
            </ul>
         </nav>
      </div>
   );
}

export default AdminNavbar;