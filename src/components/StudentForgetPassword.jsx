import axios from 'axios';
import { useState } from 'react';

const StudentForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("https://stdbackend-lg7x.onrender.com/api/student/send-otp", { email });
      setMessage('Password reset link sent to your email.');
    } catch {
      setMessage('Error sending reset link. Try again.');
    }
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundColor:'#f4f4f9'}}>
      <div style={{background:'white',padding:'40px',borderRadius:'12px',boxShadow:'0 4px 15px rgba(0,0,0,0.2)',width:'350px',textAlign:'center'}}>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit} style={{ textAlign:'left' }}>
          <div style={{ marginBottom:'15px' }}>
            <label>Email:</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required style={{width:'100%',padding:'8px',borderRadius:'6px',border:'1px solid #ccc'}}/>
          </div>
          <button type="submit" style={{width:'100%',backgroundColor:'#007bff',color:'white',padding:'10px',border:'none',borderRadius:'6px',cursor:'pointer',fontWeight:'bold'}}>Send Reset Link</button>
        </form>
        {message && <p style={{marginTop:'10px',color:'green'}}>{message}</p>}
      </div>
    </div>
  )
}

export default StudentForgetPassword;
