import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



import "./Body.css";

function Body() {
    return (
        <div >
            <CardDeck className="deck">
                <Card className="card"></Card>
                <Card className="card"></Card>
                <Card className="card"></Card>
            </CardDeck>
            <CardDeck className="deck">
                <Card className="card"></Card>
                <Card className="card"></Card>
                <Card className="card"></Card>
            </CardDeck>
        </div>
    )
}

export default Body;

