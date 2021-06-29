import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../../../image/navlogo.png'
import './ShearNav.css'

const ShearNav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container-fluid">          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0" >
          <Link to="/">
          <li class="nav-item " >
                <img class="" style={{width:"90px"}} src={nav} alt="nav" />
              </li>
          </Link>
              <li class="nav-item " >
                <a class="nav-link pr-5  text-warning" style={{marginLeft:"450px"}} aria-current="page" href="lunch">Lunch</a>
              </li>
              <li class="nav-item" >
                <a class="nav-link pr-5 text-warning" href="/dinner">Dinner</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link  text-warning" href="/breakfast">Brakfast</a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    );
};

export default ShearNav;