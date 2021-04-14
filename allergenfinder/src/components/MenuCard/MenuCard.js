import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
//import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
//import CardDeck from 'react-bootstrap/CardDeck'
import { Row, Col } from 'react-bootstrap';
import './MenuCard.css'
import AppModal from '../AppModal/AppModal';
//comment
function MenuCard(props, selectedAllergens) {
    const allergen = props.card.allergen
    const [show, setShow] = useState(false)
    const onCardClick = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const renderAllergen = allergen.map((d) =>
        <OverlayTrigger overlay={<Tooltip id='tooltip-top'>{d.tooltip}</Tooltip>}>
            <img className="allergen-img" src={d.allergenImage} alt="" style={{}} ></img>
        </OverlayTrigger>
    )

    //const cardInfo = props.selectedMenu.selectedMenu;

    return (
        <div onClick={onCardClick} style={{ backgroundColor: 'white', borderRadius: 15, margin: 15, padding: 15,  border: "2px solid brown" }} className="menu-card" >

            {/** key={props.card.id} className="menu-card"  className="allergy" 
            className={props.card.allergen ==="Gluten" ? "allergy" : ""*/}
    

                <Row style={{ border: '2px solid yellow' }}>
                    <Col xs={12} sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center" style={{}}>
                        <img className="card-image" src={props.card.image} alt="foodimg" />
                    </Col>
                    <Col style={{ border: '2px solid blue' }}>
                        <Row style={{ border: '2px solid orange' }}>
                            <Col className="card-title">
                                {props.card.title}
                            </Col>
                        </Row>
                        <Row style={{ border: '2px solid orange' }}>
                            <Col className="card-footer">
                                {renderAllergen}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ border: '2px solid green' }}>
                    <Col className="card-text">
                        {props.card.description}
                    </Col>
                </Row >
      
            {
                show ? <AppModal
                    show={show}
                    id={props.card.id
                    }
                    image={props.card.image}
                    title={props.card.title}
                    description={props.card.description}
                    allergen={renderAllergen}
                    onClose={handleClose} /> : ''
            }
        </div >
    );
}
export default MenuCard;
