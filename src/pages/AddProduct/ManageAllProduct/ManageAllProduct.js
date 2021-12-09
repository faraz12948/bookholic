import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';

const ManageAllProduct = () => {

    const [products,setProducts] = useState([])
    const {isLoading,setIsLoading,user}=useAuth()
    const delBtn = true;

    useEffect(()=>{
        // setIsLoading(true)
        fetch('https://stormy-gorge-80832.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{setProducts(data)
            setIsLoading(false);
        
        })

    },[products])
   



    const handleDelete = (_id) =>{
        
        const proceed = window.confirm("Are you sure You want to delete ? ");
        if (proceed) {
  
          const url = `https://stormy-gorge-80832.herokuapp.com/product/delete/${_id}`
          fetch(url,{
              method : 'DELETE',
              
    
          })
          .then(res=>res.json())
          .then(data=>{
              
            if (data.deletedCount > 0) {
              alert("Deleted SuccessFully");
              const remainingProducts = products.filter((product) => product._id !== _id);
              setProducts(remainingProducts);
            }
                  
              
          })
  
  
  
  
        }
  
       
        
          
      }











    // if(isLoading===true){
    //     return (<Spinner animation="border" role="status">
    //      <span className="visually-hidden">Loading...</span>
    //   </Spinner>)
    //         }
    return (
        <div>
       
         <div  style={{marginTop:'30px' , marginBottom:'30px'}}>
     <div style={{marginTop:'30px' , marginBottom:'30px'}} >
         <h3><b>Top </b><span style={{color:'goldenrod' , fontWeight:'bold'}}>Products</span></h3>
     </div>
     <div className="container">
     <Row xs={1} md={3} className="g-4">
         {
             products.map(product=><Product key={product._id} product={product} delBtn={delBtn} handleDelete={handleDelete}></Product>)
         }

     </Row>
         
     </div>
     
 </div>
    </div>
    );
};

export default ManageAllProduct;