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
               <Link to="/contact">Contactez nous</Link>
            </li>
            <li>
                <Link to="/createaccount">Créer un Compte</Link>
            </li>
          
            
        </ul>
        </div>


    </div>
  
    </nav>
    </>
)
}
}

export default Navbar;