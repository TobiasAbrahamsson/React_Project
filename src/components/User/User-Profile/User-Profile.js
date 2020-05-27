import React, { Component } from "react";
import { Link } from 'react-router-dom';
import firebase from "../../Firebase/FirebaseConfig";

class UserProfile extends Component {

   state = {
      products: null,
      bookings: null,
      username: "",
      email: ""
   }

   componentDidMount() {
      //get username
      const userfromLocal = localStorage.getItem("user");
      console.log(userfromLocal);
      var user = firebase.auth().currentUser;
      console.log(user);
      console.log(user.displayName);
      console.log(user.email)

      this.setState({
         username: user.displayName,
         email: user.email
      });

      //get products
      var docRef = firebase.firestore().collection("users").doc(user.uid.toString())
         .collection("products");

      docRef.get().then(snapshot => {
         const products = []
         snapshot.forEach(doc => {
            const data = doc.data()
            products.push(data)
         })
         this.setState({ products: products })
      })

      //get bookings
      var docRef2 = firebase.firestore().collection("users").doc(user.uid.toString())
         .collection("bookings");

      docRef2.get().then(snapshot => {
         const bookings = []
         snapshot.forEach(doc => {
            const data = doc.data()
            bookings.push(data)
         })
         this.setState({ bookings: bookings })
      })
   }

   handleImageChange = (e) => {
      const image = e.target.files[0];
      const formData = new FormData();
      formData.append('image', image, image.name);
      console.log(image.name)
   }

   handleEditPicture = () => {
      const fileInput = document.getElementById('profileImageInput');
      fileInput.click();
   }

   logOut() {
      localStorage.clear();
      window.location.reload(false);
      firebase.auth().signOut();
   }

   deleteAccount() {
      const userfromLocal = localStorage.getItem("user");
      console.log(userfromLocal);
      var user = firebase.auth().currentUser;
      console.log(user);

      if (user) {
         user.delete().then(function () {
            // User deleted.
            localStorage.clear();
            window.location.reload(false);
         }).catch(function (error) {
            // An error happened.
         });
      }
   }

   render() {
      return (
         <div>
            <div className="userProfile">
               <input
                  type="file"
                  id="profileImageInput"
                  hidden="hidden"
                  onChange={this.handleImageChange}
               />
               <i
                  id="profileImageInputIcon"
                  className="fas fa-pen"
                  onClick={this.handleEditPicture}
               />

               <br />
               Profile info:
               <br />
               {this.state.username}
               <br />
               {this.state.email}
               <br />

               <Link
                  to={{
                     pathname: "/userPage/updateProfile",
                     params: {
                        username: this.state.username,
                        email: this.state.email
                     }
                  }}
               >
                  <button>Edit Profile</button>
               </Link>

               <button onClick={this.deleteAccount.bind(this)}> Radera konto</button>
               <button onClick={this.logOut.bind(this)}> Logout</button>
            </div>
            <div>
               <div className="myBookings">
                  <h2>My Bookings</h2>
                  <table>
                     <thead>
                        <tr>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Price<span>(SEK)</span></th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           this.state.bookings &&
                           this.state.bookings.map(booking => {
                              return (
                                 <tr key={booking.id}>
                                    <td>{booking.title}</td>
                                    <td id="bookingsTableDescription">{booking.description}</td>
                                    <td id="bookingsTablePrice">{booking.price}</td>
                                 </tr>
                              )
                           })
                        }
                     </tbody>
                  </table>
               </div>
               <div className="purchasedProducts">
                  <h2>Purchased Products</h2>
                  <table>
                     <thead>
                        <tr>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Price<span>(SEK)</span></th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           this.state.products &&
                           this.state.products.map(product => {
                              return (
                                 <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td id="productTableDescription">{product.description}</td>
                                    <td id="productTablePrice">{product.price}</td>
                                 </tr>
                              )
                           })
                        }
                     </tbody>
                  </table>
               </div>
            </div >
         </div >
      )
   }
}

export default UserProfile;