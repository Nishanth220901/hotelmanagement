import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './Contact.css'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Contact-us</h1>
        <div className='row'>
          <div className='col'>
            <h5>Contact</h5>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <h3>123 Blissful Avenue Saravanampatti, Coimbatore, Tamilnadu-641035, India</h3>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <h3>+123 456 7890</h3>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <h3>info@hresidency.com</h3>
            </div>
          </div>
          <div className='col'>
            <form>
              <label>Name</label>
              <input type="text" placeholder='Enter your name' />
              <br />
              <label>Email</label>
              <input type="email" placeholder='Enter your email' /> 
              <br />
              <label>Comments</label>
              <textarea cols="30" rows="10"></textarea>
              <button type='Submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
