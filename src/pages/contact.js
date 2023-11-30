import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../styles/contact.css'
import logo from '../styles/signecreatif.jpeg'
import Footer from '../Footer';
const Contact = () => {
  const SERVICE_ID = 'service_9kzaxgz';
const TEMPLATE_ID = "template_b1jr8se";
const USER_ID = "MBebflZ6xCJD_L1kK";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        USER_ID
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message sent successfully'
          })
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          Swal.fire({
            icon: 'eroor',
            title: 'Oops something went wrong'
          })
          console.log(error.text);
        }
      );
      form.current.value=''
  };
  document.body.style.overflow='hidden'

  return (
    
    <div className='Contact'>
      <div className='logo'>
      <img src={logo} alt="Logo" />
      </div>
      <h1 className='contact-title'>Contactez Nous</h1>
      <div className='paragraph'>
        <div className='text'>
        <p>
          Envoyez nous un e-mail pour toute question ou
          demande de rensegnements. Nous sommes la pour vous aider.
          L'equipe SigneCreatif est dediee a repondre a vos questions. Envoyez
          nous un e-mail et laissez nous etre votre solution vers une experience exceptionnelle.
          Votre satisfaction est notre priorite! 
          Nous sommes a votre ecoute.
        </p>
        </div>
        
      </div>
      <div className='formDiv'>
      <form ref={form} onSubmit={sendEmail}>
        <fieldset>
        <div className='nameField'>
          <label className='name_label' htmlFor="user_name">Nom</label>
        < input type="text" className="user_name" required/>
        </div>
        <div className='emailfield'>
            <label className='email_label' htmlFor="user_email">Courriel</label>
        <input type="email" className="user_email" required/>
        </div>
      <div className='subjectfield'>
            <label  className='subject_label'htmlFor="user_subject">Sujet</label>
           <input type="text" className="user_subject" required/>
      </div>    
   <div className='messagefield'> 
    <label  className='message_label'  htmlFor="user_message">Message</label>
        <input className="message" required/>
    </div>
        
        <input type="submit" value="Soumettre" />
        </fieldset>
      </form>
      </div>
      <div className='footer-contact'>
        <Footer/>
      </div>

    </div>

  
  );
};
export default Contact;