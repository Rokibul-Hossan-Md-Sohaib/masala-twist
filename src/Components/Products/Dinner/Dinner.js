import React from 'react';
import dinner1 from '../../../image/din1.png'
import dinner2 from '../../../image/din2.png'
import dinner3 from '../../../image/din3.png'
import dinner4 from '../../../image/din4.png'
import dinner5 from '../../../image/din5.png'
import dinner6 from '../../../image/din6.png'
import AddToCard from '../../AddToCard/AddToCard';
import Footer from '../../Sheared/Footer/Footer';
import ShearNav from '../../Sheared/ShearNav/ShearNav';
import DinnerProduct from '../DinnerProduct/DinnerProduct';


const Dinner = () => {

    const dinnerItems = [
        {
            key: "din1",
            category: "dinner",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: dinner1,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "din2",
            category: "dinner",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: dinner2,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "din3",
            category: "dinner",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: dinner3,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "din4",
            category: "dinner",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: dinner4,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "din5",
            category: "dinner",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: dinner5,
            price: 15.99,
            name: "Beef Steak",
        },
        {
            key: "din6",
            category: "dinner",
            description:
                "If you can boil water and fry an egg, you can make this recipe! There are many versions, but this is the “Sierra” household’s version —a bed of rice topped with tomato sauce and a fried egg. How much easier can dinner be?!",
            photo: dinner6,
            price: 15.99,
            name: "Beef Steak",
        }

    ]
    return (
        <section className="service-container mt-5">
        <div className="text-center">
            <ShearNav/>
            <AddToCard/>
         
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    dinnerItems.map(dinnerPro => <DinnerProduct dinnerData={dinnerPro} />)
                }
            </div>
        </div>

            <Footer/>
  
    </section>
    );
};

export default Dinner;