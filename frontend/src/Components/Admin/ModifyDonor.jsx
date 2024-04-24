import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Donate from '../Donate/Donate';

function DonorsList() {
  const [donors, setDonors] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch donors data from the backend
    axios.get('http://localhost:8081/donor-details')
      .then(response => {
        setDonors(response.data);
      })
      .catch(error => {
        console.error('Error fetching donors:', error);
      });
  }, []);

  const handleAddDonor = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  const handleFormClose = () => {
    setShowForm(false); // Close the form when form is submitted or closed
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/donor-details/${id}`)
      .then(response => {
        console.log('Donor deleted:', response.data);
        toast.success('Record deleted successfully');
        // Update the donors list after deletion
        setDonors(prevDonors => prevDonors.filter(donor => donor.d_id !== id));
      })
      .catch(error => {
        toast.error('Failed to delete record');
        console.error('Error deleting donor:', error);
      });
  };

  return (
    <div className="donors-container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Current Donors</h1>
      <button onClick={handleAddDonor} style={{marginBottom:'10px'}}>{showForm ? 'Back' : 'Add Donor'}</button>
      {showForm ? (
        <Donate onClose={handleFormClose} />
      ) : (
        <table className="donors-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Hospital</th>
              <th>City</th>
              <th>Action</th> {/* New column for delete button */}
            </tr>
          </thead>
          <tbody>
            {donors.map(donor => (
              <tr key={donor.d_id}>
                <td>{donor.d_name}</td>
                <td>{donor.d_age}</td>
                <td>{donor.d_gender}</td>
                <td>{donor.d_mobile}</td>
                <td>{donor.hospital_name}</td>
                <td>{donor.city_name}</td>
                <td>
                  <button onClick={() => handleDelete(donor.d_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </div>
  );
}

export default DonorsList;
