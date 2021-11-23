import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="home" id="home">
      <h1>APOD NASA</h1>
      <NavLink to="/explore" className="link home-link">
        Explore
      </NavLink>
      <NavLink to="/neo" className="link home-link">
        NEO
      </NavLink>
      <NavLink to="/profil" className="link home-link">
        Profile
      </NavLink>
    </div>
  )
}
