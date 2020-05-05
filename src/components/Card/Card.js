import React from 'react';

const Card = (props) => {
   return (
      <div className="card">
         <img src={props.image} alt="Card" />
         <div className="card-info">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <div className="card-book">
               <button><i className="fas fa-cart-plus"></i></button>
               <div>
                  <p><span>{props.price}</span>sek</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card;