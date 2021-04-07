import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./NavbarMenu.css";

function NavbarMenu({selectSubMenu}) {
    return (
        <div>
            <Navbar className="menu" expand="md" fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="navbar-collapse">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={()=>selectSubMenu('starter')} className="menu-item" href="#starters">Starters</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('main')} className="menu-item" href="#mains">Mains</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('sides')}className="menu-item" href="#sides">Sides</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('extra')}className="menu-item" href="#extra">Extra</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('dessert')}className="menu-item" href="#desserts">Desserts</Nav.Link>
                        <Nav.Link onClick={()=>selectSubMenu('drinks')}className="menu-item" href="#drinks">Drinks</Nav.Link>
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
