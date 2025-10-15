import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FacultyForgetPassword from './components/FacultyForgetPassword';
import FacultyForm from './components/FacultyFrom';
import FacultyLogin from './components/FacultyLogin';
import StudentForgetPassword from './components/StudentForgetPassword';
import StudentForm from './components/StudentFrom';
import Career from './pages/Career';
import ClassPage from './pages/ClassPage';
import Contact from './pages/Contact';
import FacultyPage from './pages/FacultyPage';
import Home from './pages/Home';
import StudentPage from './pages/StudentPage';

const App = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [facultyInfo, setFacultyInfo] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Student Routes */}
        <Route
          path="/student"
          element={<StudentPage studentInfo={studentInfo} setStudentInfo={setStudentInfo} />}
        />
        <Route
          path="/student/profile"
          element={studentInfo ? <StudentPage studentInfo={studentInfo} /> : <Navigate to="/student" />}
        />
        <Route path="/student/forgot-password" element={<StudentForgetPassword/>} />
        <Route path="/student/register" element={<StudentForm/>} />
   
        {/* Faculty Routes */}
        <Route
          path="/faculty"
          element={<FacultyPage facultyInfo={facultyInfo} setFacultyInfo={setFacultyInfo} />}
        />
        <Route
          path="/faculty/profile"
          element={facultyInfo ? <FacultyPage facultyInfo={facultyInfo} /> : <Navigate to="/faculty" />}
        />
        <Route path="/faculty" element={<FacultyLogin />} />
        <Route path="/faculty/profile" element={<FacultyPage/>} />
        <Route path="/faculty/forgot-password" element={<FacultyForgetPassword/>} />
        <Route path="/faculty/register" element={<FacultyForm/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career/>} />


        {/* Class Page */}
        <Route path="/class" element={<ClassPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
