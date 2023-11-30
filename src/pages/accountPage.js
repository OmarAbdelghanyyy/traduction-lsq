import '../styles/accountPage.css'
import Footer from '../Footer.js'
import React, { useState } from "react";
import { text } from '@fortawesome/fontawesome-svg-core';
import logo from '../styles/signecreatif.jpeg'


export default function AccountPage(){
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");
  
  document.body.style.overflow='visible'


  return(
    <div className='wrapper-account'>
       <div className='logo'>
      <img src={logo} alt="Logo" />
      </div>
    <h1 className='main-title'>Créez un compte</h1>
    <h2 className='secondary-title'> Créez votre compte des maintenant</h2>
    <form method="post" className='account-page-form'>
      <fieldset>
        <label htmlFor="email">Courriel <input id="email" className="email" type="email" required /></label>
        <label htmlFor="user-name">Nom d'utilisateur: <input id="user-name" className="last-name" type="text" required /></label>
        <label htmlFor="user-type">
          <select id="referrer" name="referrer">
            <option value="">Type d'utilisateur (etudiant et eleve)</option>
            <option value="1">Etudiant</option>
            <option value="2">eleve</option>
          </select>
        </label>
        <label htmlFor="new-password">Mot de passe 
        <input className="new-password" 
        type={
          showPassword ? "text" : "password"
    } 
        pattern="[a-z0-5]{8,}" required 
           value={password}
           onChange={(e) =>
               setPassword(e.target.value)
           }/>
          </label>
        <label htmlFor="new-password2">Confirmez mot de passe
        <input className="new-password2" 
        type={
              showPassword ? "text" : "password"
        } 
        pattern="[a-z0-5]{8,}" required    
        value={password2}
                    onChange={(f) =>
                        setPassword2(f.target.value)
                    }/>
        </label>
        <label 
        className='check-label'
        htmlFor='check'>
         Affichez le mot de passe
                <input
                    id="check"
                    type="checkbox"
                    className='checkbox'
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />
              
                </label>
      </fieldset>
      
   
      <input  className="create-account-submit"type="submit" value="Submit" />
  
    </form>
                   <hr></hr>
                   <p className='accept-terms'>En créant un compte, vous acceptez nos conditions d'utilisations
                   et nos politiques d'utilisations </p>
    <div>

    </div>
    <div className='account-footer'>
      <Footer />
    </div >

    </div>
)    
        
    

}
