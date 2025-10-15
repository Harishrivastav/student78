import { Route, Routes } from 'react-router-dom';
import StudentLogin from '../components/StudentLogin';
import StudentProfile from '../components/StudentProfile';

const StudentPage = ({ studentInfo, setStudentInfo }) => (
  <Routes>
    <Route path="/" element={<StudentLogin setStudentInfo={setStudentInfo} />} />
    <Route path="/profile" element={<StudentProfile studentInfo={studentInfo} />} />
  </Routes>
);

export default StudentPage;
