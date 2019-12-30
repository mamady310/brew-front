import React, { Component } from "react";
import './App.css';
import Home from "./Home";
import Name from "./Name";
import City from "./City";
// import Nav from "./Nav";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
render () {
  return (
    <Router>
    <div className="App">
    <ul className="nav-links">
                 <Link to="/">
                     <li>Home</li>
                 </Link>
                 <Link to="/Name">
                     <li>Brewery By Name</li>
                 </Link>
                 <Link to="/City">
                      <li>Brewery By City</li>
                 </Link>
             </ul>
    
    </div>
    </Router>
  );
}
}

export default App;
