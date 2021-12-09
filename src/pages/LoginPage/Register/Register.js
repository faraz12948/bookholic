import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const {user,registerUser,isLoading,authError} = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e =>{
        // console.log(loginData)
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, history);
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <div className="container" style={{marginTop:'110px'}}>
            <h3>Register</h3>
            <form onSubmit={handleLoginSubmit}>
            <Form.Control   className="my-5" onBlur={handleOnBlur} name="name" type="text" placeholder="Your name" />
            <Form.Control   className="my-5" onBlur={handleOnBlur} name="email" type="text" placeholder="Email" />
            <Form.Control   className="my-5" onBlur={handleOnBlur} name="password" type="text" placeholder="Password" />
            <Form.Control   className="my-5" onBlur={handleOnBlur} name="password2" type="text" placeholder="Retype password" />

            <Button type="submit" variant="info">Register</Button>
            </form>
            <p className="my-3">Already have an account?<Link to="/login"><Button variant="link">Login</Button></Link></p>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;