import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCircleInfo,faBuildingColumns,faHandsAslInterpreting} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Navbar from './Navbar.js';

import {Grid} from '@mui/material/';

function home() {
  return (
    <div className="home">
  <Navbar/>
    <div className="introduction">
    <h2>Welcome to our website</h2>
    <div className='phrase'>
      <p className='description'>
        This is website is a tool built by "our team-name",
        our mission is to provide the deaf community youth with a tool that would help them learn french. We strive for a more inclusive society and our way of doing that 
        is to create a tool that would help people who have a sign language as their first one navigate the internet.
        </p>
    </div>
    </div>

      <h1 className="title">Menu</h1 >
    <div className= "menu" style={{padding: "4% 0%"}}>
     <Grid id="Skills" container alignItems="center" justifyContent="center">
        <Grid className="skillItem">
        <span className="fa-stack fa-2x" >
          <a className = "no-style"href='#'> <FontAwesomeIcon icon={faBook} style={{color: "#00000", zIndex: "1"}} /></a>
       
            </span>
            <a  className = "no-style" href='#'><p>Dictionnaire</p></a> 
           
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
            <a className = "no-style" href='#'> <FontAwesomeIcon icon={faBuildingColumns} /></a>
            </span>
            <a className = "no-style" href='#'><p>Ressources</p></a> 
            
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
            <a className = "no-style" href='#'> <FontAwesomeIcon icon={faHandsAslInterpreting} /></a>
            </span>
            <a className = "no-style" href='#'><p>Traduction</p></a> 
           
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
            <a className = "no-style" href='#'> <FontAwesomeIcon icon={faCircleInfo} /></a>
            </span>
            <a className = "no-style" href='#'><p>About us</p></a> 
            
        </Grid>
      
    
       
     </Grid>
    </div>
    </div>
    
 );
}
  


export default home;
