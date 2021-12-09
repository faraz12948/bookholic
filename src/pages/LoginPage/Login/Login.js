import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const {user,loginUser,isLoading,authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e =>{
        // console.log(loginData)
        
        loginUser(loginData?.email, loginData?.password, location, history);
        e.preventDefault();
    }
    return (
        <div >
            <Header></Header>
            <div className="container" style={{marginTop:'150px'}}>
            <h3>Login</h3>
            <form onSubmit={handleLoginSubmit}>
            
            <Form.Control className='my-5' onBlur={handleOnBlur} name="email" type="text" placeholder="your email" required/>
            <Form.Control className='my-5' onBlur={handleOnBlur} name="password" type="text" placeholder="password" required />
            

            <Button type="submit" variant="info">Login</Button>
            </form>
            <p className="my-3">Don't have an account?<Link to="/register"><Button variant="link">Register</Button></Link></p>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Login;