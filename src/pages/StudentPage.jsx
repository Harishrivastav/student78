import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentLogin from '../components/StudentLogin'
import StudentProfile from '../components/StudentProfile'

export default function StudentPage(){
  return (
    <Routes>
      <Route path="/" element={<StudentLogin />} />
      <Route path="/profile" element={<StudentProfile />} />
    </Routes>
  )
}
