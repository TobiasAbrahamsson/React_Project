import React, { Component } from 'react';
import firebase from "../Firebase/FirebaseConfig";
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import axios from 'axios';

class Products extends Component {
   state = {
      items: [],
      user: "",
      name: "",
      email: "",
      message: ""
   };

   inputChangeName = (e) => {
      this.setState({ name: e.target.value });
   }

   inputChangeEmail = (e) => {
      this.setState({ email: e.target.value });
   }

   inputChangeMessage = (e) => {
      this.setState({ message: e.target.value });
   }

   async componentDidMount() {
      const res = await axios.get("http://localhost:1337/products")

      console.log(res.data);
      this.setState({ items: res.data })
   }

   notLoggedinHide() {
      document.getElementById("notLoggedin").style.display = "none";
      document.getElementById("contactModalForm").style.display = "none";
      document.getElementById("notLoggedinInfo").style.margin = "20vh auto 0 auto";
   }

   onSubmitContact(e) {
      e.preventDefault();

      const docRef = firebase.firestore().collection("contacts").doc(e.target.elements.email.value.toString());

      docRef.set({
         id: firebase.firestore.FieldValue.serverTimestamp(),
         name: this.state.name,
         email: this.state.email,
         description: this.state.message
      })

      alert("Thanks for contacting us!")
   }

   toggleModalForm() {
      document.getElementById("contactModalForm").style.display = "block";
      document.getElementById("notLoggedinInfo").style.margin = "3vh auto 0 auto";
   }

   render() {
      return (
         <div className="products">
            <div id="notLoggedin">
               <div className="notLoggedinBackground"></div>
               <div id="notLoggedinInfo">
                  <div className="notLoggedinInfoMain">
                     <h5>Please register<br />or sign in to continue.</h5>
                     <p>
                        You need to be logged in to purchase products.<br />
                        If you don't have an account you can create on totally<br />
                        free of charge.
                     </p>
                     <div>
                        <div>
                           <p>To continue,</p>
                           <Link to="/userPage"><button>Create a free account<span>→</span></button></Link>
                        </div>
                        <div id="notLoggedinInfoMainSignin">
                           <p>Already registered?</p>
                           <Link to="/userPage"><button>Sign in<span>→</span></button></Link>
                        </div>
                     </div>
                  </div>
                  <div className="contactModal">
                     <p>If you have any questions please <span onClick={this.toggleModalForm.bind(this)}>contact us.</span></p>
                     <form id="contactModalForm" onSubmit={this.onSubmitContact.bind(this)}>
                        <input type="text" name="name" placeholder="Name" onChange={this.inputChangeName} value={this.state.name} />
                        <br />
                        <input type="email" name="email" placeholder="Email" onChange={this.inputChangeEmail} value={this.state.email} />
                        <br />
                        <textarea name="description" placeholder="Message" onChange={this.inputChangeMessage} value={this.state.message}></textarea>
                        <br />
                        <button>Submit</button>
                     </form>
                  </div>
                  <div className="notLoggedinInfoFotter">
                     <button onClick={this.notLoggedinHide.bind(this)}>x</button>
                  </div>
               </div>
            </div >
            {
               this.state.items.map((item) =>
                  <Card
                     key={item.id}
                     collectionId={item.id}
                     image={"http://localhost:1337" + item.image.url}
                     title={item.title}
                     price={item.price}
                     description={item.description}
                  />
               )
            }
         </div >
      );
   }
}

export default Products;