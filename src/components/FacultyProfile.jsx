
const FacultyProfile = ({ facultyInfo }) => {
  if (!facultyInfo) return <p>Please login first.</p>;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Faculty Profile</h2>
      <p><b>Name:</b> {facultyInfo.name}</p>
      <p><b>Email:</b> {facultyInfo.email}</p>
      <p><b>Department:</b> {facultyInfo.department}</p>
      <p><b>Subjects:</b> {facultyInfo.subjects.join(', ')}</p>
      <p><b>Contact:</b> {facultyInfo.contact}</p>
    </div>
  );
};

export default FacultyProfile;
