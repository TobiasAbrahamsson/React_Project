import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

   state = {
      title: ""
   }

   async onSubmitToApi(e) {
      e.preventDefault();

      console.log(e.target.elements.file.files[0])
      this.setState({ title: e.target.elements.title.value })
      console.log(this.state.title)

      const res = await axios.post("http://localhost:1337/products", {

         title: e.target.elements.title.value,
         description: e.target.elements.description.value,
         price: e.target.elements.price.value,
         image: ""
      })

      console.log(res)
   }

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmitToApi.bind(this)}>
               <input type="text" name="title" placeholder="Title" />
               <input type="text" name="description" placeholder="Description" />
               <input type="number" name="price" placeholder="Price" />
               <input type="file" name="file" />
               <button>Submit</button>
               {this.state.title}
            </form>
         </div>
      )
   }
}

export default Admin;
