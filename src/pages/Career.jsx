
import Navbar from '../components/Navbar';
const careersData = [
  {
    subject: "Math",
    image: "https://via.placeholder.com/150?text=Math",
    posts: ["Engineer", "Pilot", "Pharmacist", "Research AI/ML"]
  },
  {
    subject: "Bio/Science",
    image: "https://via.placeholder.com/150?text=Bio/Science",
    posts: ["Doctor", "Nurse", "Pharmacist", "Research Scientist"]
  },
  {
    subject: "Commerce",
    image: "https://via.placeholder.com/150?text=Commerce",
    posts: ["Accountant", "Financial Analyst", "Business Manager"]
  },
  {
    subject: "Arts",
    image: "https://via.placeholder.com/150?text=Arts",
    posts: ["Lawyer", "Judge", "Civil Services"]
  }
];

const Career = () => {
  return (
    <div>
         <Navbar/>
    <div style={{ padding: '20px' }}>
      <h1>Career Opportunities by Stream</h1>
      <p>Choose your stream to see suitable career options:</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {careersData.map((career, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '15px',
            width: '220px',
            textAlign: 'center',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
          }}>
            <img src={career.image} alt={career.subject} style={{ width: '100%', borderRadius: '10px' }} />
            <h2>{career.subject}</h2>
            <ul style={{ textAlign: 'left' }}>
              {career.posts.map((post, idx) => (
                <li key={idx}>{post}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Career;
