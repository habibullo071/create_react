import React, { useState } from 'react';
import { FiPhoneCall, FiMail, FiSend } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Yuqori Sarlavha */}
        <div className="contact-header">
          <span className="subtitle">Get in Touch</span>
          <h2 className="title">Connect with Me with<br />Confidence</h2>
        </div>

        <div className="contact-content">
          
          {/* Chap Tomon: Aloqa ma'lumotlari */}
          <div className="contact-info">
            <p className="info-text">
              Please fill out the form on this section to contact with me. Or call between 
              9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <FiPhoneCall />
                </div>
                <div className="info-details">
                  <span className="label">Call me</span>
                  <a href="tel:+998911752260" className="value">+998 (91) 175-22-60</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-details">
                  <span className="label">Email</span>
                  <a href="mailto:khadirovmichael@gmal.com" className="value">khadirovmichael@gmal.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng Tomon: Forma */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <textarea 
                  name="message" 
                  placeholder="Your message" 
                  rows="6" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <a href="https://t.me/khadirov_071?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQMxMDAAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnusHYGA79bMhyaIO0Y86A2_yBYhqzGmq5tl2YyMgOnQuqJHgXEChZohyhlng_aem_d8gtqKdovFmUCZpcejGbTA">
                Submit Message <FiSend className="send-icon" /></a>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;