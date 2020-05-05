import React, { Component } from 'react';

class AdminProfile extends Component {
   render() {
      return (
         <div>
            <h1>Admin Profile</h1>
            <h2>{this.props.userData}</h2>
         </div>
      )
   }
}

export default AdminProfile;