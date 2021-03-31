import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import "./Footer.css";


function Footer() {
    return (
        <div className='footer'>
            <Navbar fixed="bottom" className='footer'>
                <Navbar.Brand href="#home">
                <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Gluten</Tooltip>}>
                <img src="/images/image1.png" width="60" height="60" className="d-inline-block align-top" alt=""  />                
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Celery</Tooltip>}>
                    <img src="/images/image2.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Treenuts</Tooltip>}>
                    <img src="/images/image3.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Fish</Tooltip>}>
                    <img src="/images/image4.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Soy</Tooltip>}>
                    <img src="/images/image5.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Sesame</Tooltip>}>
                    <img src="/images/image6.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Peanuts</Tooltip>}>
                    <img src="/images/image7.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Crustaceans</Tooltip>}>
                    <img src="/images/image8.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Eggs</Tooltip>}>
                    <img src="/images/image9.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Molluscs</Tooltip>}>
                    <img src="/images/image10.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Milk</Tooltip>}>
                    <img src="/images/image11.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Mustard</Tooltip>}>
                    <img src="/images/image12.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Sulphur Dioxide Sulphites</Tooltip>}>
                    <img src="/images/image13.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger overlay={<Tooltip id='tooltip-top'>Lupin</Tooltip>}>
                    <img src="/images/image14.png" width="60" height="60" className="d-inline-block align-top" alt="" />
                    </OverlayTrigger>
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}
export default Footer;