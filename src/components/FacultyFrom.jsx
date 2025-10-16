import axios from 'axios'
import { useState } from 'react'

export default function FacultyForm({ onSuccess }) {
  const [form, setForm] = useState({ 
    name: '', email: '', department: '', subjects: '', contact: '', password: '' 
  })

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    const payload = { 
      ...form, 
      subjects: form.subjects.split(',').map(s => s.trim()) 
    }

    try {
      // POST for faculty register (full URL)
      await axios.post('http://localhost:4000/api/faculty/register', payload)
      onSuccess && onSuccess()
    } catch(err) {
      alert(err.response?.data?.msg || 'Error')
    }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 500 }}>
      <div style={{ margin: '8px 0' }}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={change} required />
      </div>

      <div style={{ margin: '8px 0' }}>
        <label>Email</label>
        <input name="email" value={form.email} onChange={change} required />
      </div>

      <div style={{ margin: '8px 0' }}>
        <label>Password</label>
        <input name="password" type="password" value={form.password} onChange={change} required />
      </div>

      <div style={{ margin: '8px 0' }}>
        <label>Department</label>
        <input name="department" value={form.department} onChange={change} required />
      </div>

      <div style={{ margin: '8px 0' }}>
        <label>Subjects (comma)</label>
        <input name="subjects" value={form.subjects} onChange={change} required />
      </div>

      <div style={{ margin: '8px 0' }}>
        <label>Contact</label>
        <input name="contact" value={form.contact} onChange={change} required />
      </div>

      <button type="submit">Register Faculty</button>
    </form>
  )
}
