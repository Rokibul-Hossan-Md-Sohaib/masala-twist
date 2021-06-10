import React from 'react';

const CustomerReviewData = ({reviewData}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={reviewData.authorImg} alt="" />
                <div>
                    <h6 className="text-primary">{reviewData.author}</h6>
                    <p className="m-0">{reviewData.date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{reviewData.title}</h5>
                <p className="card-text text-secondary mt-4">{reviewData.description}</p>
            </div>
            
       </div>
    );
};

export default CustomerReviewData;