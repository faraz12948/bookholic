import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowReviews = (props) => {
    const {name,text,rating}=props.review;
    return (
        
  
    <Col>
      <Card>
        <Card.Body>
          <Card.Title><span style={{fontWeight:'400',color:'grey',fontSize:'20px'}}>from:</span>{name}</Card.Title>
          <Card.Text>
            {text}
           <div className='mt-3'>
           <span>
              <Rating
                className="text-warning"
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
              <strong> ({rating})</strong>
            </span>
           </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  

    );
};

export default ShowReviews;