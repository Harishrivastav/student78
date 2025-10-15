import { Route, Routes } from 'react-router-dom';
import FacultyLogin from '../components/FacultyLogin';
import FacultyProfile from '../components/FacultyProfile';

const FacultyPage = ({ facultyInfo, setFacultyInfo }) => (
  <Routes>
    <Route path="/" element={<FacultyLogin setFacultyInfo={setFacultyInfo} />} />
    <Route path="/profile" element={<FacultyProfile facultyInfo={facultyInfo} />} />
  </Routes>
);

export default FacultyPage;
