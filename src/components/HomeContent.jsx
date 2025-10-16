import React from 'react'
import Notifications from './Notifications'

export default function HomeContent(){
  return (
    <div className="hero">
      <div>
        <img src="https://via.placeholder.com/800x400?text=School+Hero" alt="hero" />
      </div>
      <Notifications />
    </div>
  )
}
