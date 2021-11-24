import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="home" id="home">
      <h1>NASA</h1>
      <NavLink to="/apod" className="link home-link">
        APOD
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
