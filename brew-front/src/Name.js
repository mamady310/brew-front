import React from "react";

class Name extends React.Component {
   state = {
      loading: true,
      name: true,
   };

   async componentDidMount() {
    const url = "https://cors-anywhere.herokuapp.com/http://localhost:5000/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    }
    render() {
      return (
         <div>
            <h1>Brewery by Name</h1>
         </div>
      );
   }
   }
   

 export default Name;