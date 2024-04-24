import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../global.css'; // Import global CSS file for styling
import { useNavigate } from 'react-router-dom';

export default function HospitalView() {
  const [hospitals, setHospitals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    console.log(localStorage.getItem('loggedIn'));
     if (!localStorage.getItem('loggedIn')) {
      navigate('/login'); // Redirect to login page if not logged in
    }

    // Fetch all hospital IDs and names
    axios.get('http://localhost:8081/hospitals')
      .then(response => {
        setHospitals(response.data);
      })
      .catch(error => {
        console.error('Error fetching hospitals:', error);
      });
  }, []);

  return (
    <div className="donors-container">
      <h1 style={{textAlign:'center',marginBottom:'10px'}}>Hospitals</h1>
      <table className="donors-list">
        <thead>
          <tr>
            <th>Hospital ID</th>
            <th>Hospital Name</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map(hospital => (
            <tr key={hospital.hosp_id}>
              <td>{hospital.hosp_id}</td>
              <td>{hospital.hosp_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
