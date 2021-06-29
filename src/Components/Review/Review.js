import React, { useContext, useState } from 'react';
import { getBasketTotal } from '../Sheared/Context/reducer';
import { useStateValue } from '../Sheared/Context/StateProvider';
import ReviewItem from './ReviewItem';
import Subtotal from './Subtotal';
import image from '../../image/brk2.png'



const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket)

  return (
    <section className="features-service">
      <div className="row mb-5">
        <div className="col-md-6 mr-5" >
         

            <h1>You Food List</h1>
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