import React from 'react';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
//import CardDeck from 'react-bootstrap/CardDeck'
import { Row, Col } from 'react-bootstrap';
import './MenuCard.css'

function MenuCard() {
    const cardInfo = [
        { id: "001", title: "Halloumi Sticks & Dip", description: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75", allergen: "/images/image14.png", tip: "Lupin" },
        { id: "002", title: "5 Chicken Wings", description: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg", allergen: "/images/image2.png", tip: "Celery" },
        { id: "003", title: "Sunset Burger", description: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg", allergen: "/images/image3.png", tip: "Treenuts" },
        { id: "004", title: "The Great Imitator Wrap", description: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png", allergen: "/images/image1.png", tip: "Gluten" },
        { id: "005", title: "Halloumi Sticks & Dip2", description: "2Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75", allergen: "/images/image14.png", tip: "Lupin" },
        { id: "006", title: "5 Chicken Wings2", description: "2Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg", allergen: "/images/image2.png", tip: "Celery" },
        { id: "007", title: "Sunset Burger2", description: "2Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg", allergen: "/images/image3.png", tip: "Treenuts" },
        { id: "008", title: "The Great Imitator Wrap2", description: "2Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png", allergen: "/images/image1.png", tip: "Gluten" },
    ]

    const renderCard = (card, index) => {
        return (
            <Card key={index} className="menu-card">
                <Row>
                    <Col>
                        <Card.Img className="card-image" src={card.image} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Card.Body classname="card-body">
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Footer className="card-footer">
                            <Badge className="card-badge">
                                <OverlayTrigger overlay={<Tooltip id="tooltip-top">{card.tip}</Tooltip>}>
                                    <img src={card.allergen} alt="" className="allergen-img"></img>
                                </OverlayTrigger>
                            </Badge>
                        </Card.Footer>
                    </Card.Body>
                    <Card.Text className="card-text">{card.description}</Card.Text>
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
