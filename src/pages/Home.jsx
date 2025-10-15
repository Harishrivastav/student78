import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Home.css'; // Import CSS

const Home = () => {
  const [messages] = useState([
    "Welcome to Student Management System",
    "Admissions Open!",
    "Exam Schedule Released!",
    "New Courses Available!",
    "Library Timings Updated",
    "Exam Results Declared",
    "Scholarship Applications Open",
    "Parent-Teacher Meeting Scheduled",
    "Holiday Notice: School Closed",
    "Student Workshop This Weekend"
  ]);

  const [showNotifications, setShowNotifications] = useState(true);

  // Disable page scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-content">
        <div
          className="notifications-container"
          style={{ display: showNotifications ? 'block' : 'none' }}
        >
          <div className="notifications-header">
            <span>Notifications</span>
            <span
              className="close-btn"
              onClick={() => setShowNotifications(false)}
            >
              ×
            </span>
          </div>
          {messages.map((msg, index) => (
            <div key={index} className="notification-message">
              {msg}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
