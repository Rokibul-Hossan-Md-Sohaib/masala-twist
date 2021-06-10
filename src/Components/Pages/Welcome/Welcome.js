import React from 'react';
import chef from '../../../image/chef1.png'
import chef2 from '../../../image/chef3.png'


import './Welcome.css'

const Welcome = () => {
    return (
        < section className="welcome">
        <div className="container">
            <div className="row ">
                <div className="col-md-4 d-none d-md-block">
                    <img  src={chef} alt="" />
                </div>
                <div className="col-md-4 py-5" >
                  

           <h3 className="text-danger">Welcome To <br /><h1 className="text-success">masala twist house</h1></h3>
           <p className="text-secondary">We Provide You the best services and fresh foods <br /><small className="text-secondary">your healthy food is our duty</small></p>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <img  src={chef2} alt="" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Welcome;