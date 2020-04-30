import React, { Component } from 'react';
import Card from "../Card/Card";
import axios from 'axios';

class Products extends Component {
   state = { items: [] };

   async componentDidMount() {
      const res = await axios.get("http://localhost:1337/products")

      console.log(res.data);
      this.setState({ items: res.data })
   }

   render() {
      return (
         <div className="products">
            {this.state.items.map((item) =>
               <Card
                  key={item.id}
                  image={"http://localhost:1337" + item.image.url}
                  title={item.title}
                  price={item.price}
                  description={item.description}
               />
            )}
         </div>
      );
   }
}

export default Products;