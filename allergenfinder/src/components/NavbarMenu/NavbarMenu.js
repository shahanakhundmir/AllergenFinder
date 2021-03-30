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
            <Navbar className="menu" expand="md" fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#starters">Starters</Nav.Link>
                        <Nav.Link className="menu-item" href="#mains">Mains</Nav.Link>
                        <Nav.Link className="menu-item" href="#sides">Sides</Nav.Link>
                        <Nav.Link className="menu-item" href="#extra">Extra</Nav.Link>
                        <Nav.Link className="menu-item" href="#desserts">Desserts</Nav.Link>
                        <Nav.Link className="menu-item" href="#drinks">Drinks</Nav.Link>
                    </Nav>
                    <Form inline className="container-fluid">
                        <Button className="restaurant-info">Restaurant Information</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarMenu;
