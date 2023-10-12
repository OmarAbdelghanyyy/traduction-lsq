import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../styles/contact.css'

//TODO: create a css file this component

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

  return (
    <div className='Contact'>
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <fieldset>
        <label>Name</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required/>
        <label>Message</label>
        <textarea name="message" required/>
        <input type="submit" value="Send" />
        </fieldset>
      </form>
  

    </div>

  
  );
};
export default Contact;