import React from "react";

class Name extends React.Component {
   constructor (){
      super ()
   this.state = {
      nameData: []
   }
   };

   async componentDidMount() {
    const url = "http://localhost:5000/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    }
    render() {
      return (
         <div className="App">
            <h1>Brewery by Name</h1>
         </div>
      );
   }
   }
   

 export default Name;