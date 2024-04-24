import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../global.css'; // Import CSS file for styling

function SearchResult() {
  const location = useLocation();
  const searchResults = location.state ? location.state.searchResults : [];
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const handleInquire = (donor) => {
    setShowInquiry(true);
    setSelectedDonor(donor);
  };

  const handleClose = () => {
    setShowInquiry(false);
    setSelectedDonor(null);
  };

  return (
    <div className='parent' style={{backgroundColor:'#e0c5c5'}}>
      <h1 style={{textAlign:'center', paddingTop:'30px'}}>Available Blood</h1>
      <div className="search-results-container">
        {searchResults.length === 0 ? (
          <div className='nodatafound'>No data found</div>
        ) : (
          searchResults.map(donor => (
            <div key={donor.d_id} className="search-result-card">
              <h2>{donor.hosp_name}</h2>
              <p>Donor: {donor.d_name}</p>
              <p>Phone Number: {donor.d_mobile}</p>
              <button className="inquire-button" onClick={() => handleInquire(donor)}>Inquire</button>
            </div>
          ))
        )}
      </div>
      {showInquiry && (
        <div className="inquiry-modal">
          <div className="inquiry-details">
            <button className="close-button" onClick={handleClose}>x</button>
            {selectedDonor && (
              <>
                <h2>Inquiry Details</h2>
                <p>Donor: {selectedDonor.d_name}</p>
                <p>Age: {selectedDonor.d_age}</p>
                <p>Gender: {selectedDonor.d_gender}</p>
                <p>Phone Number: {selectedDonor.d_mobile}</p>
                <br/>
                <p><h4>Hospital Address:</h4>{selectedDonor.hosp_add}</p>
                <p><h4>Contact:</h4> +8250-243-3432-324</p>
                {/* Add more donor information as needed */}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
