import React, { createContext, useContext, useState } from 'react';
import { lunchItems } from '../../../Products/ProductLunch/ProductLunch';
import ShearNav from '../../../Sheared/ShearNav/ShearNav';
import LunchProduct from '../LunchProduct/LunchProduct';
import AddToCard from '../../../AddToCard/AddToCard';
import Footer from '../../../Sheared/Footer/Footer';

const Lunch = () => {
    const [lunch, setLunch] = useState(lunchItems)

    return (

        <div>
            <div>
            </div>
            <section className="service-container mt-5 mb-5">

                <div className="text-center">
                    <ShearNav />
                    <AddToCard />

                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            lunch.map(lunchPro => <LunchProduct lunchData={lunchPro} key={lunchPro.key} />)
                        }
                    </div>
                </div>
            </section>
         
        </div>

    );
};

export default Lunch;