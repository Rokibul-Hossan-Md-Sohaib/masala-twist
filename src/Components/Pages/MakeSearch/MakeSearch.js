import React from 'react'
import food from '../../../image/logotest.gif'
import './MakeSearch.css'
const MakeSearch = () => {
    return (

       < section className="makeserach">
            <div className="container">
                <div className="row ">
                    <div className="col-md-5 d-none d-md-block">
                        <img  src={food} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5" >
                        <h4 className="text-danger">Come Fast<h1 className="text-warning font-italic">masala twist</h1></h4>
                    <form className="picture form-inline my-2 my-lg-0 d-flex justify-content-center">
                    <input className="form-control  d-flex justify-content-center align-center" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>

                </form>
                    </div>

                </div>
            </div>
        </section>

       
    );
};

export default MakeSearch;