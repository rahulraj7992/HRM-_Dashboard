import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../assets/css/Contact.css'
const ContactForm = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/11234567890', '_blank'); // Replace with your WhatsApp number
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@company.com'; // Replace with your email
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
       
        <h2>Contact Us</h2>
      </div>
      
      <div className="contact-form-content">
        <form className="contact-form">
        
          <div className="form-group">
          <div className="contact-icons">
          <FaWhatsapp className="whatsapp-icon" onClick={handleWhatsAppClick} />
          <FaEnvelope className="email-icon" onClick={handleEmailClick} />
        </div>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" placeholder="Enter Company Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Enter Phone Number" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" placeholder="Enter Address" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter Your Message" />
          </div>
          
          <div className="contact-actions">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
