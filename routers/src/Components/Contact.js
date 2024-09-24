import React from 'react'
import { Form, Link, Outlet } from 'react-router-dom'
import Locations from './Locations'


const Contact = () => {
  return (
    <div>
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <Link to="/home"  class="nav-link active">Home</Link>
          {/* <a class="nav-link active" aria-current="page" href="/home">Home</a> */}
        </li>
        <li class="nav-item">
        <Link to="/about"  class="nav-link active">About</Link>
          {/* <a class="nav-link active" aria-current="page" href="/about">About</a> */}
        </li>
        <li class="nav-item">
        <Link to="/contact"  class="nav-link active">Contact</Link>
          {/* <a class="nav-link active" aria-current="page" href="/contact">Contact</a> */}
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <h1>insider of Contact Page</h1>
      <Link to='location'>Search Location</Link><br/><br/>
      <Link to='form' >Fill Form</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
