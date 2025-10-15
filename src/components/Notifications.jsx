import { useState } from 'react';

const Notifications = ({ messages }) => {
  const [visible, setVisible] = useState(true); // controls entire box visibility

  if (!visible) return null; // hide the whole component

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        <span>Notifications</span>
        <span
          onClick={() => setVisible(false)}
          style={{ cursor: 'pointer' }}
        >
          ×
        </span>
      </div>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            padding: '8px 0',
            borderBottom: index !== messages.length - 1 ? '1px solid #ddd' : 'none',
            fontSize: '14px'
          }}
        >
          {msg}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
