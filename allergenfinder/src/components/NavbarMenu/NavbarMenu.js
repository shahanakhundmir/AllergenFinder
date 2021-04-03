import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./NavbarMenu.css";


function NavbarMenu() {
    return (
        <div>
            <Navbar className="menu" expand="lg" fixed="top" >
                <Nav className="mr-auto">
                    <Nav.Link href="#starters">Starters</Nav.Link>
                    <Nav.Link href="#mains">Mains</Nav.Link>
                    <Nav.Link href="#sides">Sides</Nav.Link>
                    <Nav.Link href="#extra">Extra</Nav.Link>
                    <Nav.Link href="#desserts">Desserts</Nav.Link>
                    <Nav.Link href="#drinks">Drinks</Nav.Link>
                </Nav>
                <Form inline className="container-fluid">
                    <Button variant="outline-primary">Restaurant Information</Button>
                </Form>
            </Navbar>
        </div>
    )
}
export default NavbarMenu;