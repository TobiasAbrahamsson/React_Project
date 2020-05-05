import React, { Component } from 'react';
import AdminLogin from './Admin-Login/Admin-Login';
import AdminRouter from './Admin-Router';

class AdminPage extends Component {

   state = { user: null }

   render() {
      return (
         <div> {!this.state.user}
            {!this.state.user && <AdminLogin userCredential={(e) => this.setState({ user: e.email })} />}
            {this.state.user && <AdminRouter />}
         </div>
      )
   }
}
export default AdminPage;