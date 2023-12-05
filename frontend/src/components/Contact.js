import React from 'react';
import "../css/contact.css";

const Contact = () => {
  return (
    <>
     <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="links">
        <div className="link">
          <a href="https://www.linkedin.com/in/vihar-prajapati-a52844226" ><img className='vihsk' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
        </div>
        <div className="link">
          <a href="https://github.com/Viharp2002" ><img className='vihsk' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
        </div>
        <div className="link">
          <a href="mailto:viharp2002@gmail.com"><img className='vihsk' src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form  action="https://formspree.io/f/xjvlqbkv" method="POST">
        <div className="form-item">
          <input className="vih"type="text" name="sender" required/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input className="vih"type="email" name="email" required/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <input className="vih"type="text" name="subject" required/>
          <label>Subject:</label>
        </div>
        <div className="form-item">
          <textarea className="" rows="4" cols="35" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button className="submit-btn">Send</button>  
      </form>
    </div>
  </div>
</section> 
    </>
  )
}

export default Contact
