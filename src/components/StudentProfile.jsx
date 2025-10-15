
const StudentProfile = ({ studentInfo }) => {
  if (!studentInfo) return <p>Please login first.</p>;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Student Profile</h2>
      <p><b>Name:</b> {studentInfo.name}</p>
      <p><b>Class:</b> {studentInfo.class}</p>
      <p><b>Marks:</b> {studentInfo.marks}</p>
      <p><b>Address:</b> {studentInfo.address}</p>
      <p><b>Parents:</b> {studentInfo.parents}</p>
      <p><b>Category:</b> {studentInfo.category}</p>
      <p><b>Gender:</b> {studentInfo.gender}</p>
    </div>
  );
};

export default StudentProfile;
