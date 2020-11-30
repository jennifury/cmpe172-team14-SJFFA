import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Fossils from "./fossils";
import Contact from "./contact_us";



class App extends Component {

render(){
  return (
    <HashRouter>
    <div className="App">
      <header>
      <div class="navbar">
      <ul className="header">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/fossils">Fossils</NavLink>
        <NavLink to="/contact_us">Contact</NavLink>
         </ul>
      </div>

      </header>
      <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/fossils" component={Fossils}/>
          <Route path="/contact_us" component={Contact}/>

      </div>
    </div>
    </HashRouter>
  );
}
}
export default App;
