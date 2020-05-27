import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import AdminPage from '../Admin/Admin-Page';
import FirebaseTest from '../Firebase/FirebaseTest';
import UserPage from '../User/User-Page';
import UserUpdateProfile from '../User/User-UpdateProfile/User-UpdateProfile';

import PageNotFound from '../PageNotFound/PageNotFound';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/products" exact component={Products} />
               <Route path="/contact" component={Contact} />
               <Route path="/adminPage" component={AdminPage} />
               <Route path="/firebaseTest" component={FirebaseTest} />
               <Route path="/userPage" exact component={UserPage} />
               <Route path="/userPage/updateProfile" component={UserUpdateProfile} />

               <Route component={PageNotFound} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
