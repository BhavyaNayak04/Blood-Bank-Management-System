import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './bloodsearch.css'; // Import CSS file for styling

function BloodSearchForm() {
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');
  const [bloodGroups, setBloodGroups] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blood groups from the backend
    axios.get('http://localhost:8081/blood-groups')
      .then(response => {
        setBloodGroups(response.data);
      })
      .catch(error => {
        console.error('Error fetching blood groups:', error);
      });

    // Fetch cities from the backend
    axios.get('http://localhost:8081/cities')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/search-blood', { bloodGroup, city })
      .then(response => {
        console.log('Search results:', response.data);
        navigate('/search-results', { state: { searchResults: response.data } });
      })
      .catch(error => {
        console.error('Error searching blood:', error);
      });
  };

  return (
    <div className='parent' style={{backgroundColor: '#e0c5c5'}}>
      <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>Search for a Blood Group</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <div className="custom-dropdown">
              <select
                id="bloodGroup"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map(group => (
                  <option key={group.bg_id} value={group.bg_id}>{group.bg_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <div className="custom-dropdown">
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="submit-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default BloodSearchForm;
