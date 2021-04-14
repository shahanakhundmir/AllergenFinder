import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import "./Footer.css";



function Footer({allergens, selectAllergen}) {
    return (
        <div className="div-footer">
            <Navbar fixed="bottom" className="footer">
                <Navbar.Brand className="footer-brand" href="#home">
                    {allergens.map(allergen => <OverlayTrigger 
                    overlay={<Tooltip id="tooltip-top">{allergen.allergenname}</Tooltip>}>
                        <img onClick={()=>selectAllergen(allergen.allergenname)} 
                        key={allergen.allergenid}
                        className= "allergen-icon" src={allergen.image} alt="" />
                    </OverlayTrigger>)}
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}
export default Footer;



