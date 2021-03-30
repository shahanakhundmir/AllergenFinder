import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import ReactTooltip from "react-tooltip";
import OverlayTrigger from "react-tooltip";
import Tooltip from "react-tooltip";

import "./Footer.css";


function Footer() {
    return (
        <div className='footer'>
            <Navbar fixed="bottom" className='footer'>
                <Navbar.Brand href="#home">
                    <OverlayTrigger key='top' placement='top'
                        overlay={<Tooltip id='tooltip-top'>Tooltip on <strong>TOP</strong></Tooltip>
                        }>
                        <img src="/images/fish_red_50x50.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}
export default Footer;



