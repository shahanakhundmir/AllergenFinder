import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NavbarMenu.css";

function NavbarMenu({selectSubMenu}) {

   
    return (
        <div>
            <Navbar collapseOnSelect className="menu" expand="lg" fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="navbar-collapse">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={()=>selectSubMenu('Starter')} className="menu-item" href="#starters">Starters</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('Mains')} className="menu-item" href="#mains">Mains</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('Sides')}className="menu-item" href="#sides">Sides</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('Extra')}className="menu-item" href="#extra">Extra</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('Desserts')}className="menu-item" href="#desserts">Desserts</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('Drinks')}className="menu-item" href="#drinks">Drinks</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarMenu;

/**
 * 
 * <Form inline className="container-fluid">
                        <Button className="restaurant-info" >Restaurant Information</Button>
                    </Form>
 */