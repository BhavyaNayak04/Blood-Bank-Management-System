import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../global.css';
import { useNavigate } from 'react-router-dom';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    console.log(localStorage.getItem('loggedIn'));
     if (!localStorage.getItem('loggedIn')) {
      navigate('/login'); // Redirect to login page if not logged in
    }

    // Fetch feedback data from the backend
    axios.get('http://localhost:8081/feedbacks')
      .then(response => {
        setFeedbacks(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedbacks:', error);
      });
  }, []);

  const handleResolve = (id) => {
    axios.delete(`http://localhost:8081/feedbacks/${id}`)
      .then(response => {
        console.log('Feedback deleted:', response.data);
        toast.success('Feedback resolved successfully');
        // Update the feedbacks list after deletion
        setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.f_id !== id));
      })
      .catch(error => {
        toast.error('Failed to resolve feedback');
        console.error('Error resolving feedback:', error);
      });
  };

  return (
    <div className="donors-container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Feedbacks</h1>
      <table className="donors-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map(feedback => (
            <tr key={feedback.f_id}>
              <td>{feedback.f_name}</td>
              <td>{feedback.f_email}</td>
              <td>{feedback.f_phone}</td>
              <td>{feedback.f_message}</td>
              <td>
                <button className="resolve-button" onClick={() => handleResolve(feedback.f_id)}>Resolve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default FeedbackList;
