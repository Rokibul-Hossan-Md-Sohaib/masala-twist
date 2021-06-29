import React from 'react';
import CustomerReviewData from '../CustomerReviewData/CustomerReviewData';
import avatar1 from '../../../image/avatar1.png'
import './CustomerReview.css'

const reviewData = [
    {
        title : 'Delicious Food',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Creed',
        authorImg : avatar1,
        date : '23 April 2019'
    },
    {
        title : 'Fresh Food and Nice Behaivior',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Revel',
        authorImg : avatar1,
        date : '23 April 2019'
    },
    {
        title : 'Amazing Food',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Anthoni',
        authorImg : avatar1,
        date : '23 April 2019'
    },
]

const CustomerReview = () => {
    return (
        <section className="review my-5 mb-5">
           <div className="container ">
               <div className="section-header ">
                    <h5 style={{color:"#12D0D9", marginTop:"170px"}} className="text-uppercase ">Customer Reviews</h5>
                    <h1 className="font-weight-bold">From Our News Feed</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviewData.map(review => <CustomerReviewData reviewData={review} key={review.title}/>)
                    }
               </div>
           </div>
           </section>
    );
};

export default CustomerReview;