import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
import Header from '../../Shared/Header/Header'

const Explore = () => {
    const [products,setProducts] = useState([])
    const {isLoading,setIsLoading}=useAuth()
    const delBtn = false;
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://stormy-gorge-80832.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{setProducts(data)
            setIsLoading(false);
        
        })

    },[])
    if(isLoading===true){
        return (<Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
      </Spinner>)
            }
    return (
       <div style={{marginTop:'80px'}}>
           <Header></Header>
            <div  style={{marginTop:'30px' , marginBottom:'30px'}}>
        <div style={{marginTop:'30px' , marginBottom:'30px'}} >
            <h3><b>Top </b><span style={{color:'goldenrod' , fontWeight:'bold'}}>Products</span></h3>
        </div>
        <div className="container">
        <Row xs={1} md={3} className="g-4">
            {
                products.map(product=><Product key={product._id} product={product} delBtn={delBtn}></Product>)
            }

        </Row>
            
        </div>
        
    </div>
       </div>
    );
};

export default Explore;