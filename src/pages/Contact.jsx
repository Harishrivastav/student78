import Navbar from '../components/Navbar';
const Contact = () => {
  return (
    <div>
        <Navbar/>
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Name:</label><br/>
          <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Email:</label><br/>
          <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Message:</label><br/>
          <textarea placeholder="Your Message" rows="4" style={{ width: '100%', padding: '8px' }} />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
