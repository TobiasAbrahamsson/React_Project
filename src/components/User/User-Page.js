import React, { Component } from "react";
import UserProfile from "./User-Profile/User-Profile";
import UserLogin from "./User-Login/User-Login";

class UserPage extends Component {

   state = {
      user: null || localStorage.getItem("user"),
   }

   render() {
      const loggedIn = this.state.user || localStorage.getItem("user");
      return (
         <div>
            {!loggedIn ?
               <UserLogin userCredential={(user) => {
                  this.setState({ user: user.email })
                  localStorage.setItem("user", this.state.user)
               }} />
               :
               <UserProfile userData={this.state.user} />
            }
         </div>
      )
   }
}

export default UserPage; 