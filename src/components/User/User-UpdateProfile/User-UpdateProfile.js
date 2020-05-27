import React, { Component } from "react";
import firebase from "../../Firebase/FirebaseConfig";

class UserUpdateProfile extends Component {

   state = {
      inputValueUsername: "",
      inputValueEmail: ""
   }

   inputChangeUsername(e) {
      this.setState({ inputValueUsername: e.target.value });
   }

   inputChangeEmail(e) {
      this.setState({ inputValueEmail: e.target.value });
   }

   async componentDidMount() {
      const param = (this.props.location.params);

      this.setState({ inputValueUsername: param.username });
      this.setState({ inputValueEmail: param.email });
      console.log(param.username)
      console.log(param.email)
   }

   onSubmitUpdateProfile(e) {

      e.preventDefault();
      const email = e.target.elements.email.value;
      const displayName = e.target.elements.username.value;

      var user = firebase.auth().currentUser;
      alert("Profile info updated");

      //update profile
      user.updateProfile({
         displayName: displayName
      }).then(function () {
         // Update successful.
      }).catch(function (error) {
         // An error happened.
      });

      //update email
      user.updateEmail({ email }).then(function () {
         // Update successful.
      }).catch(function (error) {
         // An error happened.
      });

      //send email verification
      user.sendEmailVerification().then(function () {
         // Email sent.
      }).catch(function (error) {
         // An error happened.
      });
   }

   render() {
      return (
         <div>
            <h1>Update</h1>
            <form onSubmit={this.onSubmitUpdateProfile.bind(this)}>
               username:
               <input type="text" name="username" value={this.state.inputValueUsername} onChange={this.inputChangeUsername.bind(this)} />
               <br />
               email:
               <input type="text" name="email" value={this.state.inputValueEmail} onChange={this.inputChangeEmail.bind(this)} />
               <br />
               <button>Save Changes</button>
            </form>
         </div>
      )
   }
}

export default UserUpdateProfile;