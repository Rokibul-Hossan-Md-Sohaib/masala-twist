import React from 'react';
import { useStateValue } from '../Sheared/Context/StateProvider';
import Subtotal from './Subtotal';

const ReviewItem = ({ key, name, description, category, photo, price }) => {
   const [{ basket } , dispatch] =useStateValue()
   const removeFromeCard =() => {
       dispatch({
           type: "REMOVE_FROM_BASKET",
           id: key,
       })
   }
       return (
     
                <div className="reviewItem">
                    <img className="reviewImg mt-5" style={{ height:"220px",paddingTop:"40px"}}  src={photo} alt="" />

                    <div className="reviewInfo">
                        <p className="reviewName">
                            {name}
                        </p>
                        <p className='reviewwDscription' style={{fontSize:"14px" ,color:"green"}}>{description}</p>
                        <p className='reviewPrice' style={{fontWeight:"bold" ,color:"red"}}>${price}</p>
                        <button onClick={removeFromeCard} className="btn btn-warning pb-3 pt-3 mt-4">Remove Food</button>
                    </div>
                </div>
            
      
        )
};

export default ReviewItem;