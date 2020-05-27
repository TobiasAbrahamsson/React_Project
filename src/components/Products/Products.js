import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import axios from 'axios';

class Products extends Component {
   state = {
      items: [],
      user: ""
   };

   async componentDidMount() {
      const res = await axios.get("http://localhost:1337/products")

      console.log(res.data);
      this.setState({ items: res.data })
   }

   notLoggedinHide() {
      document.getElementById("notLoggedin").style.display = "none";
   }

   render() {
      return (
         <div className="products">
            <div id="notLoggedin">
               <div className="notLoggedinBackground"></div>
               <div className="notLoggedinInfo">
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