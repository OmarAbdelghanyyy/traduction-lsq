import './styles/App.css';

import Navbar from './Navbar.js';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import Contact from './pages/contact';
import AccountPage from './pages/accountPage'
import { Switch } from '@mui/material';
import Ressources from './pages/ressources.js';
import AboutUs from './pages/aboutUs.js';
import Footer from './Footer.js'
import Traduction from './pages/traduction.js';
import Dictionnaire from "./pages/dictionnaire.js"
function App() {
  document.body.style.overflow='show'
  return (
    <div className='App'> 
    <Navbar />
    <div>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/createaccount" element={<AccountPage/>} /> 
        <Route path="/ressources" element={<Ressources/>} /> 
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/traduction" element ={<Traduction />}/>
        <Route  path="/dictionnaire" element= {<Dictionnaire />}/>
    </Routes>

   
  </div>
  </div>
  );
}

export default App;