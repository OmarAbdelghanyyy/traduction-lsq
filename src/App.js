import './styles/App.css';

import Navbar from './Navbar.js';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import Contact from './pages/contact';
import AccountPage from './pages/accountPage'
import { Switch } from '@mui/material';

function App() {
  return (
    <div className='App'> 
    <Navbar />
    <div>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/createaccount" element={<AccountPage/>} /> 
  
    </Routes>

  </div>
  </div>
  );
}

export default App;