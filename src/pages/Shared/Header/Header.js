import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top" style={{opacity:'0.9'}} >
                <Container>
                <Navbar.Brand as = {Link} to="/" >Book<span>Holic</span></Navbar.Brand>

                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  
                   <Navbar.Collapse id="responsive-navbar-nav">

                  
                  <Nav className="me-auto">
                  <Nav.Link as = {Link} to="/home" style={{color:'white'}}>Home</Nav.Link>
                  {/* <Nav.Link as = {Link} to="/services">Services</Nav.Link>
                  
                  <Nav.Link as = {Link} to="/about">About</Nav.Link>
                  <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
                  <Nav.Link as = {Link} to="/shop">Shop</Nav.Link> */}
                  <Nav.Link as = {Link} to='/explore' style={{color:'white'}}>Explore</Nav.Link>
                  
                  {
                     
                     (user.email)?

                     <>
                    
                     
                    
                     
                     
                     <Nav.Link as = {Link} to='/dashboard' style={{color:'white'}}>DashBoard</Nav.Link>
                     </>
                    
                    
                     :
                    ''
                 }
                 

            






                 </Nav>
                 {
                     (user.email)?<span style={{color:"white"}}>logged in as :{user.displayName}</span>:<p></p>
                 }

                 {
                     
                     (user.email)?
                    <NavLink to="/login"><Button variant="outline-light" style={{marginLeft:"20px"}} onClick={logout}>Log out</Button></NavLink>:
                    <NavLink to="/login" ><Button variant="outline-light" >Log in</Button></NavLink>
                 }
                 
                 
                 

                </Navbar.Collapse>

                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;