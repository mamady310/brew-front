import React, { Component } from "react";
// import React from "react";
import './App.css';
import Home from "./Home";
import Name from "./Name";
import City from "./City";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
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
render () {
  return (
 <Router>
   <div className="App">
     <Nav />
     <Switch>
       <Route path ="/" exact component={Home}/>
       <Route path="/Name" component={Name}/>
       <Route path="/City" component={City}/>
     </Switch>
   </div>
 </Router>
  );
}
}

export default App;
