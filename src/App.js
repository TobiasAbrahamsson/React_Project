import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Bookings from './Bookings';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Router>
            <div className="App">
               <Navbar />
               <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/bookings" exact component={Bookings} />
               </Switch>
            </div>
         </Router>
      </div >
   );
}

export default App;
