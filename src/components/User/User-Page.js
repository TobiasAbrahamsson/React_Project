import React, { Component } from "react";
import UserProfile from "./User-Profile/User-Profile";
import UserLogin from "./User-Login/User-Login";
import firebase from "../Firebase/FirebaseConfig";

class UserPage extends Component {
   state = {
      user: null || localStorage.getItem("user")

   }

   //life-cycle-metod 
   //render() -> compononentDidMount-> uppdateras state-> render() igen

   componentDidMount() {
      firebase.auth().onAuthStateChanged(
         user => {
            if (user) {
               this.setState({ user: user.email, displayName: user.displayName })
            }
         }
      )
   }

   //const enfunction = ()=> { }
   //varje ändras state renderas componentet igen.
   render() {
      const loggedIn = this.state.user || localStorage.getItem("user");
      return (
         <div>
            {!loggedIn ?
               <UserLogin
                  userCredential={(user) => {
                     this.setState({ user: user.email })
                     localStorage.setItem("user", this.state.user)
                  }}

                  showDisplayName={(username) => {
                     //console.log("displyaname from parent" + username)
                     firebase.auth().onAuthStateChanged((user) => {
                        user.updateProfile({
                           displayName: username
                        }).then(() => {
                           this.setState({
                              displayName: user.displayName
                           })
                           console.log("display name " + this.state.displayName)
                        })
                     })
                  }}
               />
               :
               <UserProfile userData={this.state.user || this.state.displayName} />
            }
         </div>
      )
   }
}

export default UserPage;