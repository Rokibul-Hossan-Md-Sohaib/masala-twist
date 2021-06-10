import React from 'react';

const DinnerProduct = ({dinnerData}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{ height:"150px"}} src={dinnerData.photo} alt="" />
            <h4 className="mt-5 mb-3" >{dinnerData.name}</h4>
            {/* <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat?</p> */}
        <p className="text-primary">${dinnerData.price}</p>
        </div>
    );
};

export default DinnerProduct;