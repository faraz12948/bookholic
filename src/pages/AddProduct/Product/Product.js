import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,img,description,_id,price}=props.product

    
    
    return (
        <div>
          
             <Col className='h-100'>
      <Card className='p-3 shadow h-100'>
        <Card.Img style={{height:"300px" , borderRadius:"5px"}} variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{fontFamily:' Georgia'}}>{name}</Card.Title>
          <Card.Text style={{fontFamily:' Times New Roman'}}>
           {description}
           
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
        
          $ {price}
          <br/>
          {
            props.delBtn?
            <Button onClick={()=>props.handleDelete(_id)}  variant="outline-success" className="mt-3"  style={{fontFamily:'Copperplate'}}>Delete product</Button>
             :
             <Link to={`/order/${_id}`}>
             <Button variant="outline-warning" className="mt-3"  style={{fontFamily:'Copperplate'}}>purchase</Button>
             </Link>
          }
       
        </Card.Footer>
        
          
      </Card>
    </Col>
            
        </div>
    );
};

export default Product;