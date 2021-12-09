import React, { useEffect, useState } from 'react';
import ShowOrder from '../ShowOrder/ShowOrder';

const ManageAllOrder = () => {

    const [allOrders,setAllOrders] = useState([]);
    const [isStatus,setIsStatus]= useState(true);
    const showBtn = true;
    
    useEffect(()=>{
        fetch('https://stormy-gorge-80832.herokuapp.com/order/manageall')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))

    },[])


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
              const remainingUsers = allOrders.filter((user) => user._id !== _id);
              setAllOrders(remainingUsers);
            }
                  
              
          })
  
  
  
  
        }
  
       
        
          
      }






      // handleStatus here



      const handleStatus = (_id) =>{
      
        // setIsStatus(true)
        console.log(_id)
        const url = `https://stormy-gorge-80832.herokuapp.com/status/${_id}`
        fetch(url,{
            method : 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({isStatus})
  
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                
                alert("sure want to approve?")
                const remainingUsers = allOrders.filter((user) => user._id !== _id);
                const upDatedUser = allOrders.find((order) => order._id === _id)
                upDatedUser.status=true
                setAllOrders([...remainingUsers,upDatedUser]);
               
            }
        })
  
       
       
  
  
  
  
  
  
  
  
      }


















    
    return (
        <div>
         <div style={{marginTop:'30px' , marginBottom:'30px'}} >
         <h3><b>Manage all</b><span style={{color:'goldenrod' , fontWeight:'bold'}}> Orders</span></h3>
       </div>
            {


allOrders?.map(orders=><ShowOrder key={orders._id} order={orders}   showBtn={showBtn} handleStatus={handleStatus} handleDelete={handleDelete} ></ShowOrder>)






}
            
        </div>
    );
};

export default ManageAllOrder;