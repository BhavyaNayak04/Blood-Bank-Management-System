import React from 'react'
import '../contact.css'

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="message-section">
        <h2>Contact Us</h2>
        <h3>Send us a message</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-section">
        <h2>Contact Details</h2>
        <p>Email: bloodbank@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Blood Bank Street, City, Country</p>
      </div>
    </div>
  );
};

export default ContactPage;
