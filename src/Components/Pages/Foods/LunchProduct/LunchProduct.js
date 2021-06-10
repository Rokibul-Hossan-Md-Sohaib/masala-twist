import React from 'react';

const LunchProduct = ({lunchData}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{ height:"150px"}} src={lunchData.photo} alt="" />
            <h5 className="mt-5 mb-3" >{lunchData.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat?</p>
        <p className="text-primary">${lunchData.price}</p>
        </div>
    );
};

export default LunchProduct;