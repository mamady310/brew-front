import React, { Component } from "react";
import './App.css';
import Home from "./Home"
import { Route, Link, Router } from "react-router-dom";

class App extends Component {
render () {
  return (
    <div className="App">
      <header>
          <h1>Virginia Beer and Brewery</h1>
        <nav>
        <div className="nav">
            <ul>
            <li>Home</li>
            <li>Brewery By Name</li>
            <li>Brewery By City</li>
            </ul>
            {this.props.children}
         </div>
        </nav>
        <main>
        </main>
     
      </header>
    </div>
  );
}
}

export default App;
