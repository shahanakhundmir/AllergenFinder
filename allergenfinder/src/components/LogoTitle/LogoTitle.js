import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import "./LogoTitle.css";

function LogoTitle() {

  const [restaurants, setRestaurant] = useState([
    {restId: '001', restName:'Nandos', branchName: 'London, Wembley'},
    {restId: '002', restName:'Nandos', branchName: 'Manchester'},
    {restId: '003', restName:'Bills', branchName: 'Swindon'},
  ])
  return (
    <div>
      <Navbar className="nav-bar" collapseOnSelect expand="lg" fixed="top" >
        <Navbar.Brand className='navfont'>
          <img alt="logo" src="/images/crab.png" />{' '}Allergen Finder</Navbar.Brand>
        <Form inline className="ml-auto"  >
          <NavDropdown title="Restaurant Name" className="dropdown" >
          {restaurants.map(rest => <NavDropdown.Item key={rest.restId} className="menu-item" href="#action/3.3">{rest.restName}({rest.branchName})</NavDropdown.Item>)}
          </NavDropdown>
        </Form>
      </Navbar>
    </div>
  )
}

export default LogoTitle;

/**
 * <NavDropdown.Item className="menu-item" href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item className="menu-item" href="#action/3.2">Restaurant2</NavDropdown.Item>
            <NavDropdown.Item className="menu-item" href="#action/3.3">Restaurant3</NavDropdown.Item>
 * 
 * 
 */
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