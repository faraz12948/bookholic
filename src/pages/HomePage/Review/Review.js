import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowReviews from '../ShowReviews/ShowReviews';

const Review = () => {
const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://stormy-gorge-80832.herokuapp.com/home/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])
    return (
        <div className="container mt-5">
    <h3 className="my-5"><b>Top</b><span style={{color:'goldenrod' , fontWeight:'bold'}}> Reivews</span></h3>
               <div >
               <Row xs={1} md={2} className="g-4">
               {
                    reviews?.map(review => <ShowReviews key={review._id} review={review}></ShowReviews>)
               }
               </Row>
               </div>
            
        </div>
    );
};

export default Review;
