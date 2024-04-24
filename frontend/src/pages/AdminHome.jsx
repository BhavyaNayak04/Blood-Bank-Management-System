import { useState, useEffect } from 'react';
import axios from 'axios';
import '../global.css' // Import CSS file for styling

export default function AdminHome() {
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalQueries, setTotalQueries] = useState(0);

  useEffect(() => {
    // Fetch total number of donors
    axios.get('http://localhost:8081/total-donors')
      .then(response => {
        setTotalDonors(response.data.total_donors);
      })
      .catch(error => {
        console.error('Error fetching total donors:', error);
      });

    // Fetch total number of queries
    axios.get('http://localhost:8081/total-queries')
      .then(response => {
        setTotalQueries(response.data.total_queries);
      })
      .catch(error => {
        console.error('Error fetching total queries:', error);
      });
  }, []);

  return (
    <div className="admin-home">
      <h2>Welcome, Admin!</h2>
      
      <div className="admin-card">
        <h3>Donors Available</h3>
        <p>{totalDonors}</p>
      </div>
      
      <div className="admin-card">
        <h3>Pending Queries</h3>
        <p>{totalQueries}</p>
      </div>
    </div>
  );
}
