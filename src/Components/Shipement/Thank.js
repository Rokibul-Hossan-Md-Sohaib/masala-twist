import React from 'react';
import thank from '../../image/thank.gif'
import thank2 from '../../image/thank2.png'
import nav from '../../image/navlogo.png'
import { Link } from 'react-router-dom';
const Thank = () => {
    return (
        <div>
            <Link to="/">
             <img class="" style={{width:"90px", marginRight:"10px"}} src={nav} alt="nav" />
             </Link>
              <div className="login-page container">
             
      <div className="row align-items-center">
      <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={thank} alt="" />
        </div>
        <div className="col-md-6 shadow p-5">
            <h4 className="text-danger">I am Coming<h1 className="text-warning font-italic">masala twist</h1></h4>

          <div className="from-group mt-3">
          <img className="img-fluid" src={thank2} alt="" />
          </div>
        </div>
       
      </div>
    </div>
        </div>
    );
};

export default Thank;