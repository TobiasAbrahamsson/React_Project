import React, { Component } from "react";
import axios from "axios";

class AdminAddProduct extends Component {

   state = {
      image: " "
   }
   eventChange(e) {
      console.log(e.target.files[0])
      this.setState({ image: e.target.files[0] })
   }

   async onSubmitToApi(e) {
      e.preventDefault();
      //console.log(e.target.elements.file.files[0])
      //this.setState({title: e.target.elements.title.value})

      const res = await axios.post("http://localhost:1337/products", {

         title: e.target.elements.title.value,
         description: e.target.elements.description.value,
         price: e.target.elements.price.value

      })
      console.log(res)

      const data = new FormData();

      data.append('files', this.state.image)
      data.append('ref', 'products')
      data.append('refId', res.data.id)
      data.append('field', 'image')

      const resPic = await axios.post("http://localhost:1337/upload", data)
      console.log(resPic)
   }

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmitToApi.bind(this)}>
               <input type="text" name="title" placeholder="Title" />
               <input type="text" name="description" placeholder="Description" />
               <input type="number" name="price" step="0.01" placeholder="Price" />
               <input type="file" name="file" onChange={this.eventChange.bind(this)} />
               <button>Spara</button>
               {this.state.title}
            </form>
         </div>
      )
   }
}

export default AdminAddProduct; 