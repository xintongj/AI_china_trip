import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container header-content">
        <NavLink to="/" className="logo">AIChinatrip</NavLink>
        <nav className="nav-links">
          <NavLink to="/"       className={({isActive})=> isActive?'active':''}>Home</NavLink>
          <NavLink to="/destinations" className={({isActive})=> isActive?'active':''}>Destinations</NavLink>
          <NavLink to="/how-it-works" className={({isActive})=> isActive?'active':''}>How It Works</NavLink>
          <NavLink to="/partners"      className={({isActive})=> isActive?'active':''}>Partners</NavLink>
          <NavLink to="/contact"       className={({isActive})=> isActive?'active':''}>Contact</NavLink>
        </nav>
        <div className="auth-buttons">
          <NavLink to="/login" className="btn btn-outline">Log In</NavLink>
          <NavLink to="/signup"className="btn btn-primary">Sign Up</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
