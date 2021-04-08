import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
//import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
//import CardDeck from 'react-bootstrap/CardDeck'
import { Row, Col } from 'react-bootstrap';
import './MenuCard.css'
import AppModal from '../AppModal/AppModal';

function MenuCard(props) {
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
        <div>
            <Card key={props.card.id} style={{}} className="menu-card" onClick={onCardClick}>
                <Row className="margin" style={{ border: '2px solid yellow' }}>
                    <Col xs={4} sm={4} md={4} lg={4} className="text-center" style={{ border: '2px solid red' }}>
                        <Card.Img style={{ height: '4rem', width: '5rem', borderRadius: '10px', objectFit: 'cover' }} className="" src={props.card.image} alt="foodimg" />
                    </Col>
                    <Col className="margin" style={{ border: '2px solid blue' }}>
                        <Row style={{ border: '2px solid orange' }}>
                            <Card.Title className="card-title ">{props.card.title}</Card.Title>
                        </Row>
                        <Row style={{ border: '2px solid orange' }}>
                            <Card.Footer className="card-footer">
                                {renderAllergen}
                            </Card.Footer>
                        </Row>
                    </Col>
                </Row>
                <Row className="margin" style={{ border: '2px solid green' }}>
                    <Card.Text className="card-text">{props.card.description}</Card.Text>
                </Row>
            </Card>
            {show ? <AppModal
                show={show}
                id={props.card.id}
                image={props.card.image}
                title={props.card.title}
                description={props.card.description}
                allergen={renderAllergen}
                onClose={handleClose} /> : ''}
                )
        </div>
    );
}
export default MenuCard;



/**
 *
 *
 */
/**
 * const renderCard = (card, index) => {
        return (
            <Card key={index}
            >
                <Row style={{ border: '1px solid red'}}>
                    <Col style={{ border: '1px solid pink'}} className="text-center">
                    <img style={{width:'1.5em', height:'1.5em'}}className="" alt="logo" src="/images/crab.png" />
                    </Col>
                    <Col style={{ border: '1px solid blue'}}>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Card>)
    }
    return (
        <div>
            {cardInfo.map(renderCard)}
        </div>
    );
}
export default MenuCard;
 */