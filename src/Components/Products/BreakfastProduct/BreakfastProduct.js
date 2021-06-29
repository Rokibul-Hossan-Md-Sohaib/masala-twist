import React from 'react';
import { useStateValue } from '../../Sheared/Context/StateProvider';

const BreakfastProduct = ({ breakfastData }) => {
    const [{basket} , dispatch] =useStateValue()

    console.log("this is baskety", basket)
    // const [card, setCard] =useState([])
    const handleAddProduct = () => {
       dispatch({
           type: "ADD_TO_BASKET",
           item:{
               key:breakfastData.key,
               category:breakfastData.category,
               name:breakfastData.name,
               photo:breakfastData.photo,
               price:breakfastData.price,
               description:breakfastData.description
           },
       });
    };
    return (

        <div className='col-md-4 text-center'>
            <img style={{ height: "150px" ,marginTop: "30px"}} src={breakfastData.photo} alt="" />
            <h5 className="mt-2 mb-3" >{breakfastData.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat</p>
            <p className="text-primary">${breakfastData.price}</p>
            <button onClick={() =>handleAddProduct(breakfastData)} className="btn btn-success">Buy ${breakfastData.price}</button>

        </div>

    );
};

export default BreakfastProduct;