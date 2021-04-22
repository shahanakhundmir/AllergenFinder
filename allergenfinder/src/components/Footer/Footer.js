import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import { View, Text, Image, ScrollView } from 'react-native';
import { Row, Col } from 'react-bootstrap';
//import ImageScroller from 'react-image-scroller';
import { ReactSmartScroller } from 'react-smart-scroller'

import "./Footer.css";


function Footer({ allergens, selectAllergen, selectedAllergens}) {
    return (
        <div className="div-footer">
            <Navbar fixed="bottom" className="footer">
                <Navbar.Brand className="footer-brand" href="#home">
                        {allergens.map(allergen => 
                      
                            <img onClick={() => selectAllergen(allergen.allergen_name)} 
                            key={allergen.allergen_id} 
                            className={`allergen-icon ${(selectedAllergens.filter(a => a === allergen.allergen_name)).length !== 0  ? 'allergen-selected' : ''}`}
                            src={allergen.allergen_image} 
                            alt=""
                            />
                       )}
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}

export default Footer;




/**
 * 
 * <div className="div-footer">
            <Navbar fixed="bottom" className="footer">
                <Navbar.Brand className="footer-brand" href="#home">
                    {allergens.map(allergen => <Card containerStyle={{borderWidth: 0, borderColor: 'transparent', elevation: 0, height: '7rem' }}>
                    <OverlayTrigger
                            overlay={<Tooltip id="tooltip-top">{allergen.allergenname}</Tooltip>}>
                        <Card.Img  Key={allergen.allergenid} 
                            className="allergen-icon" 
                            src={allergen.image}  />
  
                        </OverlayTrigger>
                        <Card.Text>Card Title</Card.Text>0
                        </Card>)}
                </Navbar.Brand>
            </Navbar>
        </div >
 */