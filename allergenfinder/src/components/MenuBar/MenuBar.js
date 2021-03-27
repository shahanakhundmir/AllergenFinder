import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./MenuBar.css";


function MenuBar() {
    return (
        <div className="menubar-container">
            <Navbar collapseOnSelect expand="lg" fixed="top" >
                <Navbar.Brand className='navfont'>
                    <img alt="logo" src="/images/crab.png" width="50" height="50" />{' '}Allergen Finder</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavDropdown title="Restaurant Name" class="dropdown">
                        <NavDropdown.Item href="#action/3.1">Restaurant1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Restaurant2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Restaurant3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div >
    )
}

export default MenuBar;



/**
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/home">Starter</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1">Main</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Dessert</Nav.Link>
            </Nav.Item>
        </Nav>**/