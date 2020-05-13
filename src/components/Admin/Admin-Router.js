import React, { Component } from 'react';
import AdminNavbar from './Admin-Navbar/Admin-Navbar';
import AdminProfile from './Admin-Profile';
import AdminAddProduct from './Admin-AddProduct/Admin-AddProduct';
import AdminEditProduct from './Admin-EditProduct/Admin-EditProduct';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

class AdminRouter extends Component {
   state = {
      loggedIn: null || localStorage.getItem("jwt")
   }

   render() {
      const loggedIn = localStorage.getItem("jwt");
      return (
         <Router>
            {loggedIn ?
               <div>
                  < AdminNavbar />
                  <Switch>
                     <Route path="/adminPage" exact component={AdminProfile} />
                     <Route path="/adminPage/addProduct" component={AdminAddProduct} />
                     <Route path="/adminPage/editProduct" component={AdminEditProduct} />
                  </Switch>
               </div>
               :
               <div>
                  <h1>You are not loged in!</h1>
               </div>
            }
         </Router >
      );
   }
}

export default AdminRouter;