import React from 'react';

import welcome from '../../../assests/images/welcome.gif'


const DashBoardHome = () => {
    return (
        <div  style={{marginTop:'30px'}}>
            <h3>Manage your work form here</h3>
        
            <img style={{width:'50%'}} src={welcome} alt=""></img>
         
          
            
        </div>
    );
};

export default DashBoardHome;