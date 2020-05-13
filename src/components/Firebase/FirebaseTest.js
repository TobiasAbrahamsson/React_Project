import React, { Component } from 'react';

import firebase from './FirebaseConfig';

class FirebaseTest extends Component {

   //read data form firebase
   onClickFirebase() {

      const db = firebase.firestore();
      const docRef = db.collection("booking").doc("info")
      const docRef2 = db.collection("booking").doc("info2")

      docRef.get().then(booking => {
         if (booking.exists) {
            console.log("document data: ", booking.data())
         }
         else {
            console.log("error")
         }
      })

      //write data in firebase
      docRef.set({
         item: "test",
         price: 2000
      })
      docRef2.set({
         item: "test 2",
         price: 3000
      })
   }

   render() {
      return (
         <div>
            <button onClick={this.onClickFirebase.bind(this)}>Get firebase info</button>
         </div>
      )
   }
}

export default FirebaseTest;