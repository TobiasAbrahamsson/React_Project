import React, { Component } from 'react';

class Logout extends Component {

   state = {
      jtw: null
   }

   logOut() {
      localStorage.clear();
      window.location.reload(false);
   }

   render() {
      const loggedIn = localStorage.getItem("jwt");
      return (
         <div className="logout">
            {!loggedIn ?

               (<div></div>)
               :
               (<button onClick={this.logOut.bind(this)}>Logout</button>)
            }
         </div>
      )
   }
}

export default Logout;