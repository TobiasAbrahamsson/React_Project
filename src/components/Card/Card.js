import React, { Component } from 'react';
import firebase from "../Firebase/FirebaseConfig";

class Card extends Component {

   state = {
      user: null || localStorage.getItem("user")
   }

   componentDidMount() {
      firebase.auth().onAuthStateChanged(
         user => {
            if (user) {
               this.setState({ user: user.email })
            }
         }
      )
   }

   onClickSaveToFirestore() {
      const userfromLocal = localStorage.getItem("user");
      console.log(userfromLocal);
      var user = firebase.auth().currentUser;
      console.log(user);
      console.log(user.uid);

      const docRef = firebase.firestore().collection("users").doc(user.uid.toString())
         .collection("products").doc(this.props.collectionId.toString());

      docRef.set({
         id: this.props.collectionId,
         title: this.props.title,
         description: this.props.description,
         price: this.props.price
      })
   }

   notLoggedin() {
      document.getElementById("notLoggedin").style.display = "block";
   }

   render() {
      const loggedIn = this.state.user || localStorage.getItem("user");
      return (
         <div className="card">
            <img src={this.props.image} alt="Card" />
            <div className="card-info">
               <h5>{this.props.title}</h5>
               <p>{this.props.description}</p>
               <div className="card-buy">
                  {!loggedIn ?
                     <button onClick={this.notLoggedin.bind(this)}><i className="fas fa-cart-plus"></i></button>
                     :
                     <button onClick={this.onClickSaveToFirestore.bind(this)}><i className="fas fa-cart-plus"></i></button>
                  }
                  <div>
                     <p><span>{this.props.price}</span>sek</p>
                  </div>
               </div>
            </div>
         </div >
      )
   }
}

export default Card;