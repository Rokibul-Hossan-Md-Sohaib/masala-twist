import React from 'react';
import AddToCard from '../../AddToCard/AddToCard';
import Footer from '../../Sheared/Footer/Footer';
import ShearNav from '../../Sheared/ShearNav/ShearNav';
import BreakfastProduct from '../BreakfastProduct/BreakfastProduct';
import { breakfastItem } from '../ProductBrk/ProductBrk';

const Breakfast = () => {
  
    return (
        <section className="service-container mt-5">
        <div className="text-center">
            <ShearNav/>
           <AddToCard/>
         
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    breakfastItem.map(breakfastPro => <BreakfastProduct breakfastData={breakfastPro} />)
                }
            </div>
        </div>
        <Footer/>
    </section>
    );
};

export default Breakfast;