import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { AiFillHome, AiFillProfile } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { GiAsteroid } from 'react-icons/gi'

export default function navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="link nav-link">
        <AiFillHome className="icon" /> Home
      </NavLink>
      <NavLink to="/apod" className="link nav-link">
        <MdExplore className="icon" /> APOD
      </NavLink>
      <NavLink to="/neo" className="link nav-link">
        <GiAsteroid className="icon" /> NEO
      </NavLink>
      <NavLink to="/profile" className="link nav-link">
        <AiFillProfile className="icon" /> Profile
      </NavLink>
    </div>
  )
}
