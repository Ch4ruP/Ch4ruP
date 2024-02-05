import { useState } from 'react'
import './App.css'
import Education from  './components/Education';
import Skills from './components/Skills';
import About from './components/About';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink
} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <div className="page-header">
          <h1 className='page-title'>Charu Patel</h1>
          <div className='nav'>
            <NavLink to="/" className={({ isActive }) =>
                isActive ? "current-page" : "navbar-element"}>
              About
            </NavLink>
            <NavLink to="/education" className={({ isActive }) =>
                isActive ? "current-page" : "navbar-element"}>
              Education
            </NavLink>
            <NavLink  to="/skills" className={({ isActive }) =>
                isActive ? "current-page" : "navbar-element"}>
              Skills
            </NavLink>
          </div>
          <Routes className="load-page">
            <Route
              exact
              path="/"
              element={<About />}
            />
            <Route
              exact
              path="/education"
              element={<Education />}
            />
            <Route
              exact
              path="/skills"
              element={<Skills />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
