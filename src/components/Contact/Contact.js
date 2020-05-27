import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";

export default class Contact extends Component {

   onSubmitContact(e) {
      e.preventDefault();

      const docRef = firebase.firestore().collection("contacts").doc(e.target.elements.email.value.toString());

      docRef.set({
         id: firebase.firestore.FieldValue.serverTimestamp(),
         name: e.target.elements.name.value,
         email: e.target.elements.email.value,
         description: e.target.elements.description.value
      })

      alert("Form submited!")
   }

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmitContact.bind(this)}>
               <input type="text" name="name" placeholder="Name" />
               <input type="text" name="email" placeholder="Email" />
               <textarea name="description" placeholder="Text"></textarea>
               <button>Submit</button>
            </form>
         </div>
      )
   }
}