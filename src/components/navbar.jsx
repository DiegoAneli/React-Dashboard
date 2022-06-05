import React from 'react'
import { NavLink } from "react-router-dom";
import Login from './login';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
        <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        
        <li class="nav-item">
        <Login />
        </li>
      </ul>
    </div>
  </nav>
  )
}
export default Navbar;