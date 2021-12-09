import React from 'react';
import { Button } from 'react-bootstrap';

const ShowOrder = (props) => {
    const {name,img,description} = props.order?.cart[0];
    const {_id,status} = props.order;
    return (
        <div className="my-5" >
          
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                 <img src={img} style={{height:"200px" , borderRadius:"5px"}} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">Ordered by:{props.order.name}</small></p>
                  {
                    status==true?<p className="card-text"><small className="text-muted">Status:Shipped</small></p>:
                    <p className="card-text"><small className="text-muted">Status:Pending</small></p>

                  }
                  
                 
                </div>
                
               <div>
                <Button variant="danger" className='mx-3 my-3' onClick={()=>props.handleDelete(_id)} >Delete Order</Button>
                
                {
                  props.showBtn==true?<Button variant="warning" className="my-3" onClick={()=>props.handleStatus(_id)}>Approve</Button>:
                  ''
                }
               </div>
              </div>
            </div>
        </div>

    </div>
    );
};

export default ShowOrder;