
import React from 'react';

//imported bootstrap
//using bootstrap
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor:'#313438' , padding:'30px' , marginTop:'80px' , marginBottom:'20px'}}>
        <h3 style={{color:'white'}}>Contact Us</h3>
         <div className='container' style={{width:'40%'}}>
         <Form >
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label style={{color:'white'}} >Email address</Form.Label>
             <Form.Control type="email" placeholder="name@example.com" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label style={{color:'white'}} >Type here</Form.Label>
             <Form.Control as="textarea" rows={3} />
           </Form.Group>
           
       </Form>
       
           <Button variant="outline-danger">Send</Button>
         </div>
           
       
   </div>
    );
};
//this is a contact form 
export default Contact;
