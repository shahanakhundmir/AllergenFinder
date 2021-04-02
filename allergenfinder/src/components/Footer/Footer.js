import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import ReactTooltip from "react-tooltip";
//import OverlayTrigger from "react-tooltip";
//import Tooltip from "react-tooltip";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Button from 'react-bootstrap/Button';

import "./Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <Navbar fixed="bottom" className="footer">
                <Navbar.Brand href="#home">
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Gluten</Tooltip>}>
                        <img src="/images/image1.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Celery</Tooltip>}>
                        <img src="/images/image2.png"alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Treenuts</Tooltip>}>
                        <img src="/images/image3.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Fish</Tooltip>}>
                        <img src="/images/image4.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Soy</Tooltip>}>
                        <img src="/images/image5.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Sesame</Tooltip>}>
                        <img src="/images/image6.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Peanuts</Tooltip>}>
                        <img src="/images/image7.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Crustaceans</Tooltip>}>
                        <img src="/images/image8.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Eggs</Tooltip>}>
                        <img src="/images/image9.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Molluscs</Tooltip>}>
                        <img src="/images/image10.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Milk</Tooltip>}>
                        <img src="/images/image11.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Mustard</Tooltip>}>
                        <img src="/images/image12.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Sulphur Dioxide Sulphites</Tooltip>}>
                        <img src="/images/image13.png" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Lupin</Tooltip>}>
                        <img src="/images/image14.png" alt="" />
                    </OverlayTrigger>
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}
export default Footer;

/**function Footer() {
    return (
        <div className='footer'>
            <Navbar fixed="bottom" className='footer'>
                <Navbar.Brand href="#home">
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Egg</Tooltip>}>
                        <img src="\images\eggs_red_50x50.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Fish</Tooltip>}>
                        <img src="/images/fish_red_50x50.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}
export default Footer; */




