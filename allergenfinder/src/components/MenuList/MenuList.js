import React, { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';

function MenuList({selectedMenu}) {
   

    return (
        <div className="menuCardClass">
            {selectedMenu.map((card, index) => (
                <MenuCard key={card.id} index={index} card={card} />
            ))}
        </div>
    );
}
export default MenuList;