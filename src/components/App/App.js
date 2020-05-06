import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Bookings from '../Bookings/Bookings';
import AdminPage from '../Admin/Admin-Page';

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
               <Route path="/bookings" component={Bookings} />
               <Route path="/adminPage" exact component={AdminPage} />

               <Route component={PageNotFound} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
