// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Perform any logout actions here (e.g., clearing session, etc.)
//     // Then navigate to the home page
//     navigate('/home');
//   }, [navigate]);

//   return null; // Render nothing because this component only performs a redirect
// };

// export default Logout;


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the 'loggedIn' item from local storage
    localStorage.removeItem('loggedIn');

    // Navigate to the home page
    navigate('/home');
  }, [navigate]);

  return null; // Render nothing because this component only performs a redirect
};

export default Logout;
