import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([])
    const {isLoading,setIsLoading}=useFirebase()
    const delBtn=false
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://stormy-gorge-80832.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{setProducts(data)
            setIsLoading(false);
        
        })

    },[])
    // console.log(services)
    if(isLoading===true){
        return (<Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
      </Spinner>)
            }
    
    return (
        <div  style={{marginTop:'90px' , marginBottom:'30px'}}>
            <div style={{marginTop:'30px' , marginBottom:'30px'}} >
                <h3><b>Top </b><span style={{color:'goldenrod' , fontWeight:'bold'}}>Products</span></h3>
            </div>
            <div className="container">
            <Row xs={1} md={3} className="g-4">
                {
                    products.slice(0,6).map(product=><Product key={product._id} product={product} delBtn={delBtn}></Product>)
                }
  
            </Row>
                
            </div>
            
        </div>
    );
};

export default Products;