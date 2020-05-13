import React, { Component } from "react";
import axios from "axios";

class AdminEditProductPage extends Component {
   state = {
      image: null,
      inputValueTitle: "",
      inputValueDescription: "",
      inputValuePrice: "",
      inputValueImage: ""
   }

   eventChange(e) {
      console.log(e.target.files[0])
      this.setState({ image: e.target.files[0] })
   }

   inputChangeTitle(e) {
      this.setState({ inputValueTitle: e.target.value });
   }

   inputChangeDescription(e) {
      this.setState({ inputValueDescription: e.target.value });
   }

   inputChangePrice(e) {
      this.setState({ inputValuePrice: e.target.value });
   }

   async componentDidMount() {
      const param = (this.props.location.params);

      this.setState({ inputValueTitle: param.title });
      this.setState({ inputValueDescription: param.description });
      this.setState({ inputValuePrice: param.price });

      const resProduct = await axios.get(`http://localhost:1337/products/${param.id}`)

      console.log(resProduct.data);

      const imageFileName = (resProduct.data.image.name);
      const imageFileExt = (resProduct.data.image.ext);
      const imageFile = imageFileName + imageFileExt;

      this.setState({ inputValueImage: imageFile });
      console.log(imageFile);
   }

   async onSubmitToApi(e) {
      e.preventDefault();
      const param = (this.props.location.params);

      const auth = localStorage.getItem("jwt");
      console.log(auth);

      const res = await axios.put(`http://localhost:1337/products/${param.id}`, {

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
         <div>
            <form onSubmit={this.onSubmitToApi.bind(this)}>
               <input type="text" name="title" value={this.state.inputValueTitle} onChange={this.inputChangeTitle.bind(this)} />
               <input type="text" name="description" value={this.state.inputValueDescription} onChange={this.inputChangeDescription.bind(this)} />
               <input type="number" name="price" step="0.01" value={this.state.inputValuePrice} onChange={this.inputChangePrice.bind(this)} />
               <input
                  type="file"
                  name="file"
                  onChange={this.eventChange.bind(this)}
               />
               <button>Update</button>
            </form>
         </div>
      )
   }
}

export default AdminEditProductPage; 