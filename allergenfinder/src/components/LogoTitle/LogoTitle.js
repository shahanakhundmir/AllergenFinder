import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
//import Fixed from 'react-bootstrap/Fixed';
//import NavbarMenu from "../NavbarMenu/NavbarMenu";
import "./LogoTitle.css";

function LogoTitle() {
  return (
    <div>
      <Navbar className="nav-bar" collapseOnSelect expand="lg" fixed="top" >
        <Navbar.Brand className='navfont'>
          <img alt="logo" src="/images/crab.png" />{' '}Allergen Finder</Navbar.Brand>
        <Form inline className="ml-auto"  >
          <NavDropdown title="Restaurant Name" className="dropdown" >
            <NavDropdown.Item className="menu-item" href="#action/3.1">Restaurant1</NavDropdown.Item>
            <NavDropdown.Item className="menu-item" href="#action/3.2">Restaurant2</NavDropdown.Item>
            <NavDropdown.Item className="menu-item" href="#action/3.3">Restaurant3</NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  )
}

export default LogoTitle;


/**
 *
 *
 * <div className="menubar-container">
            <Navbar className="nav-bar" collapseOnSelect expand="lg" fixed="top" >
                <Navbar.Brand className='navfont'>
                    <img alt="logo" src="/images/crab.png" />{' '}Allergen Finder</Navbar.Brand>

                <Nav className="container-fluid" >
                    <NavDropdown title="Restaurant Name" class="dropdown" className="ml-auto">
                        <NavDropdown.Item className="menu-item" href="#action/3.1">Restaurant1</NavDropdown.Item>
                        <NavDropdown.Item className="menu-item" href="#action/3.2">Restaurant2</NavDropdown.Item>
                        <NavDropdown.Item className="menu-item" href="#action/3.3">Restaurant3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div >


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