import { useState } from 'react';
import ClassList from '../components/ClassList';
import StudentListByClass from '../components/StudentListByClass';

const ClassPage = () => {
  const [selectedClass, setSelectedClass] = useState('');

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '20px' }}>
      <ClassList onSelect={setSelectedClass} />
      <StudentListByClass selectedClass={selectedClass} />
    </div>
  );
};

export default ClassPage;