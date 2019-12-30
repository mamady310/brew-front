import React, { Component } from "react";
import Home from "./Home";
import Name from "./Name";
import City from "./City";

class Nav extends React.Component {
    render() {
       return (
          <nav>
            {/* <h3>Logo</h3>   */}
            <ul>
                <li component={Home}>Home</li>
                <li component={Name}>Brewery By Name</li>
                <li component={City}>Brewery By City</li>
            </ul>

          </nav>
       )
    }
 }
 export default Nav;