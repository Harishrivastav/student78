import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FacultyForm({faculty,onSuccess}){
  const [form,setForm]=useState({name:'',email:'',department:'',subjects:'',contact:''})
  useEffect(()=>{ if(faculty) setForm({...faculty,subjects: (faculty.subjects||[]).join(',')}) },[faculty])
  const change=e=>setForm({...form,[e.target.name]:e.target.value})
  const submit=async e=>{
    e.preventDefault()
    const payload={...form,subjects: form.subjects.split(',').map(s=>s.trim())}
    try{
      if(faculty) await axios.put('/api/faculty/'+faculty._id,payload)
      else await axios.post('/api/faculty',payload)
      onSuccess && onSuccess()
    }catch(err){ alert('Error') }
  }
  return (
    <form onSubmit={submit} style={{maxWidth:500}}>
      <div style={{margin:'8px 0'}}><label>Name</label><input name="name" value={form.name} onChange={change} required /></div>
      <div style={{margin:'8px 0'}}><label>Email</label><input name="email" value={form.email} onChange={change} required /></div>
      <div style={{margin:'8px 0'}}><label>Department</label><input name="department" value={form.department} onChange={change} required /></div>
      <div style={{margin:'8px 0'}}><label>Subjects (comma)</label><input name="subjects" value={form.subjects} onChange={change} required /></div>
      <div style={{margin:'8px 0'}}><label>Contact</label><input name="contact" value={form.contact} onChange={change} required /></div>
      <button type="submit">Save Faculty</button>
    </form>
  )
}
