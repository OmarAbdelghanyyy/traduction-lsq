import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCircleInfo,faBuildingColumns,faHandsAslInterpreting} from '@fortawesome/free-solid-svg-icons'
import '../styles/App.css';
import Navbar from '../Navbar.js';
import { Link } from "react-router-dom";
import logo from '../styles/signecreatif.jpeg'
import {Grid} from '@mui/material/';
import Footer from '../Footer.js'
import blue_logo from '../styles/blue_logo.jpeg'

function home() {
  document.body.style.overflow='visible'
  return (
    
    <div className="home">
      <style> @import url('https://fonts.cdnfonts.com/css/libra-serif-modern');</style>
      <style> @import url('https://fonts.cdnfonts.com/css/libra-serif-modern');</style>
      
                
        <div className='logo'>
            <img src={logo} alt="Logo" />
      </div>
    <div className="introduction">
    <h2 className='home_title'>Traduction LSQ</h2>
    <div className='phrase'>
      <p className='description'>
      Facilitez l'apprentissage du français comme deuxième langue pour les jeunes utilisant la Langue des Signes Québécoise (LSQ).
      Simplifiez l'apprentissage du français pour les jeunes utilisant la Langue des Signes Québécoise avec notre outil de traductions innovant.
        </p>
    </div>
    </div>

      <h1 className="title">Menu</h1 >
    <div className= "menu" style={{padding: "4% 0%"}}>
    <Grid id="Skills" container alignItems="center" justifyContent="center">
  <Grid className="skillItem">
    <Link to="/dictionnaire">
      <FontAwesomeIcon icon={faBook} style={{ color: '#9f7f42', zIndex: "1" }} />
      <p className='menu-item'>DICTIONNAIRE</p>
    </Link>
  </Grid>


        <Grid className="skillItem">
      <Link to="/ressources">
        <FontAwesomeIcon icon={faBuildingColumns} style={{color: '#9f7f42'}}/>
        <p className='menu-item'>RESSOURCES</p>
        </Link>
            
        </Grid>
        <Grid className="skillItem">
          <Link to="/traduction">
            <FontAwesomeIcon icon={faHandsAslInterpreting} style={{color: '#9f7f42'}}/>
            <p className='menu-item'>TRADUCTION</p>
            </Link>
           
        </Grid>
        <Grid className="skillItem">
            <Link to="/aboutus"> 
            <FontAwesomeIcon icon={faCircleInfo} style={{color: '#9f7f42'}}/>
            <p className='menu-item'>A PROPOS</p>
            </Link>
            
        </Grid>
      
    
       
     </Grid>
     <img className="blue_logo"src={blue_logo}  alt='blue_logo'/>
    </div>

    <div className='footer-home'>
      <Footer />
    </div>
    </div>

);
}
  
  

export default home;
