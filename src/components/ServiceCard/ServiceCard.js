import React, { Component } from 'react';
import firebase from "../Firebase/FirebaseConfig";

class ServiceCard extends Component {

   onClickSaveToFirestore() {
      const docRef = firebase.firestore().collection("booking").doc(this.props.docId.toString());

      docRef.set({
         title: this.props.title,
         description: this.props.description,
         price: this.props.price
      })
   }

   render() {
      return (
         <div className="serviceCard">
            <img src={this.props.image} alt="Card" />
            <div className="serviceCardBackgoundOverlay"></div>
            <div className="serviceCardInfo">
               <h5>{this.props.title}</h5>
               <p>{this.props.description}</p>
               <div className="serviceCardBook">
                  <button onClick={this.onClickSaveToFirestore.bind(this)}>Book</button>
                  <div>
                     <p><span>{this.props.price}</span>sek</p>
                  </div>
               </div>
            </div>
         </div >
      )
   }
}

export default ServiceCard;