import React, { Component } from "react";
import firebase from "../../Firebase/FirebaseConfig";

class UserLogin extends Component {

   //via props
   state = {
      condition: true,
      user: ""
   }

   onClickRegister() {
      this.setState({ condition: false })
   }

   onClickLogin() {
      this.setState({ condition: true })
   }

   onSubmitLogin(e) {
      e.preventDefault();

      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;

      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => this.props.userCredential(res.user.email))
   }

   onSubmitRegister(e) {
      e.preventDefault();

      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;

      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(res => this.props.userCredential(res.user.email))
   }

   render() {
      return (
         <div>
            {this.state.condition &&
               <div>
                  <h1>Login</h1>
                  <form onSubmit={this.onSubmitLogin.bind(this)}>
                     <input type="email" name="email" placeholder="Email" />
                     <input type="password" name="password" placeholder="Password" />
                     <button>Login</button>
                  </form>
                  <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button>
               </div>
            }

            {!this.state.condition &&
               <div>
                  <h1>Register</h1>
                  <form onSubmit={this.onSubmitRegister.bind(this)}>
                     <input type="email" name="email" placeholder="Email" />
                     <input type="password" name="password" placeholder="Password" />
                     <button>Register</button>
                  </form>
                  <button onClick={this.onClickLogin.bind(this)}>Already have an account?</button>
               </div>
            }
         </div>
      )
   }
}

export default UserLogin;