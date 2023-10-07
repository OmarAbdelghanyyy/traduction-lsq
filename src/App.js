import './App.css';
import accountPage from './accountPage';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from home.js


function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/Home' element={<Home />} />
        <Route path='/createaccount' element={<accountPage />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </Router>

  </div>
  );
}

export default App;