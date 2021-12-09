import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../../Shared/Header/Header';
import './AddProduct.css'

const AddProduct = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
                
     const onSubmit = data => {
                    // console.log(data)
                    
                    fetch('https://stormy-gorge-80832.herokuapp.com/products',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json',
                
                        },
                        body:JSON.stringify(data)
                        
                
                    })
                    .then(res=>res.json())
                    .then(result=>{
                        console.log(result)
                        alert("product added")
                        reset()
                    })
                };
    
    return (
        <div className='container-fluid' >
           
            <div>
                <h3 style={{fontWeight:'bold'}}>Add a product</h3>
          <div className='form-parent mt-5 p-5 rounded-3'>


          <form className="form w" style={{width:'65%'}} onSubmit={handleSubmit(onSubmit)}>

        
       
        <input   required placeholder="name" defaultValue="" {...register("name")} />
        <input   required placeholder="Price" defaultValue="" {...register("price")} />
        <input   required placeholder="Description" defaultValue="" {...register("description")} />
        <input   required placeholder="Image URL" defaultValue="" {...register("img")} />
                
        <input   type="submit" value="add" style={{backgroundColor:'#0080ff', color:'white', border:'1px solid grey',fontWeight:'bold'}}  />
        </form>






          </div>
             </div>
        </div>
    );
};

export default AddProduct;