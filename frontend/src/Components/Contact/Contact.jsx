import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8081/submit-feedback', formData);
    toast.success('Feedback submitted successfully!');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    toast.error('Failed to submit feedback. Please try again later.');
  }
};


  return (
    <div className="contact-container">
      <div className="message-section">
        <h2>Contact Us</h2>
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-section">
        <h2>Contact Details</h2>
        <br></br>
        <p>Email: manager@bloodbank.in</p>
        <p>Phone: 91234567890</p>
        <p>Address: NMAMIT, Nitte, Karkala - 576105</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
