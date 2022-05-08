import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div
      style={{
        padding: '10px',
        boxShadow: '5px 5px 5px #888888',
      }}
    >
      <nav class="navbar navbar-expand-lg font-fluid navbar-light bg-white container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h6 class="fs-3"> BiZCrunch </h6>
          </a>
          <button
            class="navbar-toggler custom-toggler navbar-toggler-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul
              style={{ listStyle: 'none' }}
              class="navbar-nav me-auto mb-2 mb-lg-0"
            ></ul>
            <div class="d-flex">
              <li style={{ listStyle: 'none' }} class="nav-item fs-3">
                Blog
              </li>
              <li style={{ listStyle: 'none' }} class="nav-item fs-3">
                About Us
              </li>
              <li style={{ listStyle: 'none' }} class="nav-item fs-3">
                {' '}
                Join Team
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
