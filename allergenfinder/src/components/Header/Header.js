import React from 'react';
import TitleLogo from "../TitleLogo/TitleLogo";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Header.css";

function Header() {
    return (
   
        <div className='container'>
            <TitleLogo/>
            <DropdownMenu/>
        </div>
    
    )

}




/**function Header() {
    return (
            <div class='container'>
                <TitleLogo />
                <DropdownMenu />
            </div>
    )
}**/

export default Header;


/**
 <Navbar collapseOnSelect expand="lg" fixed="top" >
  <Navbar.Brand  className='navfont'>
      <img alt="logo" src="/images/crab.png" width="50" height="50" />{' '}Allergen Finder</Navbar.Brand>
    <Nav className="mr-auto">
      <NavDropdown  title="Restaurant Name" class ="dropdown">
        <NavDropdown.Item href="#action/3.1">Restaurant1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Restaurant2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Restaurant3</NavDropdown.Item>
      </NavDropdown>
    </Nav>
</Navbar>
function Header() {
    return (

        <body>
            <section id='header'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col align-self-start col-sm-12 col-md-5' ><TitleLogo/></div>
                        <div className='col-sm-12 col-md-4'></div>
                        <div className='col-sm-12 col-md-3' id = 'menu-button' ><DropdownMenu /></div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 col-md-6' ><NavbarMenu/></div>
                        <div className='col-sm-12 col-md-1'>Button</div>
                        <div className='col-sm-12 col-md-2'></div>
                        <div className='col-sm-12 col-md-3'></div>
                    </div>
                </div >
            </section >
        </body >
)
}
**/


//<div><NavbarMenu /></div>