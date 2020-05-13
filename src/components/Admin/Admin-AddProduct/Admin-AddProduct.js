import React, { Component } from "react";
import axios from "axios";

class AdminAddProduct extends Component {
   state = {
      image: null
   }

   eventChange(e) {
      console.log(e.target.files[0])
      this.setState({ image: e.target.files[0] })
   }

   removeFile() {
      this.setState({ image: null })
   }

   async onSubmitToApi(e) {
      e.preventDefault();

      const auth = localStorage.getItem("jwt");
      console.log(auth);

      const res = await axios.post("http://localhost:1337/products", {

         title: e.target.elements.title.value,
         description: e.target.elements.description.value,
         price: e.target.elements.price.value,
         Authorization: auth
      })
      console.log(res)

      const data = new FormData();
      data.append('files', this.state.image)
      data.append('ref', 'products')
      data.append('refId', res.data.id)
      data.append('field', 'image')

      const resPic = await axios.post("http://localhost:1337/upload", data, {
         Authorization: auth
      }
      );
      console.log(resPic)
      alert("Product successfully uploaded!");
   }

   render() {
      return (
         <div className="adminAddProduct">
            <div className="adminAddProductForm">
               <h1>Add Product</h1>
               <form onSubmit={this.onSubmitToApi.bind(this)}>
                  <i id="addProductTitleIcon" className="fas fa-pen"></i>
                  <input type="text" name="title" placeholder="Title" spellCheck="false" />
                  <i id="addProductDescriptionIcon" className="fas fa-pen"></i>
                  <textarea name="description" placeholder="Description" spellCheck="false"></textarea>
                  <i id="addProductPriceIcon" className="fas fa-dollar-sign"></i>
                  <input type="number" name="price" step="0.01" placeholder="Price" />
                  {!this.state.image &&
                     <label>
                        <i id="addProductFileIcon" className="fas fa-file-image"></i>
                        Add File
                           <input
                           className="productFileInput"
                           type="file"
                           name="file"
                           onChange={this.eventChange.bind(this)}
                        />
                     </label>
                  }
                  {this.state.image &&
                     <div>
                        <h2>Selected: {this.state.image.name}</h2>
                        <i className="fas fa-trash-alt" onClick={this.removeFile.bind(this)}></i>
                     </div>
                  }
                  <button>Upload</button>
                  {this.state.title}
               </form>
            </div>
         </div>
      )
   }
}

export default AdminAddProduct; 