import '../styles/accountPage.css'
import Navbar from '../Navbar'

export default function AccountPage(){
  return(
    <div>
    <h1>Create an account</h1>
    <form method="post" >
      <fieldset>
        <label for="first-name">Enter Your First Name: <input id="first-name" name="first-name" type="text" required /></label>
        <label for="last-name">Enter Your Last Name: <input id="last-name" name="last-name" type="text" required /></label>
        <label for="email">Enter Your Email: <input id="email" name="email" type="email" required /></label>
        <label for="new-password">Create a New Password: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
      <fieldset>
        <label for="terms-and-conditions">
          <input id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" class="inline" /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
        </label>
      </fieldset>
      <fieldset>
        <label for="age">Input your age (years): <input id="age" type="number" name="age" min="13" max="120" /></label>
        <label for="referrer">How did you hear about us?
          <select id="referrer" name="referrer">
            <option value="">(select one)</option>
            <option value="1">Word of mouth</option>
            <option value="2">School</option>
            <option value="3">Other</option>
          </select>
        </label>
        <label for="bio">Provide a brief description about how you plan on using this website:
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="Schoo/learning lsq/..."></textarea>
        </label>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
    </div>
)    
        
    

}
