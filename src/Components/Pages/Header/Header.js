import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Lunch from '../Foods/Lunch/Lunch';
import MakeSearch from '../MakeSearch/MakeSearch';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome'
import Footer from '../../Sheared/Footer/Footer'
const Header = () => {
    return (
        <div>
            <Navbar/>
            <MakeSearch/>
           <Lunch/>
            <CustomerReview/>
          <Welcome/>
         <Footer/>
        </div>
    );
};

export default Header;