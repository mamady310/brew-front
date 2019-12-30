import React, { Component } from "react";
import './App.css';
import Home from "./Home"
import Name from "./Name"
import City from "./City"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
render () {
  return (
    <div className="App">
      <header>
          <h1>Virginia Beer and Brewery</h1>
        <nav>
            <ul className="list">
            <li>Home</li>
            <li>Brewery By Name</li>
            <li>Brewery By City</li>
            </ul>
            {this.props.children}
        </nav>
        <main>
        </main>
     
      </header>
    </div>
  );
}
}

export default App;
