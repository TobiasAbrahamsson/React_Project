import React, { Component } from 'react';
import ServiceCard from "../ServiceCard/ServiceCard";
import axios from 'axios';

class Home extends Component {
   state = { services: [] };

   async componentDidMount() {
      const res = await axios.get("http://localhost:1337/services")

      console.log(res.data);
      this.setState({ services: res.data })
   }

   render() {
      return (
         <div className="home">
            {this.state.services.map((service) =>
               <ServiceCard
                  key={service.id}
                  collectionId={service.id}
                  image={"http://localhost:1337" + service.image.url}
                  title={service.title}
                  price={service.price}
                  description={service.description}
               />
            )}
         </div>
      );
   }
}

export default Home;