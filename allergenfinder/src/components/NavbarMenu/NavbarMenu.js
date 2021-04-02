import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./NavbarMenu.css";

function NavbarMenu() {
    return (
        <div>
            <Navbar className="menu" expand="md" fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="navbarCollapse">
                    <Nav className="mr-auto">
                        <Nav.Link href="#starters">Starters</Nav.Link>
                        <Nav.Link className="menuItem" href="#mains">Mains</Nav.Link>
                        <Nav.Link className="menuItem" href="#sides">Sides</Nav.Link>
                        <Nav.Link className="menuItem" href="#extra">Extra</Nav.Link>
                        <Nav.Link className="menuItem" href="#desserts">Desserts</Nav.Link>
                        <Nav.Link className="menuItem" href="#drinks">Drinks</Nav.Link>
                    </Nav>
                    <Form inline className="container-fluid">
                        <Button className="restaurantInfo">Restaurant Information</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarMenu;
