import React from 'react';
import ShearNav from '../../Sheared/ShearNav/ShearNav';
import BreakfastProduct from '../BreakfastProduct/BreakfastProduct';
import { breakfastItem } from '../ProductBrk/ProductBrk';

const Breakfast = () => {
  
    return (
        <section className="service-container mt-5">
        <div className="text-center">
            <ShearNav/>
            <h5 style={{ color: "#1CC7C1" }}>Our Services</h5>
         
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    breakfastItem.map(breakfastPro => <BreakfastProduct breakfastData={breakfastPro} />)
                }
            </div>
        </div>
    </section>
    );
};

export default Breakfast;