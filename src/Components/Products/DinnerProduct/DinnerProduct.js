import React from 'react';
import { useStateValue } from '../../Sheared/Context/StateProvider';

const DinnerProduct = ({dinnerData}) => {
    const [{basket} , dispatch] =useStateValue()

    console.log("this is baskety", basket)
    // const [card, setCard] =useState([])
    const handleAddProduct = () => {
       dispatch({
           type: "ADD_TO_BASKET",
           item:{
               key:dinnerData.key,
               category:dinnerData.category,
               name:dinnerData.name,
               photo:dinnerData.photo,
               price:dinnerData.price,
               description:dinnerData.description
           },
       });
    };
    return (
        <div className='col-md-4 text-center'>
            <img style={{ height: "150px" ,marginTop: "30px"}}  src={dinnerData.photo} alt="" />
            <h4 className="mt-3 mb-3" >{dinnerData.name}</h4>
           <p className="text-primary">${dinnerData.price}</p>
           <button onClick={() =>handleAddProduct(dinnerData)} className="btn btn-success">Buy ${dinnerData.price}</button>
        </div>
    );
};

export default DinnerProduct;