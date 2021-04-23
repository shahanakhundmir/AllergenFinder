import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import Tooltip from 'react-bootstrap/Tooltip';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Row, Col } from 'react-bootstrap';
import "./Footer.css";

function Footer({ allergens, selectAllergen, selectedAllergens }) {
    return (
        <div className="div-footer">
            <Navbar fixed="bottom" className="footer">
                <Navbar.Brand className="footer-brand" href="#footer">
                    {allergens.map(allergen =>
                        <Row className="allergen-row">
                            <Col className="d-flex justify-content-center">
                                <img onClick={() => selectAllergen(allergen.allergen_name)}
                                    key={allergen.allergen_id}
                                    className={`allergen-icon ${(selectedAllergens.filter(a => a === allergen.allergen_name)).length !== 0 ? 'allergen-selected' : ''}`}
                                    src={allergen.allergen_image}
                                    alt="" />
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <h6 className='allergen-text'>{allergen.allergen_name}</h6>
                            </Col>
                        </Row>)}
                </Navbar.Brand>
            </Navbar>
        </div >
    )
}
export default Footer;
/**
 *
 * {allergens.map(allergen =>
                            <img onClick={() => selectAllergen(allergen.allergen_name)}
                            key={allergen.allergen_id}
                            className={`allergen-icon ${(selectedAllergens.filter(a => a === allergen.allergen_name)).length !== 0  ? 'allergen-selected' : ''}`}
                            src={allergen.allergen_image}
                            alt=""
                            />
                       )}
 */





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