import React from 'react';
import nav from '../../../image/navlogo.png'
import './Navbar.css';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container-fluid">          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0">
            
            {/* <li class="nav-item " >
                <img class="" style={{width:"90px"}} src={nav} alt="nav" />
              </li> */}
              
              <li class="nav-item other">
                <a  style={{marginLeft:"80px"}} class="nav-link mr-5 text-warning"  aria-current="page" href="#">Home</a>
              </li>
              
            
              <li class="nav-item" >
                <a class="nav-link mr-5 text-warning" href="/login">Login</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link mr-5 text-warning" href="/appointment">Sign In</a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    );
};

export default Navbar;