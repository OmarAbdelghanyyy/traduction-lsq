import React, { Component } from "react";
import './Navbar.css';
import SearchIcon from './search.svg';
import { Link } from "react-router-dom";

class Navbar extends Component{
  
render(){
    return(
    <>
    <nav>
    <div id="bardiv">
        <div id ="align-right">
        <ul id="navbar" className="#navbarative">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/createaccount">Create an Account</Link>
            </li>
          
            
        </ul>
        </div>
    <div className="search">
        <input
        placeholder="search our website"
        />
        <img
        src={SearchIcon}
        alt='search'
        />

    </div>
      

    </div>
  
    </nav>
    </>
)
}
}

export default Navbar;