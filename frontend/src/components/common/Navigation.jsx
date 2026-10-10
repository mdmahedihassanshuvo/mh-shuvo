import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-4">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          MH <span className="text-gradient">SHUVO</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                to="/about"
              >
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
                to="/projects"
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === '/blog' ? 'active' : ''}`}
                to="/blog"
              >
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Button */}
          <a
            href="#"
            className="btn btn-sm btn-gradient rounded-3 px-4 fw-semibold"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}
