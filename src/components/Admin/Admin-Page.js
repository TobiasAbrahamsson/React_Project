import React, { Component } from 'react';
import AdminLogin from './Admin-Login/Admin-Login';
import AdminRouter from './Admin-Router';

class AdminPage extends Component {
   state = {
      user: null || localStorage.getItem("user"),
      jtw: null
   }

   render() {
      const loggedIn = this.state.user || localStorage.getItem("jwt");
      return (
         <div>
            {!loggedIn ?
               (<AdminLogin userCredential={(e, jwt) => {
                  this.setState({ user: e.email, jwt: jwt })
                  localStorage.setItem("jwt", this.state.jwt)
                  localStorage.setItem("user", this.state.user)
               }} />)
               :
               (<AdminRouter userData={this.state.user} />)
            }
         </div>
      )
   }
}

export default AdminPage;