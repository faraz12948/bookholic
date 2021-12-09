import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    



    const onSubmit = data => {
        console.log(data)
       
        fetch('https://stormy-gorge-80832.herokuapp.com/review',{
            method:'POST',
            headers:{
                'content-type':'application/json',

            },
            body:JSON.stringify(data)
            

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            alert("review added")
            reset()
        })
    };
    return (
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='col form-parent col-md-5 mt-5 rounded-3'>
            <form className="form mt-3" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="text" maxLength="60" defaultValue="" {...register("text")} />
            <input type="number" min="0" step="0.01" max="5" placeholder="rating 0-5" defaultValue="" {...register("rating")} />
            

            <input type="submit" style={{backgroundColor:'goldenrod', color:'white', border:'1px solid grey',fontWeight:'bold', marginBottom:'15px'}} />
            </form>



            </div>
       </div>
    );
};

export default AddReview;