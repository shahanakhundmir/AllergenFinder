import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <Navbar fixed="bottom" className='footer'>
                <Navbar.Brand href="#home">
                    <img src="/images/fish_red_50x50.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}
export default Footer;