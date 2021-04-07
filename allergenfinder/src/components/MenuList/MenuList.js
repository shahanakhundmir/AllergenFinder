import React, { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';

function MenuList(props) {
    const cardInfo = [
        {
            id: "001", title: "Halloumi Sticks & Dip", discription: "Five chunky sticks of grilled halloumi with chilli jam for dipping...", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/26/13/halloumisticks.jpg?width=990&auto=webp&quality=75",
            allergen: [
                { allergenImage: "/images/image14.png", tooltip: "Lupin" },
                { allergenImage: "/images/image2.png", tooltip: "Celery" }
            ]

        },
        {
            id: "002", title: "5 Chicken Wings", discription: "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served...", image: "https://cdn.leitesculinaria.com/wp-content/uploads/2012/06/chinese-five-spice-chicken-wings-fp.jpg.optimal.jpg",
            allergen: [
                { allergenImage: "/images/image2.png", tooltip: "Celery" }
            ]
        },
        {
            id: "003", title: "Sunset Burger", discription: "Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce ...", image: "https://www.nandos.co.uk/sites/default/files/M_BPW_SunsetBurger_smaller.jpg",
            allergen: [
                { allergenImage: "/images/image3.png", tooltip: "Treenuts" }
            ]
        },
        {
            id: "004", title: "The Great Imitator Wrap", discription: "Our PERi-Plant strips are made from pea-protein but taste...", image: "https://www.nandos.co.uk/sites/default/files/wrap_live.png",
            allergen: [
                { allergenImage: "/images/image3.png", tooltip: "Treenut" },
                { allergenImage: "/images/image2.png", tooltip: "Celery" }
            ]
        },
    ]

    return (
        <div className="menuCardClass">
            {cardInfo.map((card, index) => (
                <MenuCard key={card.id} index={index} card={card} />
            ))}
        </div>
    );
}
export default MenuList;