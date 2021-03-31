import React from 'react';
import Card from 'react-bootstrap/Card'
import './Body.css'

function Body() {
    const cardInfo = [
        { id: "001", title: "Halloumi Sticks & Dip", discription: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75" },
        { id: "002", title: "5 Chicken Wings", discription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served in your choice of spice.", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg" },
        { id: "003", title: "Sunset Burger", discription: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg" },
        { id: "004", title: "The Great Imitator Wrap", discription: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png" },
    ]
    const renderCard = (card, index) => {
        return (
            <Card key={index} className="box"
                onClick={() => alert("good choice")}
                style={{
                    height: "10rem",
                    width: "35rem",
                    margin: "5px",//gap between cards
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    cursor: "pointer",
                    border: "3px solid #EECA60",
                }} >
                <Card.Img src={card.image} style={{ height: "8rem", width: "10rem", objectFit: "cover" }} />
                <Card.Body
                    style={{
                    }}>
                    <Card.Title style={{ textAlign: "left", padding: "0rem" }} >{card.title}</Card.Title>
                    <Card.Text style={{ fontSize: "10", textAlign: "justify", padding: "0rem" }}>{card.discription}
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
export default Body;


/** import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import "./Body.css";

function Body({

    const [food, setFood] = useState([
        { id: "001", title: "Halloumi Sticks & Dip", discription: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75" },
        { id: "002", title: "5 Chicken Wings", discription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served in your choice of spice.", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg" },
        { id: "003", title: "Sunset Burger", discription: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg" },
        { id: "004", title: "The Great Imitator Wrap", discription: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png" },
        { id: "005", title: "Halloumi Sticks & Dip", discription: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75" },
        { id: "006", title: "5 Chicken Wings", discription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served in your choice of spice.", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg" },
        { id: "007", title: "Sunset Burger", discription: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg" },
        { id: "008", title: "The Great Imitator Wrap", discription: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png" },
    
    
    ])


    return (
        <div >
            <CardColumns className= 'CardColumns'>
                {food.map(card =>
                    <Card key={card.id} className="box" onClick={() => alert("good choice")} style={{
                        height: "10rem",
                        width: "35rem",
                        justifyContent: "space-around",
                        cursor: "pointer",
                        border: "3px solid #EECA60"
                    }} >
                        <Card.Img src={card.image} style={{ height: "80px", width: "120px", objectFit: "cover" }} />
                        <Card.Body style={{}}>
                            <Card.Title style={{ textAlign: "left", padding: "0rem" }} >{card.title}</Card.Title>
                            <Card.Text style={{ fontSize: "10", textAlign: "justify", padding: "0rem" }}>{card.discription}
                            </Card.Text>
                        </Card.Body>
                    </Card>)}
            </CardColumns>
        </div>
    )}
export default Body;*/













