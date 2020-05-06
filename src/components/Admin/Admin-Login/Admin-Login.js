import React, { Component } from 'react';
import axios from 'axios';

class AdminLogin extends Component {

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
      axios
         .post('http://localhost:1337/auth/local', {
            identifier: e.target.elements.email.value,
            password: e.target.elements.password.value,
         })
         .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);

            this.props.userCredential(response.data.user)
         })
         .catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
         });
   }

   onSubmitRegister(e) {
      e.preventDefault();
      axios
         .post('http://localhost:1337/auth/local/register', {
            username: e.target.elements.username.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
         })
         .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);

            this.props.userCredential(response.data.user)
         })
         .catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
         });
   }

   render() {
      return (
         <div className="adminLogin">
            {this.state.condition &&
               <div>
                  <h1>Login</h1>
                  <form onSubmit={this.onSubmitLogin.bind(this)}>
                     <i id="loginEmailIcon" className="fas fa-envelope"></i>
                     <input type="email" name="email" placeholder="Email" spellCheck="false" />
                     <i id="loginPasswordIcon" className="fas fa-lock"></i>
                     <input className="loginPassword" type="password" name="password" placeholder="••••••••" />
                     <button>Login</button>
                  </form>
                  <button className="login" onClick={this.onClickRegister.bind(this)}>Don't have an account? <span className="buttonSpan">Sign up</span></button>
               </div>
            }

            {!this.state.condition &&
               <div>
                  <h1>Register</h1>
                  <form onSubmit={this.onSubmitRegister.bind(this)}>
                     <i id="registerUsernameIcon" className="fas fa-user"></i>
                     <input type="text" name="username" placeholder="Username" spellCheck="false" />
                     <i id="registerEmailIcon" className="fas fa-envelope"></i>
                     <input type="email" name="email" placeholder="Email" spellCheck="false" />
                     <i id="registerPasswordIcon" className="fas fa-lock"></i>
                     <input type="password" name="password" placeholder="Password" />
                     <button>Register</button>
                  </form>
                  <button className="register" onClick={this.onClickLogin.bind(this)}>Already have an account? <span className="buttonSpan">Log in</span></button>
               </div>
            }
         </div>
      )
   }
}

export default AdminLogin;