i// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header        from './components/Header'
import Home          from './components/Home'
import Destinations  from './components/Destinations'
import HowItWorks    from './components/HowItWorks'
import Partners      from './components/TravelAgencies'
import Contact       from './components/Contact'
import Login         from './components/Login'
import SignUp        from './components/SignUp'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/destinations"  element={<Destinations />} />
          <Route path="/how-it-works"  element={<HowItWorks />} />
          <Route path="/partners"      element={<Partners />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/login"         element={<Login />} />
          <Route path="/signup"        element={<SignUp />} />
        </Routes>
      </main>
    </>
  )
}
