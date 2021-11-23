import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { AiFillHome, AiFillProfile } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { FaRandom } from 'react-icons/fa'

export default function navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="link nav-link">
        <AiFillHome className="icon" /> Home
      </NavLink>
      <NavLink to="/explore" className="link nav-link">
        <MdExplore className="icon" /> Explore
      </NavLink>
      <NavLink to="/random" className="link nav-link">
        <FaRandom className="icon" /> Random
      </NavLink>
      <NavLink to="/profile" className="link nav-link">
        <AiFillProfile className="icon" /> Profile
      </NavLink>
    </div>
  )
}
