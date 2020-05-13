import React, { Component } from "react";
import firebase from "../../Firebase/FirebaseConfig"

class UserProfile extends Component {

   logOut() {
      localStorage.clear();
      window.location.reload(false);
      firebase.auth().signOut();
   }

   render() {
      return (
         <div>
            Profile info {this.props.userData}
            <button onClick={this.logOut.bind(this)}> Logout</button>
         </div>
      )
   }
}

export default UserProfile;