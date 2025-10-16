import { useEffect, useState } from "react";
import Navbar from './Navbar';
const StudentProfile = () => {
  const email = localStorage.getItem('studentEmail'); 
  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log("profile page");
  console.log(email);

  useEffect(() => {
    if (!email) return;
    
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://stdbackend-lg7x.onrender.com/api/student/profile/${email}`, {
          method: 'GET',
          headers: { "Content-Type": "application/json" }
        });
        console.log("profile page succesd");

        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setStudentInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [email]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!studentInfo) return <p>No student info found</p>;

  return (
  <div><Navbar/>
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Student Profile</h2>
      <p><b>Name:</b> {studentInfo.name}</p>
      <p><b>Class:</b> {studentInfo.className}</p>
      <p><b>Marks:</b> {studentInfo.marks}</p>
      <p><b>Address:</b> {studentInfo.address}</p>
      <p><b>Parents:</b> {studentInfo.parents}</p>
      <p><b>Category:</b> {studentInfo.category}</p>
      <p><b>Gender:</b> {studentInfo.gender}</p>
      <p><b>Email:</b> {studentInfo.email}</p>
    </div>
    </div>
  );
};

export default StudentProfile;
