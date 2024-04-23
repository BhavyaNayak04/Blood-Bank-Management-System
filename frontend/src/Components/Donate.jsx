import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../donate.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DonateBloodForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [mobile, setMobile] = useState('');
  const [hospital, setHospital] = useState('');
  const [bloodGroups, setBloodGroups] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  
 
  useEffect(() => {
    axios.get('http://localhost:8081/bgs')
      .then(response => setBloodGroups(response.data))
      .catch(error => console.error('Error fetching blood groups:', error));

    axios.get('http://localhost:8081/hosps')
      .then(response => setHospitals(response.data))
      .catch(error => console.error('Error fetching hospitals:', error));
  }, []);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = { name, age, gender, bloodGroup, mobile, hospital };
    try{
        await axios.post('http://localhost:8081/donateBlood', formData)
        toast.success('Thank you for donating blood!');
        setName('');
        setAge('');
        setGender('');
        setBloodGroup('');
        setMobile('');
        setHospital('');
    }
    catch(error) {
        console.error('Error submitting form:', error);
        toast.error('Failed to submit the form. Please try again later.');
      };
  };

  return (
    <div className='donate-container'>
      <h1>Donate Blood</h1>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        
        <label>Blood Group</label>
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
          <option value="">Select Blood Group</option>
          {bloodGroups.map(group => (
            <option key={group.id} value={group.bg_id}>{group.bg_name}</option>
          ))}
        </select>
        
        <label>Mobile</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        
        <label>Hospital</label>
        <select value={hospital} onChange={(e) => setHospital(e.target.value)} required>
          <option value="">Select Hospital</option>
          {hospitals.map(hospital => (
            <option key={hospital.id} value={hospital.hosp_id}>{hospital.hosp_name}</option>
          ))}
        </select>
        
        <button type="submit">Submit</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default DonateBloodForm;
