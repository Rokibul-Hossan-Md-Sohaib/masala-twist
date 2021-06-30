import React, { useContext, useState } from 'react';
import { getBasketTotal } from '../Sheared/Context/reducer';
import { useStateValue } from '../Sheared/Context/StateProvider';
import ReviewItem from './ReviewItem';
import Subtotal from './Subtotal';
import image from '../../image/brk2.png'
import nav from '../../image/navlogo.png'
import { Link } from 'react-router-dom';


const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket)

  return (
    <section className="features-service">
      <div className="row mb-5">
        <div className="col-md-6 mr-5" >
         
        <Link to="/">
             <img class="" style={{width:"90px", marginRight:"10px"}} src={nav} alt="nav" />
             </Link>
            <h1 className="text-warning font-italic">You Food List</h1>
            {basket.map(item => (
              <ReviewItem
                key={item.key}
                name={item.name}
                photo={item.photo}
                description={item.description}
                price={item.price}
                category={item.category}
              />
            ))}

          </div>
          <div className="col-md-5 mr-5 " style={{ marginRight: '14px' , marginTop: '100px'}}>
            <Subtotal />
          </div>
          {/* <div className="d-flex" style={{marginLeft:'66rem'}}>
                    <Subtotal />
                </div> */}
        </div>
            </section>


      )
            };



      export default Review;