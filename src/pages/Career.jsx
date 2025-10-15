
import Navbar from '../components/Navbar';
const careersData = [
  {
    subject: "Math",
    image: "https://i.pinimg.com/originals/df/91/ac/df91acb7b9cefe5c0c5afbb2d054edfb.png",
    posts: ["Engineer", "Pilot", "Pharmacist", "Research AI/ML"]
  },
  {
    subject: "Bio/Science",
    image: "https://th.bing.com/th/id/OIP.LUGgekeoNmfY_CzAPUX2agHaEc?w=303&h=182&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    posts: ["Doctor", "Nurse", "Pharmacist", "Research Scientist"]
  },
  {
    subject: "Commerce",
    image: "https://th.bing.com/th/id/OIP.QkNyDZ1cofU8Co_xDnHQAAHaHa?w=178&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    posts: ["Accountant", "Financial Analyst", "Business Manager"]
  },
  {
    subject: "Arts",
    image: "https://static6.businessinsider.com/image/556df6186da811640be53b4c-1200-1562/bi_graphics_highest-paying-jobs-art-majors.png",
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
