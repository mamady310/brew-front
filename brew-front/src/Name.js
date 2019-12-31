import React from "react";

class Name extends React.Component {
   state = {
      name: null,
   };
   async componentDidMount(){
      const url = "https://api.openbrewerydb.org/breweries"
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
     
   }
    render() {
       return (
          <div>
            <h1>Brewery by Name</h1>  
            <p>
               {this.data}
               </p>
            </div>  
       );
    }
 }
 export default Name;