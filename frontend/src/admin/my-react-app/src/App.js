// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [donors, setDonors] = useState([]);
  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/donors');
      setDonors(response.data);
    } catch (error) {
      console.error('Failed to fetch donors:', error);
    }
  };

  const addDonor = async () => {
    try {
      await axios.post('http://localhost:5000/donors', { name, bloodType, contact });
      setName('');
      setBloodType('');
      setContact('');
      fetchDonors();
    } catch (error) {
      console.error('Failed to add donor:', error);
    }
  };

  const deleteDonor = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/donors/${id}`);
      fetchDonors();
    } catch (error) {
      console.error('Failed to delete donor:', error);
    }
  };

  return (
    <div>
      <h1>Blood Bank Admin Panel</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addDonor();
      }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Blood Type" value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
        <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
        <button type="submit">Add Donor</button>
      </form>
      <h2>Donors:</h2>
      <ul>
        {donors.map(donor => (
          <li key={donor.id}>
            {donor.name} - {donor.bloodType} - {donor.contact}
            <button onClick={() => deleteDonor(donor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
