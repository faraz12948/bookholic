import { TextField,Button } from '@mui/material';

import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    
   

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://stormy-gorge-80832.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
               
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   alert('Success')
                }
            })

        e.preventDefault()
    }
    return (
        <div>
        <h2 style={{fontWeight:'bold',marginTop:'30px'}}>Add New Admin</h2>
        <form style={{marginTop:'30px',backgroundColor:"rgb(228, 226, 226)", padding:'60px'}} onSubmit={handleAdminSubmit}>
            <TextField
                sx={{ width: '50%' }}
                label="Email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <Button type="submit" variant="contained">Make Admin</Button>
        </form>
        
    </div>
    );
};

export default MakeAdmin;