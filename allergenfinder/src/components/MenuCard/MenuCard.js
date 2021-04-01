import React from 'react';
import Card from 'react-bootstrap/Card'
//import AppModal from './components/AppModal/AppModal'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


import './MenuCard.css'

function MenuCard() {
    const cardInfo = [
        { id: "001", title: "Halloumi Sticks & Dip", discription: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75", allergen: "/images/image14.png", tip: "Lupin" },
        { id: "002", title: "5 Chicken Wings", discription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg", allergen: "/images/image2.png", tip: "Celery" },
        { id: "003", title: "Sunset Burger", discription: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg", allergen: "/images/image3.png", tip: "Treenuts" },
        { id: "004", title: "The Great Imitator Wrap", discription: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png", allergen: "/images/image1.png", tip: "Gluten" },
    ]
    const renderCard = (card, index) => {
        return (
            <Card key={index} className="box"
                style={{
                    height: "12rem",
                    width: "30rem",
                    margin: "10px",//gap between cards
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    cursor: "pointer",
                    border: "3px solid #EECA60",
                    borderRadius: '20px',
                }} >
                <Card.Img src={card.image} style={{ height: "8rem", width: "10rem", objectFit: "cover" }} />
                <Card.Body
                    style={{
                    }}>
                    <Card.Title style={{ textAlign: "left", padding: "0rem", fontFamily: 'NewTegomin-Regular', fontSize: "15" }} >{card.title}</Card.Title>
                    <Card.Text style={{ fontSize: "10", textAlign: "justify", padding: "0rem", fontFamily: 'PTSans-Regular' }}>{card.discription}
                        <div style={{ width: "auto", marginTop: "0px" }}>
                            <Badge variant="light" style={{ backgroundColor: "red", margin: "0px", height: "2.5rem", width: "3rem", objectFit: "fill", backgroundColor: "white" }}>
                                <OverlayTrigger overlay={<Tooltip id='tooltip-top'>{card.tip}</Tooltip>}>
                                    <img src={card.allergen} alt="" style={{ height: "2rem", width: "2.5rem", objectFit: "fill" }}></img>
                                </OverlayTrigger>
                            </Badge>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>)
    }
    return (
        <div className="menuCardClass">
            {cardInfo.map(renderCard)}
        </div>
    );
}
export default MenuCard;