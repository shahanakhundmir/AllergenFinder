import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


import "./NavbarMenu.css";

function NavbarMenu() {
    return (
        <div>
            <Navbar className="menu" expand="lg" fixed="top" >
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline className="container-fluid">
                    <Button variant="outline-primary">Restaurant info</Button>
                </Form>
            </Navbar>
        </div>
    )
}
export default NavbarMenu;





/**
 * <div className="navbarmenu">
            <ul id="nav">
                <li><a href="#">Starters</a></li>
                <li><a href="#">Mains</a></li>
                <li><a href="#">Extra</a></li>
                <li><a href="#">Desserts</a></li>
                <li><a href="#">Drinks</a></li>
            </ul>
        </div> **/