import React from 'react';
import lunch1 from '../../../../image/lunch1.png'
import lunch2 from '../../../../image/lunch2.png'
import lunch3 from '../../../../image/lunch3.png'
import lunch4 from '../../../../image/lunch4.png'
import lunch5 from '../../../../image/lunch5.png'
import lunch6 from '../../../../image/lunch6.png'
import ShearNav from '../../../Sheared/ShearNav/ShearNav';
import LunchProduct from '../LunchProduct/LunchProduct';
const Lunch = () => {

    const lunchItems = [
        {
            key: "lu1",
            category: "lunch",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: lunch1,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "lu2",
            category: "lunch",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: lunch2,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "lu3",
            category: "lunch",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: lunch3,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "lu4",
            category: "lunch",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: lunch4,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "lu5",
            category: "lunch",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: lunch5,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "lu6",
            category: "lunch",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: lunch6,
            price: 15.99,
            name: "Beef Steak",
        }


    ]
    return (
        <section className="service-container mt-5 mb-5">
            <div className="text-center">
            <ShearNav/>
                <h5 style={{ color: "#1CC7C1" }}>Our Services</h5>
             
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        lunchItems.map(lunchPro => <LunchProduct lunchData={lunchPro} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Lunch;