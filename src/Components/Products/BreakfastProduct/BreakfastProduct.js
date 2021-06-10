import React from 'react';

const BreakfastProduct = ({ breakfastData }) => {
    return (

        <div className='col-md-4 text-center'>
            <img style={{ height: "150px" }} src={breakfastData.photo} alt="" />
            <h5 className="mt-5 mb-3" >{breakfastData.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat</p>
            <p className="text-primary">${breakfastData.price}</p>
        </div>

    );
};

export default BreakfastProduct;