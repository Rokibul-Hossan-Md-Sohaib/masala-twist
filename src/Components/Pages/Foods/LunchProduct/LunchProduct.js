import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../Sheared/Context/StateProvider';
const LunchProduct = ({lunchData}) => {
    const [{basket} , dispatch] =useStateValue()

    console.log("this is baskety", basket)
    // const [card, setCard] =useState([])
    const handleAddProduct = () => {
       dispatch({
           type: "ADD_TO_BASKET",
           item:{
               key:lunchData.key,
               category:lunchData.category,
               name:lunchData.name,
               photo:lunchData.photo,
               price:lunchData.price,
               description:lunchData.description
           },
       });
    };
    return (    
      
        <div className='col-md-4 text-center'>
            <img style={{ height:"150px",paddingTop:"40px"}} src={lunchData.photo} alt="" />
            <h5 className="mt-3 mb-3" >{lunchData.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat?</p>
       <button onClick={() =>handleAddProduct(lunchData)} className="btn btn-success">Buy ${lunchData.price}</button>
       
        </div>
   
    );
};

export default LunchProduct;