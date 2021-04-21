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
function MenuCard(props) {
    
    const selectedAllergens = props.selectedAllergens
    const composite = props.menuItemAllergens.filter(menuallergen => menuallergen.item_id === props.card.item_id)
    const allergens = props.allergens.filter(allergen =>
                        composite.some(menuallergen => menuallergen.allergen_id === allergen.allergen_id))
    
    console.log(allergens)
    
    const [show, setShow] = useState(false)

    const onCardClick = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const renderAllergen = allergens.map((d) =>
        <OverlayTrigger overlay={<Tooltip id='tooltip-top'>{d.allergen_name}</Tooltip>}>
            <img className="allergen-img" src={d.allergen_image} alt="" style={{}} ></img>
        </OverlayTrigger>)

    return (
        <div onClick={onCardClick} className={`menu-card ${Object.values(allergens).map(allergen =>
            allergen.allergen_name).filter(allergen => selectedAllergens.includes(allergen)).length !== 0 ? 'allergy' : ''}`}>
            <Row>
                <Col xs={12} sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center" style={{}}>
                    <img className="card-image" src={props.card.image} alt="foodimg" />
                </Col>
                <Col>
                    <Row>
                        <Col className="card-title">
                            {props.card.name}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="card-footer">
                            {renderAllergen}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="card-text">
                    {props.card.short_desc}
                </Col>
            </Row >
            <div className="clickinterceptor" onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                {show ?
                    <AppModal
                        show={show}
                        id={props.card.item_id}
                        image={props.card.image}
                        title={props.card.name}
                        description={props.card.full_desc}
                        ingredients={props.card.ingredients}
                        allergen={renderAllergen}
                        onClose={handleClose}> {console.log(show)}</AppModal>
                    : null
                }
            </div>
        </div >
    );
}
export default MenuCard;

/**
 *
 *  {console.log(props.card.title)}
            {console.log('food allergens: ' + Object.values(props.card.allergen).map(allergen => allergen.tooltip))}
            {console.log('selected allergens: ' + selectedAllergens )}
            {intersection = Object.values(props.card.allergen).map(allergen => allergen.tooltip).filter(allergen => selectedAllergens.includes(allergen))}
            {console.log('intersection: ' + intersection)}

            //const intersection = Object.values(selectedAllergens).filter(element => allergen.allergenname.includes(element))


    //<div onClick={onCardClick} className={`menu-card ${intersection.length === 0 ? 'allergy' : ''}`}>
 */