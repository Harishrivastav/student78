import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacultyForgetPassword from './FacultyForgetPassword';
import Navbar from './Navbar';

const FacultyLogin = () => {
  const [showForgotPage, setShowForgotPage] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  if (showForgotPage) {
    return <FacultyForgetPassword />
  }

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/api/faculty/login', {
        email,
        password
      })
      alert('Faculty Login Successful')
      // Agar backend JWT token bhej raha hai
      localStorage.setItem('facultyToken', response.data.token)
      // Navigate to faculty profile page
      navigate('/faculty/profile')
    } catch(err) {
      alert(err.response?.data?.msg || 'Login failed')
    }
  }

  const linkStyle = {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 'bold'
  }

  return (
    <div> 
      <Navbar/>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          width: '350px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Faculty Login</h2>
          <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid #ccc'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid #ccc'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Login
            </button>
          </form>

          <p style={{ marginTop: '15px' }}>
            <span onClick={() => setShowForgotPage(true)} style={linkStyle}>
              Forgot Password?
            </span>
          </p>

          <p>
            <Link to="/faculty/register" style={linkStyle}>
              New User? Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FacultyLogin
