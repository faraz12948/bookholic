import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ShowOrder from '../ShowOrder/ShowOrder';
import Header from '../../Shared/Header/Header'

const MyOrder = () => {

   

    const [myOrders,setMyOrders] = useState([])
    
    const { user } = useAuth();
    // const [showBtn,setShowBtn] = useState(false)
    const showBtn = false;

    



   
    useEffect(()=>{
        fetch(`https://stormy-gorge-80832.herokuapp.com/order/myorder?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyOrders(data))

    },[])

    // const check = myOrders.filter(myOrder=>myOrder.email==user.email)





    const handleDelete = (_id) =>{
        const proceed = window.confirm("Are you sure You want to delete ? ");
        if (proceed) {
  
          const url = `https://stormy-gorge-80832.herokuapp.com/order/delete/${_id}`
          fetch(url,{
              method : 'DELETE',
              
    
          })
          .then(res=>res.json())
          .then(data=>{
              
            if (data.deletedCount > 0) {
              alert("Deleted SuccessFully");
              const remainingUsers = myOrders.filter((user) => user._id !== _id);
              setMyOrders(remainingUsers);
            }
                  
              
          })
  
  
  
  
        }
  
       
        
          
      }











    return (
        <div>
           
            <div className='container' >
            
            {
               myOrders?.map(order=><ShowOrder key={order._id} order={order} handleDelete={handleDelete} showBtn={showBtn}></ShowOrder>)
            }
        
        
    </div>
        </div>
    );
};

export default MyOrder;