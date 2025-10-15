import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? 'red' : 'blue',
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',  // distributes links evenly
      alignItems: 'center',
      width: '100%',
      padding: '10px 0',
      background: '#eee'
    }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/student" style={linkStyle}>Student</NavLink>
      <NavLink to="/faculty" style={linkStyle}>Faculty</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact Us</NavLink>
      <NavLink to="/career" style={linkStyle}>Career</NavLink>
    </nav>
  );
};

export default Navbar;
