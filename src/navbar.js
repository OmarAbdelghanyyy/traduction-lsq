import React, { Component } from "react";
import './Navbar.css';
import SearchIcon from './search.svg';

class Navbar extends Component{
  
render(){
    return(
    <>
    <nav>
    <div id="bardiv">
        <div id ="align-right">
        <ul id="navbar" className="#navbarative">
            <li>
                <a href="/Contact" id="navlink">Contact</a>
            </li>
            <li>
                <a href="/create-account" id="navlink">Create an Account</a>
            </li>
          
            
        </ul>
        </div>
    <div className="search">
        <input
        placeholder="search our website"
        />
        <img
        src={SearchIcon}
        />

    </div>
      

    </div>
  
    </nav>
    </>
)
}
}

export default Navbar;