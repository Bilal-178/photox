import React from 'react'
import { NavLink } from "react-router-dom"
import Web from "../../Assets/Path 188.png"

function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 mx-auto">


            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid">
                <NavLink className="navbar-brand" style={{ fontSize: "30px" }} to="/">Photo<span style={{ color: "#138496" }}>Clan</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-dark" aria-current="page" to="/about">Become a Professional</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-dark" aria-current="page" to="/contact">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-dark" aria-current="page" to="/videomaker">Become a professional</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-dark" aria-current="page" to="/blog">Contact us</NavLink>
                    </li>
                  </ul>
                  <img className="p-2 rounded-pill" src={Web} alt="" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
