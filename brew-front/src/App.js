import React, { Component } from "react";
import './App.css';
import Home from "./Home";
import Name from "./Name";
import City from "./City";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
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
