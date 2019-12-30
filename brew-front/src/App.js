import React, { Component } from "react";
import './App.css';
import { Route, Link, Router } from "react-router-dom";

class App extends Component {
render () {
  return (
    <div className="App">
      <header>
        <p>
          <h1>Virginia Beer and Brewery</h1>
        </p>
        <nav>
        </nav>
        <main>
          <Route path="/" exact component={Home}/>
        </main>
     
      </header>
    </div>
  );
}
}

export default App;
