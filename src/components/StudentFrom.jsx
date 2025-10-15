import axios from 'axios'
import { useEffect, useState } from 'react'

export default function StudentForm({ student, onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    className: '',
    age: '',
    marks: '',
    address: '',
    parents: '',
    category: '',
    gender: ''
  })

  useEffect(() => {
    if (student) setForm({ ...student })
  }, [student])

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    try {
      if (student) await axios.put('/api/students/' + student._id, form)
      else await axios.post('/api/students', form)
      onSuccess && onSuccess()
    } catch (err) {
      alert('Error')
    }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 500 }}>
      {Object.keys(form).map(k => (
        <div key={k} style={{ margin: '8px 0' }}>
          <label style={{ display: 'block', marginBottom: 6 }}>{k}</label>
          <input name={k} value={form[k] || ''} onChange={change} required />
        </div>
      ))}
      <button type="submit">{student ? 'Update' : 'Add'} Student</button>
    </form>
  )
}
