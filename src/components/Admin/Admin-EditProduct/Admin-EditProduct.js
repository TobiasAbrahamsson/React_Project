import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AdminEditProduct extends Component {
   state = {
      items: []
   };

   async componentDidMount() {
      const res = await axios.get("http://localhost:1337/products")

      console.log(res.data);
      this.setState({ items: res.data })
   }

   removeProduct() {
      const id = this
      console.log(id)
      axios.delete(`http://localhost:1337/products/${id}`)
      window.location.reload(false);
   }

   render() {
      return (
         <div className="editProducts">
            <table>
               <thead>
                  <tr>
                     <th className="tableHeadId">Id</th>
                     <th className="tableHeadImage">Image</th>
                     <th className="tableHeadTitle">Title</th>
                     <th className="tableHeadDescription">Description</th>
                     <th className="tableHeadPrice">Price</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {this.state.items.map((item) =>
                     <tr key={item.id}>
                        <td className="tableId">{item.id}</td>
                        <td className="tableImage">
                           <img src={"http://localhost:1337" + item.image.url} alt="" />
                        </td>
                        <td className="tableTitle">{item.title}</td>
                        <td className="tableDescription">{item.description}</td>
                        <td className="tablePrice">{item.price}</td>
                        <td className="tableEdit">
                           <Link
                              to={{
                                 pathname: `/adminPage/editProduct/${item.id}`,
                                 params: {
                                    id: item.id,
                                    title: item.title,
                                    description: item.description,
                                    price: item.price,
                                    image: item.image.url.substr(9, 999)
                                 }
                              }}
                           >
                              <i className="fas fa-pen"></i>
                           </Link>
                        </td>
                        <td className="tableDelete">
                           <i className="fas fa-trash-alt" onClick={this.removeProduct.bind(this.setState = item.id)}></i>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div >
      );
   }
}

export default AdminEditProduct;