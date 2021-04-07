import React from 'react';
import Card from 'react-bootstrap/Card'
//import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
//import CardDeck from 'react-bootstrap/CardDeck'
import { Row, Col } from 'react-bootstrap';
import './MenuCard.css'

function MenuCard(selectedMenu) {
    
    const cardInfo = selectedMenu.selectedMenu;
    const renderCard = (card, index) => {
        return (
            <Card key={index} style={{}} className="menu-card">
                <Row className="margin" style={{ border: '2px solid yellow' }}>
                    <Col xs={4} sm={4} md={4} lg={4} className="text-center" style={{ border: '2px solid red' }}>
                        <Card.Img style ={{height: '4rem',width: '5rem', borderRadius: '10px', objectFit: 'cover'}} className="" src={card.image} />
                    </Col>
                    <Col className="margin" style={{ border: '2px solid blue' }}>
                        <Row style={{ border: '2px solid orange' }}>
                            <Card.Title className="card-title ">{card.title}</Card.Title>
                        </Row>
                        <Row style={{ border: '2px solid orange' }}>
                            <Card.Footer className="card-footer">
                                <OverlayTrigger overlay={<Tooltip id="tooltip-top">{card.tip}</Tooltip>}>
                                    <img src={card.allergen} alt="" className="allergen-img"></img>
                                </OverlayTrigger>
                            </Card.Footer>
                        </Row>
                    </Col>
                </Row>
                <Row className="margin" style={{ border: '2px solid green' }}>
                    <Card.Text className="">{card.description}</Card.Text>
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