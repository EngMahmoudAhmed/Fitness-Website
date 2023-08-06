import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.css'

function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light position-fixed">
      <div className="container">
        <Link className="navbar-brand text-white" to="home">Navbar</Link>
        <button className="navbar-toggler m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse m-2" id="navbarNav">
          <ul className="navbar-nav ms-auto bg-transparent border-2">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="service">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="trainer">Trainer</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="register">Register</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>

}

export default Navbar;