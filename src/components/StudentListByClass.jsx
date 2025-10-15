import axios from 'axios';
import { useEffect, useState } from 'react';

const StudentListByClass = ({ selectedClass }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (selectedClass) {
      axios.get(`https://your-backend-api.com/class/${selectedClass}/students`)
        .then(res => setStudents(res.data))
        .catch(() => setStudents([]));
    }
  }, [selectedClass]);

  return (
    <div>
      <h3>{selectedClass || "Select a class"}</h3>
      <ul>
        {students.map(s => <li key={s.id}>{s.name}</li>)}
      </ul>
    </div>
  );
};

export default StudentListByClass;
