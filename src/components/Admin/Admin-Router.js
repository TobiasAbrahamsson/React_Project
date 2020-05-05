import React from 'react';
import AdminNavbar from './Admin-Navbar';
import AdminProfile from './Admin-Profile';
import AdminAddProduct from './Admin-AddProduct';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

function AdminRouter() {
   return (
      <Router>
         <div>
            <AdminNavbar />
            <Switch>
               <Route path="/adminPage" exact component={AdminProfile} />
               <Route path="/adminPage/addProduct" component={AdminAddProduct} />
            </Switch>
         </div>
      </Router>
   );
}

export default AdminRouter;